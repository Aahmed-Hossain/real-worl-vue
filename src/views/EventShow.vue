<template>
  <div class="event-card">
    <h1>{{ event.title }}</h1>
    <span class="eybrow">@{{ event.time }} on {{ event.date }}</span>
    <div class="direction-flex">
      <h3>Organised By:</h3>
      <p>{{ event.onganiser }}</p>
    </div>
    <div class="direction-flex">
      <h3>Category:</h3>
      <p>{{ event.category }}</p>
    </div>
    <div class="direction-flex">
      <h3>Location:</h3>
      <p>{{ event.location }}</p>
    </div>
    <div class="direction-flex">
      <h3>Event Details:</h3>
      <p>{{ event.description }}</p>
    </div>
    <div>
      <h3>Attendees:</h3>
      <ul>
        <li v-for="attendee in event.attendees" :key="attendee.id">
          {{ attendee.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],

  data() {
    return {
      event: {},
    };
  },

  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log("There is an error", error.response);
      });
  },
};
</script>

<style scoped>
.direction-flex {
  display: flex;
  align-items: center;
  gap: 5px;
}

.event-card {
  cursor: default;
  margin-top: 50px;
}

h1,
h3 {
  color: black;
}
</style>
