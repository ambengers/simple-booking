<template>
    <div class="form-group">
        <small class="text-uppercase font-weight-bold" v-show="!!label">{{
            label
        }}</small>
        <slot></slot>
        <span v-if="!!error" class="invalid-feedback d-block mb-0" role="alert">
            <strong>{{ error }}</strong>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },

        error: {
            type: String,
            default: null,
        },
    },
};
</script>
