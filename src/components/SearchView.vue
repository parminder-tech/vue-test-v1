<template>
  <v-col cols="4">
    <v-text-field
      v-model="search"
      @input="emitUserSearch()"
      label="Search Here"
    ></v-text-field>
  </v-col>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "SearchView",
  data() {
    return {
      search: null,
    };
  },

  methods: {
    emitUserSearch() {
      this.$emit("emitUserSearch", this.search);
    },
  },
  created: function () {
    eventBus.$on("reset-search", (data) => {
      console.log("SUCCESS", data);
      this.search = null;
      // this.age = data;
      eventBus.$off("reset-search");
    });
  },
  watch: {
    search(newValue) {
      if (newValue === null || newValue === "" || newValue === undefined) {
        this.$store.dispatch("getUserDetails");
      }
    },
  },
};
</script>
