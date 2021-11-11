<template>
    <layout>
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
                    <td class="text-center px-2">{{ booking.from }}</td>
                    <td class="text-center px-2">{{ booking.to }}</td>
                    <td class="text-center px-2">
                        {{ booking.creator.full_name }}
                    </td>
                    <td class="text-center px-2">&nbsp;</td>
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

        destroy() {
            let { id } = this.resourceToDestroy;

            return axios.delete(`/api/bookings/${id}/destroy`).then(() => {
                this.bookings.data.splice(this.resourceToDestroy, 1);
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

        goToPage(page) {
            this.getbookings(page);
        },
    },
};
</script>
