<template>
  <!-- <div class="offer-letter-background"> -->
    <div class="offer-letter-content">
      <div class="buttons-container">
        <button @click='toggle1 = !toggle1'>Accept</button>
        <button @click='toggle2 = !toggle2'>Reject</button>
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

</style>