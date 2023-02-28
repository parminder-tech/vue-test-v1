<template>
  <v-container>
    <div class="mt-7">
      <v-row>
        <SearchView @emitUserSearch="searchUsers" />
        <v-col cols="2">
          <AdvanceSearch
            @emitUserFilter="filterUser"
            @emitSearchBy="searchBy"
          />
        </v-col>
      </v-row>
      <FilterView />
      <DataTable :userData="userData" />
    </div>
  </v-container>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import SearchView from "@/components/SearchView.vue";
import AdvanceSearch from "@/components/AdvanceSearch.vue";
import FilterView from "@/components/FilterView.vue";
export default {
  name: "UserV",
  components: {
    DataTable,
    SearchView,
    AdvanceSearch,
    FilterView,
  },
  methods: {
    searchBy(value, search) {
      console.log("value", value);
      console.log("search", search);
      const searchUsers = this.userData.filter((user) => {
        const nameMatch = user[value]
          .toLowerCase()
          .includes(search.toLowerCase());
        return nameMatch;
      });

      this.$store.dispatch("searchUser", searchUsers);
    },
    searchUsers(event) {
      const searchUsers = this.userData.filter((user) => {
        const nameMatch = user.name.toLowerCase().includes(event.toLowerCase());
        const usernameMatch = user.username
          .toLowerCase()
          .includes(event.toLowerCase());
        return nameMatch || usernameMatch;
      });

      this.$store.dispatch("searchUser", searchUsers);
    },
    filterUser(event) {
      console.log("-parm-", event);
    },
  },
  mounted() {
    this.$store.dispatch("getUserDetails");
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
  },
};
</script>
