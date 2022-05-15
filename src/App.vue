<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <Intro />
    <Benefits />
    <Compensation />
    <About />
    <Buttons />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import Benefits from "./components/Benefits.vue";
import About from './components/About.vue';
import Compensation from './components/Compensation.vue';
import Buttons from './components/Buttons.vue';

export default {
  name: "App",
  components: {
    Intro,
    Benefits,
    Compensation,
    About,
    Buttons,
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
}
body {
  background-color: #2c3e50;
}
</style>
