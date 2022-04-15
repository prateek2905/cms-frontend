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
                <p class="text">Dunder Mifflin Incorporated provides its customers quality office and information technology products, furniture, printing values and the expertise required for making informed buying decisions. We provide our products and services with a dedication to the highest degree of integrity and quality of customer satisfaction, developing long-term <span class="dots"> ...</span><span class="moreText"> professional relationships with employees that develop pride, creating a stable working environment and company spirit.</span></p>
            </div>
            <button class="read-more-button">Read More</button>
        </div>
        <div class="scroll-container">
            <div class="scroll-content" v-for="item in items" :key="item.message">
                <h3>{{ item.heading }}</h3>
                <p>
                    {{ item.para }}
                </p>
            </div>
        </div>
        <div class="basic-details-container">
            <div class="basic-details">
                <div class="details-1 details">
                    <div class="headings">Website</div>
                    <div class="texts">
                        <a :href="Website" target="_blank">{{ Website_Content }}</a>
                    </div>
                </div>
                <div class="details-2 details" v-for="detail in details" :key="detail.message">
                    <div class="headings">{{ detail.heading }}</div>
                    <div class="texts">{{ detail.text }}</div>
                </div>
                <div class="details-6 details">
                    <div class="headings">Investors</div>
                    <div class="texts">
                        <a :href="Vance_Refrigeration" target="_blank">Vance Refrigeration,</a>
                        <a :href="The_Michael_Scott_Paper_Company" target="_blank">The Michael Scott Paper Company,</a>
                        <a :href="Sabre_International" target="_blank">Sabre International,</a>
                        <a :href="Athleap" target="_blank">Athleap</a>
                    </div>
                </div>
                <div class="details-7 details">
                    <div class="headings">Leadership</div>
                    <div class="texts">{{ leadership }}</div>
                </div>
            </div>
        </div>
        <div class="news-container">
            <div class="news">
                <h2>In the news</h2>
            </div>
        </div>
    </div>
  </div>
  <!-- Second card -->
</template>

<script>
export default {
    data() {
        return{
        Website_Content: 'https://www.peacocktv.com/stream-tv/the-office',
        Vance_Refrigeration: 'https://theoffice.fandom.com/wiki/Vance_Refrigeration',
        The_Michael_Scott_Paper_Company: 'https://theoffice.fandom.com/wiki/The_Michael_Scott_Paper_Company',
        Sabre_International: 'https://theoffice.fandom.com/wiki/Sabre_(company)',
        Athleap: 'https://theoffice.fandom.com/wiki/Athlead',
        leadership: 'David Wallace (CEO), Michael Scott (Regional Manager), Jan Levinson (VP Sales), Jim Halpert (Sales Manager), Pamela Beesly (Head of Communications)',
        details: [
            {
                heading: 'Headquarters',
                text: 'Scranton, PA'
            },
            {
                heading: 'Company Size',
                text: '50-99'
            },
            {
                heading: 'Total Funding',
                text: '$20M'
            },
            {
                heading: 'Last Funding Type',
                text: 'Series A'
            }
        ],

        items: [
            {
                heading: 'People First',
                para: 'We provide our Customers with the highest standard of integrity and quality, to enable them to develop long-term professional relationships with our employees and staff.'
            },
            {
                heading: 'Growth',
                para: 'We crusade to create a stable working environment and corporate spirit and to give unlimited opportunity to everyone, and to afford ordinary folk the chance to buy the same things as rich people. We are also committed to nurturing and promulgating wholesome American values.'
            },
            {
                heading: 'Quality',
                para: 'Dunder Mifflin, Inc. is committed to providing its customers quality office and information technology products, furniture, printing values and the experience required for making informed buyer decisions.'
            },
            {
                heading:'Innovation',
                para: 'We strive to become the company most known for changing the worldwide poor–quality image of paper products.'
            }
        ]
        }
    }
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
    display: none;
}
.offer-letter-content .dots {
    display: inline;
}
.offer-letter-content button {
    border: none;
    outline: none;
    color: #5a40c6;
    margin-bottom: 2rem;
    background: white;
    align-self: start;;
}
.offer-letter-content button:hover {
    cursor: pointer;
    color: #a799e2;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.offer-letter-content .showMore{
    display: inline;
}
.offer-letter-content .removeDots{
    display: none;
}
.basic-details {
    display: flex;
    flex-flow: row wrap;
    margin-left: -10px;
    margin-right: -10px;
    row-gap: 24px;
    justify-content: space-between;
}
.details {
    /* border: 1px solid red; */
    display: block;
    width: 430px;
    height: 100px;
    font-weight: 500;
    font-size: 6px;
    text-align: left;
}
.details-1 {
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
}
.details-2 {
    display: block;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
}
.details-6 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
}
.details-7 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
}
.details a {
    color: #5a40c6;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color .3s;
}
.details a:hover {
    color: #a799e2;
    transition: color .3s;
}
.details .headings {
    color: #8d8d8d;
}
.details .texts {
    word-break: break-word;
}
.scroll-container {
    display: flex;
    margin-bottom: 1.8rem;
}
.scroll-content{
    border: 1px solid #ddd;
    flex: 0 0 25%;
    max-width: 25%;
    margin-right: .5rem;
    border-radius: 5px;
}
.scroll-content  {
    padding: 20px;
    text-align: left;
}
.scroll-content h3 {
    margin-bottom: 1rem;
}
</style>
