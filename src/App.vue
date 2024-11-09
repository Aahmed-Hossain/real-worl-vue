<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: sans-serif;
  width: 500px;
  padding: 0 20px;
  margin: 10px auto;
}

.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2 linear;
  cursor: pointer;
}

a {
  color: black;
  text-decoration: none;
}

nav > a {
  color: #42b983;
  font-weight: 600;
  background-color: transparent;
}

nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}

h1 {
  color: rgb(27, 177, 27);
}

h4 {
  color: green;
}

.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2 linear;
  cursor: pointer;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 15px 0 rgba(0, 0, 0, 0.1);
}
</style>
