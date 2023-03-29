const tl = gsap.timeline({ default: { duration: 0.75 } })
tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: "elastic.out(1.2, .75)", duration: 1 })
tl.fromTo('.cookie',
    { opacity: 0, x: -50, rotation: '-45deg' },
    { opacity: 1, x: 0, rotation: '0deg' }, '<50%')
tl.fromTo('.text',
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0 }, '<')

// cookie jump

tl.fromTo('.cookie',
    { y: 0 , rotation:'0deg'},
    { y: -20,rotation:'-10deg', yoyo: true, repeat: -1, duration:.8})
tl.fromTo('#crumbs',
    { y: 0 },
    { y: -10, yoyo: true, repeat: -1, duration:.8 },'<')

// Button fading animations(on click)
const button = document.querySelector('#btn')
button.addEventListener('click', () => {
    gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 1, ease: 'ease-out' })
})