<template>
    <layout>
        <div class="mb-4" v-if="isAuthenticated">
            <router-link
                :to="{
                    name: 'bookings.store',
                }"
                class="btn btn-primary"
            >
                Create Booking
            </router-link>
        </div>
        <table
            class="table table-striped text-left table-sm text-sm w-full mb-8"
        >
            <thead>
                <th class="text-center">
                    <button
                        class="btn-link text-black font-bold"
                        @click="sort('room.name')"
                    >
                        Room
                    </button>
                </th>
                <th class="text-center">
                    <button
                        class="btn-link text-black font-bold"
                        @click="sort('date')"
                    >
                        Date
                    </button>
                </th>
                <th class="text-center">
                    <button
                        class="btn-link text-black font-bold"
                        @click="sort('from')"
                    >
                        From
                    </button>
                </th>
                <th class="text-center">
                    <button
                        class="btn-link text-black font-bold"
                        @click="sort('to')"
                    >
                        To
                    </button>
                </th>
                <th class="text-center">
                    <button
                        class="btn-link text-black font-bold"
                        @click="sort('creator.full_name')"
                    >
                        Booked By
                    </button>
                </th>
                <th class="text-center">Actions</th>
            </thead>
            <tbody v-if="bookings && bookings.data.length > 0">
                <tr v-for="(booking, key) in bookings.data" :key="key">
                    <td class="px-2">{{ booking.room.name }}</td>
                    <td class="px-2 text-center">
                        {{ booking.date | formatDate }}
                    </td>
                    <td class="text-center px-2">
                        {{ booking.from | formatTime }}
                    </td>
                    <td class="text-center px-2">
                        {{ booking.to | formatTime }}
                    </td>
                    <td class="text-center px-2">
                        {{ booking.creator.full_name }}
                    </td>
                    <td class="text-center px-2">
                        <div class="flex justify-center space-x-2">
                            <router-link
                                class="text-gray-400"
                                :to="{
                                    name: 'bookings.show',
                                    params: { id: booking.id },
                                }"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </router-link>
                            <router-link
                                v-if="
                                    isAuthenticated &&
                                    auth.user.id == booking.created_by
                                "
                                :to="{
                                    name: 'bookings.update',
                                    params: { id: booking.id },
                                }"
                                class="text-gray-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                            </router-link>
                            <button
                                v-if="
                                    isAuthenticated &&
                                    auth.user.id == booking.created_by
                                "
                                @click="openDeleteModal(booking)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                            </button>
                            <modal
                                v-show="deleting"
                                title="Confirmation"
                                message="Are you sure you want to delete the booking?"
                                @confirm="destroy"
                                @close="closeDeleteModal"
                            ></modal>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination
            v-if="bookings && bookings.data.length > 0"
            :links="bookings && bookings.meta"
            @goToPage="goToPage"
        ></pagination>
    </layout>
</template>
<script>
import { Auth } from "@mixins";
export default {
    mixins: [Auth],
    data() {
        return {
            bookings: null,

            perPage: 15,

            sortField: "",
            sortDirection: "desc",

            resourceToDestroy: null,
            deleting: false,
        };
    },

    mounted() {
        this.loadBookings();
    },

    filters: {
        formatDate(date) {
            return moment.utc(date).format("DD-MM-YYYY");
        },

        formatTime(time) {
            return moment.utc(time).format("HH:mm");
        },
    },

    methods: {
        loadBookings(navigationPage, params) {
            let page = navigationPage || 1;

            return axios
                .get("/api/bookings", {
                    params: {
                        page,
                        per_page: this.perPage,
                        ...params,
                        load: "room,creator",
                    },
                })
                .then(({ data }) => {
                    this.bookings = data;
                });
        },

        sort(field) {
            this.sortDirection = this.sortDirection == "desc" ? "asc" : "desc";

            this.loadBookings(1, { sort: `${field}|${this.sortDirection}` });
        },

        goToPage(page) {
            this.loadBookings(page);
        },

        destroy() {
            let { id } = this.resourceToDestroy;

            return axios.delete(`/api/bookings/${id}/destroy`).then(() => {
                this.bookings.data = this.bookings.data.filter((item) => {
                    return item.id != id;
                });
                this.closeDeleteModal();
            });
        },

        openDeleteModal(booking) {
            this.resourceToDestroy = booking;
            this.deleting = true;
        },

        closeDeleteModal() {
            this.resourceToDestroy = null;
            this.deleting = false;
        },
    },
};
</script>
