<template>
  <!-- <div class="offer-letter-background"> -->
    <div class="offer-letter-content">
      <div class="buttons-container">
        <button @click='toggle1 = !toggle1' class="accept">Accept</button>
        <button @click='toggle2 = !toggle2' class="deny">Reject</button>
      </div>
      <div class="accept-content" v-if ='toggle1 && !toggle2'>
        Thank you for accepting our offer.
      </div>
      <div class="reject-content" v-if ='toggle2 && !toggle1'>
        Sorry to see you go
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  data(){
    return{
      toggle1: false,
      toggle2: false
    }
  }
}
</script>

<style>
.buttons-container {
  display: flex;
  justify-content: space-around;
}
.accept {
  color: #FFF;
  background: #44CC44;
  padding: 15px 20px;
  /* box-shadow: 0 4px 0 0 #2EA62E; */
}
.accept:hover {
  background: #6FE76F;
  /* box-shadow: 0 4px 0 0 #7ED37E; */
}
.deny {
  color: #FFF;
  background: tomato;
  padding: 15px 20px;
  /* box-shadow: 0 4px 0 0 #CB4949; */
}
.deny:hover {
  background: rgb(255, 147, 128);
  /* box-shadow: 0 4px 0 0 #EF8282; */
}
.accept-content, .reject-content {
  color: white;
}
</style>