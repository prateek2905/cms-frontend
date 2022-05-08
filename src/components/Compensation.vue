<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
      <div class="heading">
        <h2>Compensation Projection</h2>
        <div class="description">
          <p>
            Here's what your total compensation amount could look like over time. Explore with various scenarios and see your earning potential.
          </p>
        </div>
      </div>
      <div class="graph-content">
        <div class="left-content">
          <div class="label">
            Company's Performance
          </div>
          <select class="performance">
            <option value="Current">Current - 1x</option>
            <option value="Good">Good - 3x</option>
            <option value="Staples">Staples - 5x</option>
            <option value="Office Depot">Office Depot - 10x</option>
            <option value="Custom">Custom - 1x</option>
          </select>
          <div class="selector-box" >
            year 1
            <div class="selections">
              <div class="selection-text">
                Benefits
              </div>
              <div class="selection-price">

              </div>
              <div class="toggle-button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"  :style="{backgroundColor:bgColor}"></div>
                    <div class="layer" ></div>
                </div>               
              </div>
              <div class="selection-text">
                Target Bonus
              </div>
              <div class="toggle-button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                </div>               
              </div>
              <div class="selection-text">
                Sign-on Bonus
              </div>
              <div class="toggle-button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                </div>               
              </div>
              <div class="selection-text">
                Equity
              </div>
              <div class="toggle-button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                </div>               
              </div>
              <div class="selection-text">
                Base Salary
              </div>
              <div class="toggle-button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                </div>               
              </div>
            </div> -->
          </div>
        </div>
        <div class="right-content">
          year 1
          year 2
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'button',
  props: {
    bgColor: String
  },
}

</script>

<style>
.heading h2 {
  text-align: center;
  margin-bottom: 1.2rem;
  font-weight: 500;
}
.label{
  opacity: .5;
  margin-bottom: 5px;
}
.graph-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left-content{
  display: flex;
  flex-direction: column;
  /* border: 1px solid #ddd; */
  border-radius: 5px;
  margin-left: 10px;
}
.selections{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  display: block;
}
.selection-text, .selection-heading {
  text-align: left;
}
.selection-text {
  opacity: .5;
  font-size: 13px;
}
.selector-box {
  width: 275px;
  border: 1px solid #d9d9d9;
  padding: 25px;
  border-radius: 5px;
}
.performance{
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
.year-name {
  opacity: .8;
  text-align: left;
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
  background-color: #b5b5b5b5;
  transition: 0.3s ease all;
  z-index: 1;
}
#button-1 .knobs:before {
  content: "";
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 10px;
  
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 6px 1.5px;
  background-color: #a14dec;
  border-radius: 50%;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

#button-1 .checkbox:checked + .knobs:before {
  content: "";
  right: 30px;
  background-color: #a14dec;
  opacity: 0.5;
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
.year-name {
  margin-bottom: 2rem;
}
</style>