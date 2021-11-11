<template>
  <div class="mb-3">
    <base-button
      type="button"
      class="btn btn-info filter-btn dropdown-toggle align-items-center"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span
        v-if="countAppliedFilters"
        class="badge badge-primary float-left py-0 px-1 mr-2"
        >{{ countAppliedFilters }}</span
      >
      <i v-else class="fa fa-filter mr-2"></i>
      Filters
    </base-button>

    <div class="dropdown-menu" @click.stop>
      <div class="dropdown-header d-flex justify-content-between">
        <label class="mb-0"> Filter by: </label>
        <base-button class="btn-link" @click="$emit('clear')"
          >Clear Filters</base-button
        >
      </div>
      <div class="dropdown-divider"></div>
      <div class="px-2 py-2">
        <slot></slot>
      </div>
    </div>
    <base-button
      type="button"
      class="btn btn-default clear-btn"
      @click="$emit('clear')"
    >
      <i class="fas fa-sync-alt"></i>
      Clear
    </base-button>
  </div>
</template>

<script>
export default {
  model: {
    event: "clear",
  },
  props: {
    filters: {
      type: Object,
    },
    exclude: {
      type: String,
    },
  },

  data() {
    return {
      defaultExcluded: ["page"],
    };
  },

  computed: {
    countAppliedFilters() {
      let count = 0;
      const excluded = this.exclude ? this.exclude.split(",") : [];

      _.each(this.filters, (filter, key) => {
        if (excluded.includes(key)) return;
        if (this.defaultExcluded.includes(key)) return;

        if (!!filter) count += 1;
      });

      return count;
    },
  },
};
</script>

<style>
.dropdown-menu label {
  margin-bottom: 5px;
}
</style>

<style scoped>
.dropdown-toggle {
  border: 0;
}
.dropdown-menu {
  padding: 0;
  width: 350px;
}

.dropdown-header {
  padding: 7px 5px;
  font-size: 0.8rem;
}
.dropdown-header label {
  font-weight: 600;
}
.dropdown-header .btn-link {
  padding: 0;
  font-size: 0.8rem;
  color: #205481;
}

.dropdown-divider {
  margin: 0;
}
</style>
