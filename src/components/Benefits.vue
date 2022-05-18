<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
      <h2>Benefits</h2>
      <div class="top-section">
        <div v-if="counter >= 0" class="dependents">
          For you and
          <button
            class="count-button"
            :disabled="counter < 1"
            @click="decrement"
          >
            -
          </button>
          <div class="counter">{{ counter }}</div>
          <button
            class="count-button"
            :disabled="counter > 4"
            @click="increment"
          >
            +
          </button>
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
      <button class="expand" id="expandAndCollapse" @click="expandAndCollapse">Expand All</button>
      <div class="main-content-benefit">
        <div class="bottom-section">
          <div id="dropdown" v-for="item in items" :key="item.message">
            <!-- <div v-for="item in items" :key="item.message"> -->

            <div class="faq">
              <div class="faq-container">
                <div class="faq-label">
                  <div class="faq-label-text">
                    <div class="faq-message">
                      <span class="material-icons"> {{ item.icon }} </span>   
                      <b>{{ item.message }}</b>                     
                    </div>
                    <div class="right-items">
                      <div v-if="item.value > 0" class="faq-value">
                        Estimated value: <b> ${{ item.value }}</b>
                      </div>

                      <div class="faq-label-icon">
                        <span class="material-icons"> expand_more </span>
                      </div>
                    </div>
                  </div> 
                </div>

                <div class="faq-answer">
                  <div class="faq-answer-content">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
        <div class="last-line">
          The benefits listed above are estimates only, and subject to change at
          the company's discretion.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  el: "#dropdown",
  data() {
    return {
      counter: 0,
      contribution: 20400,
      statusToggle: 'false',
      items: [
        {
          icon: "health_and_safety",
          message: "Medical",
          answer:
            "We cover 100% of the insurance cost for you and 50% for your dependents",
          value: 6000,
        },
        {
          icon: "health_and_safety",
          message: "Dental",
          answer:
            "We cover 100% of the insurance cost for you and 50% for your dependents",
          value: 400,
        },
        {
          icon: "visibility",
          message: "Vision",
          answer:
            "We cover 100% of the insurance cost for you and 50% for your dependents",
          value: 400,
        },
        {
          icon: "restaurant",
          message: "Free Lunches",
          answer: "We offer daily lunches and snacks in the office",
          value: 3500,
        },
        {
          icon: "landscape",
          message: "Unlimited PTO",
          answer:
            "Dunder Mifflin offers unlimited vacation. Feel free to take the time off you need.",
        },
        {
          icon: "paid",
          message: "401k",
          answer:
            "We offer 401k matching with our partner Human Interest and will match up to 4% of your base salary.",
          value: 10000,
        },
        {
          icon: "pets",
          message: "Dog friendly office",
          answer:
            "We love our office dogs! Bring your fur baby to work and join our group of office dogs at Dunder Mifflin!",
        },
        {
          icon: "receipt",
          message: "Free paper",
          answer:
            "As an employee at Dunder Mifflin, you will never have to worry about buying paper for your printer ever again - it is all on us!",
          value: 100,
        },
      ],
    };
  },
  methods: {
    increment() {
      this.counter++;
      this.contribution += 3400;
      this.items[0].value += 3000;
      this.items[1].value += 200;
      this.items[2].value += 200;
    },
    decrement() {
      this.counter--;
      this.contribution -= 3400;
      this.medicalVal -= 3000;
      this.items[0].value -= 3000;
      this.items[1].value -= 200;
      this.items[2].value -= 200;
    },
    expandAndCollapse() {
    
    let faqAnswer = document.querySelectorAll(".faq-answer");
    let expandAndCollapseElem = document.getElementById("expandAndCollapse");
    // let faqMessage = document.querySelectorAll(".right-items")
    // let icon = faqMessage.lastElementChild;

    if(!this.statusToggle) {
        this.statusToggle = !this.statusToggle;
        expandAndCollapseElem.innerHTML = "Collapse All";
        // icon.classList.toggle("rotate");
        faqAnswer.forEach((item) => {
            item.classList.add("active");
        })
    } else {
        this.statusToggle = !this.statusToggle;
        expandAndCollapseElem.innerHTML = "Expand All";
        // icon.classList.toggle("rotate");
        faqAnswer.forEach((item) => {
            item.classList.remove("active");
        })
    }
}
  },
};

</script>

<style lang="css">


.offer-letter-content{
  padding: 10px;
}
.count-button {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border-color: #956ffa;
}
.right-items{
  display: flex;

  align-items: center;
}
.faq {
  padding: 4px;
  width: 100%;
  min-width: 450px;
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
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  /* background: #d0edf0; */
  /* box-shadow:  5px 5px 10px #b7d1d3,
             -5px -5px 10px #e9ffff; */
  border: 1px solid #ddd;
}
.counter {
  line-height: 65px;
  font-size: 20px;
  color: #956ffa;
}
.faq-label-text {
  color: #365a5e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.faq-message {
  display: flex;
  align-items: center;
}
.faq-label-icon {
  padding: 2px 3px;
  /* background: #d0edf0; */
  border-radius: 6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 0.3s ease;
}

.material-icons {
  color: #365a5e;
  transition: 0.3s ease;
  padding: 10px 20px 10px 20px;
  
}

.faq-answer {
  transition: 0.4s ease-out;
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
  opacity: 0.5;
}
.active {
  background: #ffffff;
  border: 1px solid #c7c4c4;

  height: auto;
  margin-bottom: 25px;
}
.rotate {
  transform: rotate(180deg);
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
  height: 65px;
}
.contribution {
  margin-top: -50px;
  text-align: right;
  max-width: 50%;
  display: block;
  flex: 0 0 37%;
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
  opacity: 0.5;
}

.expand {
  width: 100%;
  font-size: 15px;
  margin-bottom: 12px;
  margin-top: 30px;
  color: #956ffa;
  cursor: pointer;
  font-weight: 700;
  text-align: right;
  border: none;
  background: white;
}
/* @media screen and (max-width: 765px) {
  .offer-letter-content h2 {
    text-align: center;
  }
  .top-section {
    flex-flow: row wrap;
    display: block;
  }
} */
</style>
