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
          Company's Performance
          <select class="performance">
            <option value="Current">Current - 1x</option>
            <option value="Good">Good - 3x</option>
            <option value="Staples">Staples - 5x</option>
            <option value="Office Depot">Office Depot - 10x</option>
          </select>
          <div class="selector-box">
            Year 1
            <div class="selections">
              <div class="selection-text">
                benefits
              </div>
              <div class="toggle-button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                </div>               
              </div>
            </div>
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

</script>

<style>

.graph-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.left-content{
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.selections{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.performance{
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  
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
  margin: -20px auto 0 auto;
  overflow: hidden;
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
  color: #dc0505;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 6.5px 2.1px;
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

</style>