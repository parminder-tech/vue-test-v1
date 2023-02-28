<template>
  <div>
    <form>
      <v-container>
        <v-row v-for="form in blocks" :key="form.token">
          <v-col cols="12" md="4">
            <label>{{ form.props.title }}</label> <br />
            <input
              :v-model="form.token"
              :type="form.type"
              :placeholder="form.props.placeholder"
              :required="form.props.required"
            />
          </v-col>
        </v-row>
        <br />
        <button>Submit</button>
      </v-container>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. John Smith",
          },
        },
        {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          props: {
            title: "IS the current person minor?",
            default: false,
          },
        },
        {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: true,
            placeholder: "e.g. 01/01/2000",
          },
        },
      ],
      search: null,
    };
  },
};
</script>
<style scoped>
input[type="text"] {
  border: 2px solid black;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type="date"] {
  border: 2px solid black;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
