<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ title }}</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                @click="$emit('close')"
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            {{ message }}
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-dismiss="modal"
                                @click="$emit('confirm')"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "Modal title.",
        },

        message: {
            type: String,
            default: "Modal message.",
        },
    },
};
</script>
<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 39, 39, 0.07);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
</style>
