import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: App },
]

const router = new VueRouter({routes});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



let faqLabel = document.querySelectorAll(".faq-label");
faqLabel.forEach(item => item.onclick = () => {

  item.nextElementSibling.classList.toggle('active');


  let labelIcon = item.lastElementChild;
  let icons = labelIcon.lastElementChild;
  let rotation = icons.lastElementChild;
  rotation.classList.toggle('rotate');

})

const readMoreButton = document.querySelector('.read-more-button');
const text = document.querySelector('.moreText');
const dots = document.querySelector('.dots');
readMoreButton.addEventListener('click', () => {
  text.classList.toggle('showMore');
  if (readMoreButton.innerHTML === 'Read More') {
    readMoreButton.innerHTML = 'Read Less';
  } else {
    readMoreButton.innerHTML = 'Read More';
  }
  dots.classList.toggle('removeDots');
})