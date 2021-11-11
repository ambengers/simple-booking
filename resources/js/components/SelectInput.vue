<template>
    <form-group :label="label" :error="error">
        <select
            class="form-control"
            :value="value"
            @change="$emit('update', $event.target.value)"
            v-on="$listeners"
            v-bind="$attrs"
        >
            <option v-if="nullable" value="">{{ nullable_label }}</option>
            <template v-if="options">
                <option
                    v-for="(option, key) in options"
                    :key="key"
                    :value="option | optionValue"
                >
                    {{ option | optionLabel }}
                </option>
            </template>
            <slot v-else />
        </select>
    </form-group>
</template>
<script>
export default {
    model: {
        event: "update",
    },

    filters: {
        optionValue(option) {
            if (typeof option === "string") return option;
            return option.value;
        },
        optionLabel(option) {
            if (typeof option === "string") return option;
            return option.label;
        },
    },

    props: {
        label: {
            type: String,
            required: true,
        },

        error: {
            type: String,
            default: null,
        },

        value: {
            type: [String, Number],
            default: "",
        },

        nullable: {
            type: Boolean,
            default: false,
        },

        nullable_label: {
            type: String,
            default: "",
        },

        /**
         * Options must be array in this format
         * ['one', 'two', ... ] or
         * [
         *  {
         *    title: 'One',
         *    value: 1,
         *  },
         *  {
         *    title: 'Two',
         *    value: 2,
         *  },
         *  ...
         * ]
         */
        options: {
            type: Array,
            default: [],
        },
    },
};
</script>
