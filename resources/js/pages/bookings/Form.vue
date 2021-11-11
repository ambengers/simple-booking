<template>
    <layout>
        <div class="card w-1/2">
            <div class="card-body">
                <h1 class="text-3xl mb-8">{{ pageTitle }} Booking</h1>
                <select-input
                    label="Room *"
                    v-model="form.room"
                    :error="getError('room')"
                    :options="rooms"
                    :nullable="true"
                ></select-input>
                <text-input
                    label="Date *"
                    v-model="form.date"
                    :error="getError('date')"
                    placeholder="YYYY-MM-DD"
                ></text-input>
                <text-input
                    label="From *"
                    v-model="form.from"
                    :error="getError('from')"
                    placeholder="HH:MM"
                ></text-input>
                <text-input
                    label="To *"
                    v-model="form.to"
                    :error="getError('to')"
                    placeholder="HH:MM"
                ></text-input>
                <div class="w-full text-right mt-4">
                    <router-link
                        class="text-gray-400 mr-2"
                        :to="{ name: 'bookings.index' }"
                    >
                        Cancel
                    </router-link>
                    <button class="btn btn-primary" @click="submit">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
import { Form, ErrorBag } from "@mixins";
export default {
    mixins: [Form, ErrorBag],

    data() {
        return {
            rooms: [],
        };
    },

    mounted() {
        this.loadRooms().then(() => {
            this.loadBooking();
        });
    },

    computed: {
        pageTitle() {
            return !!this.$route.params.id ? "Update" : "Create";
        },
    },

    methods: {
        submit() {
            let { id } = this.form;

            let url = id ? `/api/bookings/${id}/update` : `/api/bookings/store`;
            let method = id ? "patch" : "post";

            this.clearErrors();

            return axios[method](url, { ...this.form }).then(
                ({ data }) => {
                    this.$router.push({
                        name: "bookings.show",
                        params: { id: data.data.id },
                    });
                },
                (err) => (this.errorBag = err.response.data)
            );
        },

        loadRooms() {
            return axios.get("/api/rooms").then(({ data }) => {
                this.rooms = data.data.map((room) => {
                    return {
                        label: room.name,
                        value: room.id,
                    };
                });
            });
        },

        loadBooking() {
            let { id } = this.$route.params;

            if (!id) return;

            return axios.get(`/api/bookings/${id}`).then(({ data }) => {
                let booking = data.data;
                let { room_id } = booking;

                this.form = {
                    ...data.data,
                    room: room_id,
                    date: moment(booking.date).format("YYYY-MM-DD"),
                    from: moment(booking.from).format("HH:MM"),
                    to: moment(booking.to).format("HH:MM"),
                };
            });
        },
    },
};
</script>
