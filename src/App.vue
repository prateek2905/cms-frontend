<template>
  <div id="app">
    <Intro />
    <Benefits />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import Benefits from "./components/Benefits.vue";

export default {
  name: "App",
  components: {
    Intro,
    Benefits,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
