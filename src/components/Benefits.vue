<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
        <h2>Benefits</h2>
        <div class="top-section">
          <div v-if="counter >= 0" class="dependents">
            For you and
            <button class="count-button" :disabled="counter < 1" @click="decrement">-</button>
            <div class="counter">{{ counter }}</div>
            <button class="count-button" :disabled="counter > 4" @click="increment">+</button>
            dependents
          </div>
          <div class="contribution">
            <div class="contribution-value">
              <h1>${{ contribution }}</h1>
            </div>
            <div class="contribution-description">
              <b>Company's estimated annual contribution</b>
            </div>
          </div>
        </div>
        <button class="expand-all">Expand All</button>
      <div class="main-content-benefit">
        <div class="bottom-section">
          <ul id="dropdown">
            <div v-for="item in items" :key="item.message">
              
              <div class="faq">
                <div class="faq-container">
                  <div class="faq-label">
                    <div class="faq-label-text">
                      <b>{{ item.message }}</b>
                      <div v-if="item.value > 0" class="faq-value">
                        Estimated value: <b> ${{ item.value }}</b>
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
                    {{ item.answer }}
                    </div>
                  </div>

                </div>   
              </div>
            </div>
          </ul>
        </div>
        <div class="last-line">
          The benefits listed above are estimates only, and subject to change at the company's discretion.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  el: '#dropdown',
    data(){
      return{
        counter: 0,
        contribution: 20400,
        items: [
          { message: 'Medical',
            answer: 'We cover 100% of the insurance cost for you and 50% for your dependents',
            value: 6000 },
          { message: 'Dental',
            answer: 'We cover 100% of the insurance cost for you and 50% for your dependents',
            value: 400 },
          { message: 'Vision',
            answer: 'We cover 100% of the insurance cost for you and 50% for your dependents',
            value: 400 },
          { message: 'Free Lunches',
            answer: 'We offer daily lunches and snacks in the office',
            value: 3500 },
          { message: 'Unlimited PTO',
            answer:'Dunder Mifflin offers unlimited vacation. Feel free to take the time off you need.' },
          { message: '401k',
            answer: 'We offer 401k matching with our partner Human Interest and will match up to 4% of your base salary.',
            value: 10000 },
          { message: 'Dog friendly office',
            answer: 'We love our office dogs! Bring your fur baby to work and join our group of office dogs at Dunder Mifflin!' },
          { message: 'Free paper',
            answer: 'As an employee at Dunder Mifflin, you will never have to worry about buying paper for your printer ever again - it is all on us!',
            value: 100 },
        ]
      }
    },
    methods: {
      increment(){
        this.counter++;
        this.contribution += 3400;
        this.items[0].value += 3000;
        this.items[1].value += 200;
        this.items[2].value += 200;
      },
      decrement(){
        this.counter--;
        this.contribution -= 3400;
        this.medicalVal -= 3000;
        this.items[0].value -= 3000;
        this.items[1].value -= 200;
        this.items[2].value -= 200;
      }
    }
}
</script>

<style lang="css">
/* .offer-letter-background {
  background-color: white;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  margin: 40px 200px;
  padding: 34px;
} */
.count-button {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border-color: #956ffa;
}

.faq {
  padding: 20px ;
  width: 100%;
  min-width:450px;
  /* margin: auto; */
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
  justify-content: space-between;
  align-items: center;

border-radius: 19px;
/* background: #d0edf0; */
/* box-shadow:  5px 5px 10px #b7d1d3,
             -5px -5px 10px #e9ffff; */
border: 0.5px solid gray;
}
.counter {
  margin: 0 5px 0 5px;
  font-size: 20px;
  color: #956ffa;
}
.faq-label-text {
  color: #365A5E;
  /* display: flex; */
}

.faq-label-icon {
  padding: 2px 3px;
  /* background: #d0edf0; */
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
.faq-value {
  opacity: .5;
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
.offer-letter-content h2 {
  text-align: start;
  font-size: 25px;
  font-weight: 600;
}
.top-section {
  /* border: 2px solid red; */
  /* padding: 100px; */
  display: flex;
  margin-top: 15px;
}
.dependents {
  margin-right: 50%;
  display: -webkit-inline-box;
}
.contribution {
  margin-top: -50px;
}
.contribution-value h1 {
    color: #956ffa;
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: right;
}
.main-content-benefit {
  display: inline;
}
.last-line {
  opacity: .5;
}
</style>
