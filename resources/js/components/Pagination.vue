<template>
    <div
        class="flex flex-row justify-end content-center items-stretch"
        v-show="links && links.total > 0"
    >
        <ul class="flex flex-row items-stretch">
            <li
                class="px-3 py-2 text-sm border border-gray-300"
                v-if="links.current_page > 1"
            >
                <button
                    @click="navigate(links.current_page - 1)"
                    class="page-link btn btn-sm"
                >
                    Previous
                </button>
            </li>
            <template v-for="(link, index) in items">
                <li
                    class="px-3 py-2 text-sm border border-gray-300"
                    :class="link.active && 'bg-gray-300'"
                    :key="index"
                >
                    <button
                        class="page-link btn btn-sm"
                        @click="!link.active && navigate(link.page)"
                    >
                        {{ link.value }}
                    </button>
                </li>
            </template>
            <li
                class="px-3 py-2 text-sm border border-gray-300"
                v-if="links.current_page < links.last_page"
            >
                <button
                    @click="navigate(links.current_page + 1)"
                    class="page-link btn btn-sm"
                >
                    Next
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        links: {
            required: true,
            default: null,
        },
    },

    data() {
        return {
            items: [],
        };
    },

    mounted() {
        this.generateLink();
    },

    watch: {
        links: function (value) {
            this.generateLink();
        },
    },

    methods: {
        generateLink() {
            if (!this.links) return;
            let { last_page, current_page } = this.links;

            let current = current_page,
                last = last_page,
                delta = 2,
                left = current - delta,
                right = current + delta + 1,
                range = [],
                rangeWithDots = [],
                l;

            for (let i = 1; i <= last; i++) {
                if (i == 1 || i == last || (i >= left && i < right)) {
                    range.push(i);
                }
            }

            let counter = 0;
            let items = [];
            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        items.push({
                            page: l + 1,
                            value: l + 1,
                            active: false,
                        });
                    } else if (i - l !== 1) {
                        // counter = 1 if the ellipsis will show on the left
                        items.push({
                            page: counter === 1 ? i - 1 : l + 1,
                            value: "...",
                            active: false,
                        });
                    }
                }
                ++counter;
                items.push({
                    page: i,
                    value: i,
                    active: i === current_page,
                });
                l = i;
            }

            this.items = items;
        },

        navigate(page) {
            this.$emit("goToPage", page);
        },
    },
};
</script>
