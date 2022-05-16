<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
      <div class="logo-section">
        <img :src="logo_image" alt="team image" />
      </div>
      <div class="main-content">
        <div class="left-para">
          <div class="introTitle">
            Welcome to the team, <br />
            {{ employee }}.
          </div>
          <p>
            Congratulations! The team at Dunder Mifflin is very excited to
            extend this offer to you to join our family. We believe you would be
            a perfect fit on our team and make a huge impact here. We hope you
            join us on our mission to make paper more accessible and affordable
            for all.
          </p>
          <div class="offer-details-section">
            Title: <b>{{ jobTitle }}</b> <br />
            Location: <b>{{ jobLocation }}</b> <br />
            Offer Expires: <b>{{ expiry }}</b> <br />
          </div>
        </div>
        <!-- <div class="main-content-image">
          <img :src="companyImg" alt="companyImg" />
        </div> -->
        <div class="main-content-image">
          <!-- <img :src="companyImg" alt="companyImg" /> -->
        </div>
      </div>
      <div class="final-section">
        <div class="base-salary final-section-blocks">
          <div class="final-section-heading">Base Salary</div>
          <div class="final-section-value" style="color: #44b369">$100,000</div>
          <div class="final-section-description">Your annual Salary</div>
        </div>
        <div class="equity final-section-blocks">
          <div class="final-section-heading">Equity</div>
          <div class="final-section-value" style="color: #f1a628">100,000</div>
          <div class="final-section-description">
            Options earned over 4 years
          </div>
        </div>
        <div class="sign-on-bonus final-section-blocks">
          <div class="final-section-heading">Sign on Bonus</div>
          <div class="final-section-value" style="color: #6bbdd4">10,000</div>
          <div class="final-section-description">For joining us</div>
        </div>
        <div class="target-bonus final-section-blocks">
          <div class="final-section-heading">Target Bonus</div>
          <div class="final-section-value" style="color: #4e849e">10%</div>
          <div class="final-section-description">
            If you hit your performance target
          </div>
        </div>
        <div class="benefits final-section-blocks">
          <div class="final-section-heading">Benefits</div>
          <div class="final-section-value" style="color: #956ffa">$20,400</div>
          <div class="final-section-description">
            Company's estimated annual contribution
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Second card -->
</template>

<script>
export default {
  data() {
    return {
      employee: 'Jane',
      jobTitle: 'Software Engineer',
      jobLocation: 'San Francisco',
      expiry: '1/1/2025',
      companyImg: 'https://i.imgur.com/pKtwOVK.jpg',
      logo_image: 'https://i.imgur.com/PxHRCCh.jpg'
    }
  }
};
</script>

<style lang="css">
.logo-section {
  width: 110px;
}
.main-content-image {
  background-image: url('https://i.imgur.com/pKtwOVK.jpg');
  border-radius: 8px;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 1px 2px #0000000d, 0 4px 8px #0000000d;
  flex: .5;
}
.introTitle {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.5rem;
    margin-bottom: 2rem;
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
.offer-details-section {
  text-align: start;
}
.main-content {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  row-gap: 23px;
}
.main-content .left-para {
  margin-right: 45px;
  text-align: start;
  flex: .5;
}
.main-content .left-para h2 {
  font-size: 2rem;
  margin-bottom: 50px;
}
.main-content .offer-details-section {
  margin-top: 52px;
}
.final-section {
  margin: 58px 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.final-section .final-section-heading,
.final-section .final-section-description {
  opacity: 0.5;
}
.final-section .final-section-value {
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
}
.final-section-blocks {
  margin-right: 30px;
  margin-bottom: 30px;
  width: 15%;
}
@media screen and (max-width: 765px) {
  .main-content {
    flex-direction: column;
    display: block;
  }
  .main-content-image {
    width: 600px;
    padding: 120px;
    justify-content: center;
    text-align: center;
    background-size: stretch;
    margin: auto;
  }
  .final-section-blocks {
    /* margin-right: 30px; */
    width: 35%;
  }
}

</style>
