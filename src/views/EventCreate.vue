<template>
  <div>
    <h2>Create Event</h2>
    <form>
      <label for="category">Select a category</label>
      <select id="category" name="category">
        <option v-for="cat in categories" :value="cat" :key="cat">
          {{ cat }}
        </option>
      </select>

      <label for="title">Title</label>
      <input type="text" id="title" name="title" placeholder="Title" />

      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
      />
      <label for="location">Location</label>
      <input type="text" id="location" name="location" placeholder="Location" />

      <label for="time">Select date</label>
      <datepicker class="input" placeholder="Select a date" />

      <label for="time">Select time</label>
      <select id="time" name="time">
        <option v-for="time in times" :value="time" :key="time">
          {{ time }}
        </option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },

  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }

    return { times };
  },

  computed: {
    ...mapState(["user", "categories"]),

    catLength() {
      return this.$store.getters.catLength;
    },
  },
};
</script>

<style scoped>
input[type="text"],
select,
.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
