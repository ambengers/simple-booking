import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            component: () => import("@pages/bookings/Index"),
            name: "home",
        },
        {
            path: "/bookings",
            component: () => import("@pages/bookings/Index"),
            name: "bookings.index",
        },
        {
            path: "/bookings/store",
            component: () => import("@pages/bookings/Form"),
            name: "bookings.store",
        },
        {
            path: "/bookings/:id",
            component: () => import("@pages/bookings/Details"),
            name: "bookings.show",
        },
        {
            path: "/bookings/:id/update",
            component: () => import("@pages/bookings/Form"),
            name: "bookings.update",
        },
    ],
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach(to, from, next) {
    // Get the matched components and resolve them.
    const components = await resolveComponents(
        router.getMatchedComponents({ ...to })
    );

    if (components.length === 0) {
        return next();
    }

    // Start the loading bar.
    if (components[components.length - 1].loading !== false) {
        router.app.$nextTick(() => router.app.$loading.start());
    }

    next();
}

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach(to, from, next) {
    await router.app.$nextTick();
    router.app.$loading.finish();
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents(components) {
    return Promise.all(
        components.map((component) => {
            return typeof component === "function" ? component() : component;
        })
    );
}

/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }

    if (to.hash) {
        return { selector: to.hash };
    }

    const [component] = router.getMatchedComponents({ ...to }).slice(-1);

    if (component && component.scrollToTop === false) {
        return {};
    }

    return { x: 0, y: 0 };
}
