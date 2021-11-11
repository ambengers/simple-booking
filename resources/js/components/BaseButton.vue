<template>
  <button class="btn btn-default" v-on="listeners" v-bind="$attrs">
    <i v-if="isLoading" class="fa fa-spinner fa-pulse"></i>
    <slot v-if="!isLoading || (!hiddenOnLoading && isLoading)" />
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    hiddenOnLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners() {
      if (!this.isLoading) return this.$listeners;

      return {
        ...this.$listeners,
        click: () => {},
      };
    },
  },
};
</script>
