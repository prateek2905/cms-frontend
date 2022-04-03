<template>
  <div class="offer-letter-background">
    <div class="offer-letter-content">
      <div class="logo-section">
        <img :src="logo_image" alt="team image" />
      </div>
      <div class="main-content">
        <div class="left-para">
          <h2>
            Welcome to the team, <br />
            {{ employee }}
          </h2>
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
        <div class="main-content-image">
          <img :src="companyImg" alt="companyImg" />
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
  width: 400px;
  height: 100%;
  border-radius: 8px;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 1px 2px #0000000d, 0 4px 8px #0000000d;
}
.main-content-image img {
  width: 400px;
}
/* .offer-letter-background {
  background-color: white;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  margin: 40px 80px;
  padding: 34px;
} */
.offer-details-section {
  text-align: start;
  font-size: .7rem;
}
.offer-details-section b{
  font-size: .7rem;
}
.main-content {
  display: flex;
}
.main-content .left-para {
  margin-right: 45px;
  text-align: start;
}
.main-content .left-para h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-weight: 400;
}
.main-content .left-para p {
  font-size: .5rem;
  font-weight: 400;
}
.main-content .offer-details-section {
  margin-top: 35px;
}
.final-section {
  margin: 58px 25px;
  display: flex;
}
.final-section .final-section-heading,
.final-section .final-section-description {
  opacity: 0.5;
}
.final-section .final-section-value {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3rem;
}
.final-section-blocks {
  margin-right: 30px;
  width: 20%;
}

</style>
