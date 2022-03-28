<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
      <div class="main-content">
        <div class="top-section">
          <h2>Benefits</h2>
          <div v-if="counter >= 0" class="dependents">
            for you and
            <button class="count-button" :disabled="counter < 1" @click="decrement">-</button>
            <div class="counter">{{ counter }}</div>
            <button class="count-button" :disabled="counter > 4" @click="increment">+</button>
            dependents
          </div>
          <div class="contribution">
            <div class="contribution-value">
              <h1>{{ contribution }}</h1>
            </div>
            <div class="contribution-description">
              Company's estimated annual contribution
            </div>
          </div>
          <div class="expand-all">Expand All</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
      return{
        counter: 0,
        contribution: 20400
      }
    },
    methods: {
      increment(){
        this.counter++;
        this.contribution += 3400;
      },
      decrement(){
        this.counter--;
        this.contribution -= 3400;
      }
    }
}
</script>

<style lang="css">
.offer-letter-background {
  /* border: 5px solid red; */
  background-color: white;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  margin: 40px 200px;
  padding: 34px;
}
</style>
