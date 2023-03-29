const tl = gsap.timeline({ default: { duration: .75 } })
tl.fromTo('.hero-section', { scale: 1.5 }, { scale: 1, ease: "elastic.out(1, 1)", duration: 2 })
tl.fromTo('.cta1-a', { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, '<40%')
tl.fromTo('.cta1-c', { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, '<')
tl.fromTo('.cta1-b', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<')
tl.fromTo('.cta2-a', { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, '<40%')
tl.fromTo('.cta2-c', { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, '<')
tl.fromTo('.cta2-b', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<')
tl.fromTo('.hero-btn', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<50%')

//  animating logo

const logo=document.querySelector('#logo')
const letters= logo.textContent.split("")

logo.textContent=''

letters.forEach((letter)=>{
    logo.innerHTML += `<span class="letter"> ${letter}</span>`
})
gsap.fromTo('.letter', {y:'100%'},{y:0, delay:2, stagger:0.1, ease:'back.out(3)'})