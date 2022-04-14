import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let faqLabel = document.querySelectorAll(".faq-label");
faqLabel.forEach(item => item.onclick = () => {

  item.nextElementSibling.classList.toggle('active');


  let labelIcon = item.lastElementChild;
  let icons = labelIcon.lastElementChild;
  let rotation = icons.lastElementChild;
  rotation.classList.toggle('rotate');

})

// const readMoreButton = document.querySelector('.read-more-button');
// const text = document.querySelector('.moreText');
// readMoreButton.addEventListener('click', () => {
//   text.classList.toggle('show-more');
//   if (readMoreButton.innerText === 'Read More') {
//     readMoreButton.innerText = 'Read Less';
//   } else {
//     readMoreButton.innerText = 'Read More';
//   }
// })

const parentContainer = document.querySelector('.read-more-container');
parentContainer.addEventListener('click', event => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes('read-more-btn');
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text--show');
  current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})



