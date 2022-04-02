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
        <div class="bottom-section">

          <div class="faq">
          <div class="faq-container">
            <div class="faq-label">
              <div class="faq-label-text">
                Medical
                <div class="value">
                Estimated value: {{ medicalVal }}
                </div>  
              </div>
              <div class="faq-label-icon">
                <span class="material-icons">
                  expand_more
                </span>
              </div>
        
            </div>
            <div class="faq-answer">
              <div class="faq-answer-content">
                We cover 100% of the insurance cost for you and 50% for your dependents
              </div>
            </div>
          </div>   
        </div>

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
        contribution: 20400,
        medicalVal: 6000
      }
    },
    methods: {
      increment(){
        this.counter++;
        this.contribution += 3400;
        this.medicalVal += 3000;
      },
      decrement(){
        this.counter--;
        this.contribution -= 3400;
        this.medicalVal -= 3000;
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
.count-button {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border-color: aqua;
}

.faq {
  padding: 20px ;
  width: 60%;
  min-width:450px;
  margin: auto;
  position: relative;
  height: auto;
}

.faq-container {
  width: 100%;
  height: 100%;

}

.faq-label {
  cursor: pointer;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

border-radius: 19px;
background: #d0edf0;
box-shadow:  5px 5px 10px #b7d1d3,
             -5px -5px 10px #e9ffff;
}

.faq-label-text {
  color: #365A5E;

}

.faq-label-icon {
  padding: 2px 3px;
  background: #d0edf0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.material-icons {
  color: #365A5E;
  transition: 0.3s ease;
}

.faq-answer {
  transition: 0.3s ease;
  margin-top: 15px;
  height: 0;
  border-radius: 6px;
  color: rgba(127, 121, 121, 1);
  overflow: hidden;

}

.faq-answer-content {
  padding: 10px 0 10px 15px;
  

}
.active {

  background: #FFFFFF;
  border: 1px solid #C7C4C4;
  
  height: auto;
  margin-bottom: 25px;

}
.rotate{
  transform: rotate(180deg)
}

</style>
