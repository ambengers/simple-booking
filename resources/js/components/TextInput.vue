<template>
    <form-group :label="label" :error="error">
        <input
            type="text"
            class="form-control"
            :value="value"
            @input="$emit('update', $event.target.value)"
            v-on="$listeners"
            v-bind="$attrs"
        />
    </form-group>
</template>
<script>
export default {
    model: { event: "update" },
    props: {
        label: {
            type: String,
            required: true,
        },

        value: {
            type: [String, Number],
            default: "",
        },

        error: {
            type: String,
            default: null,
        },
    },
};
</script>
