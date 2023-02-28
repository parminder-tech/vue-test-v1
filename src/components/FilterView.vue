<template>
  <div>
    <span v-if="FilterData.length > 0">
      Filter By State:
      <v-chip v-for="filter in FilterData" :key="filter" class="ma-2">
        {{ filter }}
      </v-chip>
    </span>
    <span v-if="searchBy.value">
      {{ searchBy.type }}:
      <v-chip class="ma-2">
        {{ searchBy.value }}
      </v-chip>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    FilterData() {
      return this.$store.state.filterStructure;
    },
    searchBy() {
      return this.$store.state.searchBy;
    },
  },
};
</script>
