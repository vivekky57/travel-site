import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"),75)
new RevealOnScroll(document.querySelectorAll(".testimonial"),60)
new RevealOnScroll();

let mobileMenu = new MobileMenu();
let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if(typeof modal == undefined){
      import(/*webpackChunkName: "modal" */'./modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(),20) // waiting for 20 millsecond so to create a modal and inject to our javascript file
      }).catch( () => console.log("There was a problem."))
    } else{
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}