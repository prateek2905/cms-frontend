import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let faqLabel=document.querySelectorAll(".faq-label");
faqLabel.forEach(item=>item.onclick=()=>{
   
   item.nextElementSibling.classList.toggle('active');
   
   
   let labelIcon=item.lastElementChild;
   let icons=labelIcon.lastElementChild;
   icons.classList.toggle('rotate');
 
   
})


