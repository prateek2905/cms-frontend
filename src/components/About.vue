<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
        <h2 class="heading">About Dunder Mifflin</h2>
        <div class="video-player">
            <iframe class="video" width="100%" height="550" src="https://www.youtube.com/embed/bV8i6oCgiAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="subheading-container">
            <div class="subheading">
                Dunder Mifflin Inc. is a micro-cap regional paper and office supply distributor with an emphasis on servicing small-business clients.
            </div>
        </div>
        <div class="expandable-heading">
            <div class="exp-heading">
                <p class="text">Dunder Mifflin Incorporated provides its customers quality office and information technology products, furniture, printing values and the expertise required for making informed buying decisions. We provide our products and services with a dedication to the highest degree of integrity and quality of customer satisfaction, developing long-term<span class="moreText"> professional relationships with employees that develop pride, creating a stable working environment and company spirit.</span></p> 
            </div>
            <button class="read-more-button">Read More</button>
        </div>
    </div>
  </div>
  <!-- Second card -->
</template>

<script>
export default {

};
</script>

<style lang="css">
.logo-section {
  width: 110px;
}
.main-content-image {
  
  width: 600px;
  border-radius: 8px;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 1px 2px #0000000d, 0 4px 8px #0000000d;
}
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
.offer-letter-content .heading {
    margin-bottom: 2rem;
    font-size: 1.7rem;
    font-weight: 400;
}
.offer-letter-content .video-player {
    margin-bottom: 40px;
}
.offer-letter-content .subheading-container {
    padding-left: 32px;
    border-left: 4px solid #0fa0e9;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 3rem;
}
.offer-letter-content .subheading {
    font-weight: 500;
    font-size: 1.5rem;
    text-align: left;
}
.offer-letter-content .exp-heading {
    text-align: left;
}
.offer-letter-content .moreText {
    overflow: hidden;
}
.offer-letter-content button {
    display: inline-block;
    border: none;
    outline: none;
    color: #5a40c6;
}
.offer-letter-content button:hover {
    cursor: pointer;
    color: #a799e2;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.offer-letter-content .show-more  {
    display: inline;
}
</style>
