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
                <th class="text-center">Room</th>
                <th class="text-center">Date</th>
                <th class="text-center">From</th>
                <th class="text-center">To</th>
                <th class="text-center">Booked By</th>
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

            resourceToDestroy: null,

            deleting: false,

            perPage: 15,
        };
    },

    mounted() {
        this.getbookings();
    },

    filters: {
        formatDate(date) {
            return moment(date).format("DD-MM-Y");
        },

        formatTime(time) {
            return moment(time).format("HH:MM a");
        },
    },

    methods: {
        getbookings(navigationPage, params) {
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

        goToPage(page) {
            this.getbookings(page);
        },
    },
};
</script>
