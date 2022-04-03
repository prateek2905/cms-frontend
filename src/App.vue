<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
<<<<<<< HEAD
.offer-letter-background {
  /* border: 5px solid red; */
  background-color: white;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  margin: 40px 80px;
  padding: 34px;
=======
body {
  background-color: #2c3e50;
>>>>>>> 233c53840d4d9bfaa11456a637b498661aa2d5da
}
</style>
