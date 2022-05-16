<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
      <div class="heading">
        <h2>Compensation Projection</h2>
        <div class="description">
          <p>
            Here's what your total compensation amount could look like over
            time. Explore with various scenarios and see your earning potential.
          </p>
        </div>
      </div>
      <div class="graph-content">
        <div class="left-content">
          <div class="label">Company's Performance</div>
          <select id="performance" @change = "select">
            <option value="1">Current - 1x</option>
            <option value="3">Good - 3x</option>
            <option value="5">Staples - 5x</option>
            <option value="10">Office Depot - 10x</option>
          </select>
          <div class="selector-box">
            Year 1
            <div
              class="selections"
              v-for="(feature, index) in features"
              :key="index"
            >
              <div class="selection-text">
                <div class="selection-heading">
                  {{ feature.heading }}
                </div>

                <div class="selection-price">${{ feature.value }}</div>
              </div>
              <div class="toggle-button-cover">
                
                <div class="button r" id="button-1">
                  <input
                    v-model="feature.isApplicable"
                    @change="check(feature, index)"
                    type="checkbox"
                    class="checkbox"
                  />
                  <div
                    class="knobs"
                    :style="{ '--bubble-color': feature.bgColor }"
                  ></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="right-content"
          style="margin-left: -24px; margin-right: -24px; height: 500px"
        >
          <div class="CompensationBar" :style="`height: ${percentage.year1TotalComp.value}px`">
            <div class="CompensationBar_label">${{ year1TotalComp }}</div>
            <div
              class="CompensationBar_section CompensationBar_firstSection"
              v-if="features[0].isApplicable"
              :style="`background-color: rgb(149, 111, 250); height: ${year1Data[0]}px;`"
            ></div>
            <div
              class="CompensationBar_section section2"
              v-if="features[1].isApplicable"
              :style="`background-color: rgb(78, 132, 158); height: ${year1Data[1]}px;`"
            ></div>
            <div
              class="CompensationBar_section section3"
              v-if="features[2].isApplicable"
              :style="`background-color: rgb(107, 189, 212); height: ${year1Data[2]}px;`"
            ></div>
            <div
              class="CompensationBar_section section4"
              v-if="features[3].isApplicable"
              :style="`background-color: rgb(241, 166, 40); height: ${year1Data[3]}px;`"
            ></div>

            <div
              class="CompensationBar_section CompensationBar_lastSection"
              v-if="features[4].isApplicable"
              :style="`background-color: rgb(68, 179, 105); height: ${year1Data[4]}px;`"
            ></div>
            <div class="CompensationBar_bottomLabel">Year 1</div>
          </div>
          <div class="CompensationBar" :style="`height: ${percentage.year2TotalComp.value}px`">
            <div class="CompensationBar_label">${{ year2TotalComp }}</div>
            <div
              class="CompensationBar_section CompensationBar_firstSection"
              v-if="features[0].isApplicable"
              :style="`background-color: rgb(149, 111, 250); height: ${year2Data[0]}px;`"
            ></div>
            <div
              class="CompensationBar_section section2"
              v-if="features[1].isApplicable"
              :style="`background-color: rgb(78, 132, 158); height: ${year2Data[1]}px;`"
            ></div>
            <div
              class="CompensationBar_section section4"
              v-if="features[3].isApplicable"
              :style="`background-color: rgb(241, 166, 40); height: ${year2Data[2]}px;`"
            ></div>

            <div
              class="CompensationBar_section CompensationBar_lastSection"
              v-if="features[4].isApplicable"
              :style="`background-color: rgb(68, 179, 105); height: ${year2Data[3]}px;`"
            ></div>
            <div class="CompensationBar_bottomLabel">Year 2</div>
          </div>
          <div class="CompensationBar" :style="`height: ${percentage.year3TotalComp.value}px`">
            <div class="CompensationBar_label">${{ year3TotalComp }}</div>
            <div
              class="CompensationBar_section CompensationBar_firstSection"
              v-if="features[0].isApplicable"
              :style="`background-color: rgb(149, 111, 250); height: ${year3Data[0]}px`"
            ></div>
            <div
              class="CompensationBar_section section2"
              v-if="features[1].isApplicable"
              :style="`background-color: rgb(78, 132, 158); height: ${year3Data[1]}px`"
            ></div>
            <div
              class="CompensationBar_section section4"
              v-if="features[3].isApplicable"
              :style="`background-color: rgb(241, 166, 40); height: ${year3Data[2]}px`"
            ></div>

            <div
              class="CompensationBar_section CompensationBar_lastSection"
              v-if="features[4].isApplicable"
              :style="`background-color: rgb(68, 179, 105); height: ${year3Data[3]}px`"
            ></div>
            <div class="CompensationBar_bottomLabel">Year 3</div>
          </div>
          <div class="CompensationBar" :style="`height: ${percentage.year4TotalComp.value}px`">
            <div class="CompensationBar_label">${{ year4TotalComp }}</div>
            <div
              class="CompensationBar_section CompensationBar_firstSection"
              v-if="features[0].isApplicable"
              :style="`background-color: rgb(149, 111, 250); height: ${year4Data[0]}px`"
            ></div>
            <div
              class="CompensationBar_section section2"
              v-if="features[1].isApplicable"
              :style="`background-color: rgb(78, 132, 158); height: ${year4Data[1]}px`"
            ></div>
            <div
              class="CompensationBar_section section4"
              v-if="features[3].isApplicable"
              :style="`background-color: rgb(241, 166, 40); height: ${year4Data[2]}px`"
            ></div>

            <div
              class="CompensationBar_section CompensationBar_lastSection"
              v-if="features[4].isApplicable"
              :style="`background-color: rgb(68, 179, 105); height: ${year4Data[3]}px`"
            ></div>
            <div class="CompensationBar_bottomLabel">Year 4</div>
          </div>
        </div>
      </div>
      <div class="slider-section" style="margin-top: 25px">
        <div class="slider-value">
          Annual base salary increase: {{ salaryIncreasePercentage }}%
        </div>
        <div class="slidecontainer">
          <input
            v-model="salaryIncreasePercentage"
            type="range"
            min="0"
            max="15"
            value="50"
            class="slider"
            id="myRange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: "button",
  data() {
    return {
      temp: 0,
      currentEquity: 1,
      percentage: {year1TotalComp: {value: 500},
      year2TotalComp: {value: 500},
      year3TotalComp: {value: 500},
      year4TotalComp: {value: 500},
      },
      salaryIncreasePercentage: 0,
      year4bs: 0,
      year3bs: 0,
      year2bs: 0,
      year2height: 0,
      year3height: 0,
      year4height: 0,
      year1TotalComp: 0,
      year2TotalComp: 0,
      year3TotalComp: 0,
      year4TotalComp: 0,
      year1Data: [],
      year2Data: [],
      year3Data: [],
      year4Data: [],
      features: [
        {
          heading: "Benefits",
          originalValue: 20400,
          value: 20400,
          isApplicable: true,
          bgColor: "#956ffa",
        },
        {
          heading: "Target bonus",
          originalValue: 10000,
          value: 10000,
          isApplicable: true,
          bgColor: "#4e849e",
        },
        {
          heading: "Sign on bonus",
          originalValue: 10000,
          value: 10000,
          isApplicable: true,
          bgColor: "#6bbdd4",
        },
        {
          heading: "Equity",
          originalValue: 77500,
          value: 77500,
          isApplicable: true,
          bgColor: "#f1a628",
        },
        {
          heading: "Base salary",
          originalValue: 100000,
          value: 100000,
          isApplicable: true,
          bgColor: "#44b369",
        },
      ],
    };
  },
  mounted() {
    this.recalculate();
  },

  watch: {
    
    salaryIncreasePercentage: {
      handler(newValue) {
        console.log(newValue);   
        this.year2Data[3] =
          this.year1Data[4] +
          Number(((this.year1Data[4] * newValue) / 100).toFixed(2));
        this.year3Data[3] =
          this.year2Data[3] +
          Number(((this.year2Data[3] * newValue) / 100).toFixed(2));
        this.year4Data[3] =
          this.year3Data[3] +
          Number(((this.year3Data[3] * newValue) / 100).toFixed(2));
        

        this.temp = 207900 + Number(((100000 * newValue) / 100).toFixed(2));
        this.year2TotalComp = this.temp;
        this.temp = 0;
        this.year2bs = 100000 + Number(((100000 * newValue) / 100).toFixed(2));
        this.year3bs = this.year2bs + Number(((this.year2bs * newValue) / 100).toFixed(2));
        this.year3TotalComp = 207900 + this.year3bs -100000;
        
        this.year4bs = this.year3bs + Number(((this.year3bs * newValue) / 100).toFixed(2));
        this.year4TotalComp = 207900 + this.year4bs -100000;
        this.year3bs = 0;
        this.year4bs = 0;
        this.year1height = 500 - Number(((100000 * newValue) / 100).toFixed(2));

        const arr = [{key: "year2TotalComp", value: this.year2TotalComp}, 
        {key: "year3TotalComp", value: this.year3TotalComp},  
        {key: "year1TotalComp", value: this.year1TotalComp}, 
        {key: "year4TotalComp", value: this.year4TotalComp}];
        const sortedArray = arr.sort(function (a, b) {
            return a.value - b.value;
            });
          console.log({sortedArray});
          const percentageArray = sortedArray.map((obj)=>({key:obj.key,value:Number(((obj.value/sortedArray[sortedArray.length - 1].value) * 500).toFixed(2))}));
          console.log(percentageArray);
        this.percentage = _.keyBy(percentageArray, 'key');
        console.log(this.percentage)
      },
    },
  },
  methods: {
    check(feature) {
      if(feature.isApplicable){
        feature.value = feature.originalValue;
      }else{
        feature.value = 0;
      }
      this.recalculate();
    },
    recalculate(){
    this.year1TotalComp = this.features.reduce((total, obj) => {
      return total + obj.value;
    }, 0);
    this.year2TotalComp = this.year1TotalComp - this.features[2].value;
    this.year3TotalComp = this.year1TotalComp - this.features[2].value;
    this.year4TotalComp = this.year1TotalComp - this.features[2].value;
    const rawYear1Data = this.features.map((obj) => obj.value);
    this.year1Data = rawYear1Data.map(
      (val) => Number((val / this.year1TotalComp).toFixed(2)) * 500
    );
    const filteredArr = this.features.filter(
      (obj) => obj.heading !== "Sign on bonus"
    );
    const rawData = filteredArr.map((obj) => obj.value);
    const percentage = Number(
      (this.year2TotalComp / this.year1TotalComp).toFixed(2)
    );
    this.year2height = percentage * 500;
    this.year2Data = rawData.map(
      (val) => Number((val / this.year2TotalComp).toFixed(2)) * this.year2height
    );
    this.year3height = percentage * 500;
    this.year3Data = rawData.map(
      (val) => Number((val / this.year3TotalComp).toFixed(2)) * this.year3height
    );
    this.year4height = percentage * 500;
    this.year4Data = rawData.map(
      (val) => Number((val / this.year4TotalComp).toFixed(2)) * this.year4height
    );
    },

    select(e) {
      if(e.target.options[e.target.options.selectedIndex].value > -1) {
        const baseValue = this.features[3].value / this.currentEquity;
        this.currentEquity = e.target.options[e.target.options.selectedIndex].value;
          this.features[3].value = baseValue * this.currentEquity;  

    this.year1TotalComp = this.features.reduce((total, obj) => {
      return total + obj.value;
    }, 0);
    this.year2TotalComp = this.year1TotalComp - this.features[2].value;
    this.year3TotalComp = this.year1TotalComp - this.features[2].value;
    this.year4TotalComp = this.year1TotalComp - this.features[2].value;
    const rawYear1Data = this.features.map((obj) => obj.value);
    this.year1Data = rawYear1Data.map(
      (val) => Number((val / this.year1TotalComp).toFixed(2)) * 500
    );
    const filteredArr = this.features.filter(
      (obj) => obj.heading !== "Sign on bonus"
    );
    const rawData = filteredArr.map((obj) => obj.value);
    const percentage = Number(
      (this.year2TotalComp / this.year1TotalComp).toFixed(2)
    );
    this.year2height = percentage * 500;
    this.year2Data = rawData.map(
      (val) => Number((val / this.year2TotalComp).toFixed(2)) * this.year2height
    );
    this.year3height = percentage * 500;
    this.year3Data = rawData.map(
      (val) => Number((val / this.year3TotalComp).toFixed(2)) * this.year3height
    );
    this.year4height = percentage * 500;
    this.year4Data = rawData.map(
      (val) => Number((val / this.year4TotalComp).toFixed(2)) * this.year4height
    );
        }
    }
  }
};
</script>

