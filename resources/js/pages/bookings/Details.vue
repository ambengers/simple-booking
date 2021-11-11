<template>
    <layout v-if="!!booking">
        <div class="card w-1/4">
            <div class="card-body">
                <h1 class="card-title mb-8 text-2xl">
                    {{ booking.room.name }}
                </h1>
                <p class="card-text text-gray-600 mb-2">
                    Date: {{ booking.date | formatDate }}
                </p>
                <p class="card-text text-gray-600 mb-2">
                    From: {{ booking.from | formatTime }}
                </p>
                <p class="card-text text-gray-600 mb-8">
                    To: {{ booking.to | formatTime }}
                </p>
                <p class="card-text text-gray-600 mb-8">
                    Booked By: {{ booking.creator.full_name }}
                </p>
                <router-link :to="{ name: 'bookings.index' }" class="btn-link">
                    Back To List
                </router-link>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
    data() {
        return {
            booking: null,
        };
    },
    mounted() {
        this.getBooking();
    },
    filters: {
        formatDate(date) {
            return moment(date).format("Y-MM-DD");
        },

        formatTime(time) {
            return moment(time).format("HH:MM a");
        },
    },
    methods: {
        getBooking() {
            let { id } = this.$route.params;
            return axios
                .get(`/api/bookings/${id}`, {
                    params: {
                        load: "room,creator",
                    },
                })
                .then(({ data }) => {
                    this.booking = data.data;
                });
        },
    },
};
</script>
