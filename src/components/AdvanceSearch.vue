<template>
  <div class="text-center">
    <v-btn color="primary" @click="dialog = true"> Advance Search </v-btn>

    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
        <v-card-text class="mt-4">
          <label>Filter By State</label>
          <v-select
            v-model="filterData"
            :items="states"
            label="Select"
            multiple
            hint="Select State"
            persistent-hint
          ></v-select>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="mt-4">
          <v-row>
            <v-col cols="6">
              <label>Search By</label>
              <v-select
                v-model="searchSelected"
                :items="searchOptions"
                label="Select"
                hint="Select Value"
                persistent-hint
              ></v-select>
            </v-col>
            <v-col cols="6">
              <label>Value</label>
              <v-text-field v-model="search" label="Search Here"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="dialog = false">Close</v-btn>
          <v-btn variant="text" color="danger" @click="resetFilters"
            >Reset</v-btn
          >
          <v-btn variant="text" @click="applyFilter">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      search: null,
      filterData: [],
      searchSelected: null,
      dialog: false,
      searchOptions: ["name", "username", "email", "phone", "website"],
      states: [
        "Gwenborough",
        "Wisokyburgh",
        "McKenziehaven",
        "South Elvis",
        "Roscoeview",
        "South Christy",
        "Howemouth",
        "Aliyaview",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  methods: {
    resetFilters() {
      this.$store.dispatch("resetFilters");
      this.dialog = false;
      eventBus.$emit("reset-search", "reset");
      console.log("RESET");
    },
    applyFilter() {
      this.$store.dispatch("searchBy", {
        type: this.searchSelected,
        value: this.search,
      });
      this.$store.dispatch("applyFilter", this.filterData);
      this.dialog = false;
      this.$emit("emitUserFilter", this.filterData);
      this.$emit("emitSearchBy", this.searchSelected, this.search);
    },
  },
};
</script>
