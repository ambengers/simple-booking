export default {
    data() {
        return {
            auth: {
                user: null,
            },
        };
    },

    created() {
        axios.get("/api/authenticated-user").then(({ data }) => {
            this.auth.user = data.data;
        });
    },

    methods: {
        getAuthenticatedUser() {
            // We do not want to use the global axios instance here so
            // that we won't get intercepted by global interceptors
            let request = axios.create();

            request
                .get("/authenticated-user")
                .then(({ data }) => {
                    this.auth.user = data.data;
                })
                .catch(({ response }) => {
                    return "";
                });
        },
    },
};
