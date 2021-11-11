require("./bootstrap");

window.Vue = require("vue").default;

import Loading from "@components/Loading.vue";

import router from "./router";

import "@/components";

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status } = error.response;

        if (status === 404) {
            router.push({ name: "404" });
        }

        return Promise.reject(error);
    }
);

const app = new Vue({
    el: "#app",
    router,
    components: { Loading },
    mounted: function () {
        this.$loading = this.$refs.loading;
    },
});