<style>
.right-content {
  position: relative;
  box-sizing: border-box;
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
}
.CompensationBar {
  /* position: absolute; */
  bottom: 0;
  display: flex;
  overflow: visible;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  width: 15%;
}
.CompensationBar_label {
  overflow: visible;
  margin-bottom: 10px;
  text-align: center;
}
.CompensationBar_firstSection {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.CompensationBar_section {
  transition: all 0.05s;
}
.CompensationBar_lastSection {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.CompensationBar_bottomLabel {
  margin-top: 10px;
  text-align: center;
}

.heading h2 {
  text-align: center;
  margin-bottom: 1.2rem;
  font-weight: 550;
  font-size: 2rem;
}
.label {
  opacity: 0.5;
  margin-bottom: 5px;
}
.graph-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left-content {
  display: flex;
  flex-direction: column;
  /* border: 1px solid #ddd; */
  border-radius: 5px;
  margin-left: 10px;
}
.selections {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  display: block;
}
.selection-text {
  text-align: left;
  font-size: 13px;
}
.selection-heading {
  font-weight: bold;
}
.selection-price {
  opacity: 0.5;
}
.selector-box {
  width: 275px;
  border: 1px solid #d9d9d9;
  padding: 25px;
  border-radius: 5px;
}
#performance {
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding-left: 6px;
  padding-right: 6px;
  width: 100%;
  margin-bottom: 2rem;
}
.toggle-button-cover {
  display: table-cell;
  position: relative;
  margin: 5%;
  padding: 5%;
  /* width: 200px;
  height: 140px; */
  box-sizing: border-box;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ffffffac;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 60px;
  height: 30px;
  margin: -20px -3rem 0 auto;
  overflow: hidden;
  margin-top: -2.6rem;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

.button.b2 {
  border-radius: 2px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #7d7d7db5;
  transition: 0.3s ease all;
  z-index: 1;
}
#button-1 .knobs:before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 6px 1.5px;
  background-color: var(--bubble-color);
  border-radius: 50%;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

#button-1 .checkbox:checked + .knobs:before {
  content: "";
  left: 33px;
  background-color: var(--bubble-color);
  
}

#button-1 .checkbox:checked ~ .layer {
  background-color: #d9d8d8;
}

#button-1 .knobs,
#button-1 .knobs:before,
#button-1 .layer {
  transition: 0.3s ease all;
}
.r {
  margin-left: 150px;
}

.slider {
  -webkit-appearance: none;
  width: 25%;
  height: 5px;
  border-radius: 5px;
  background: #44b369;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04aa6d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04aa6d;
  cursor: pointer;
}
</style>
