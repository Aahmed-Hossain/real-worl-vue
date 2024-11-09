<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="event-card -shadow">
      <span class="eybrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <div class="attendees">
        <BaseIcon name="users" />
        <span>{{ event.attendees.length }} attending</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { event: Object },
};
</script>

<style scoped>
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.event-card > title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
}

.attendees {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
