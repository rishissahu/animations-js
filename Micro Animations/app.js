const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "Power2.easeOut" } })

const home = document.querySelector(".home")
const notification = document.querySelector(".notification")
const message = document.querySelector(".messages")
// Animating icons

// Home animation 

gsap.set('.feather', { scale: 0, transformOrigin: "center" })
home.addEventListener('click', () => {
    gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.89, yoyo: true, repeat: 1 })
    gsap.fromTo(".feather", { opacity: 1, y: -5 }, { y: 20, scale: 1.5, duration: 1, stagger: .15 })
})

// Notification animation
gsap.set('.bell', { transformOrigin: "top center" })
gsap.set('.ringer', { transformOrigin: "top center" })
gsap.set('.wave', { opacity: 0, transformOrigin: "bottom" })

notification.addEventListener('click', () => {
    gsap.fromTo(".bell", { rotation: -5 }, { rotation: 0, duration: 2, ease: "elastic.out(10, 0.2)" })
    gsap.fromTo(".ringer", { rotation: -5, x: 1 }, { rotation: 0, x: 0, duration: .6, ease: "elastic.out(10, 0.2)" })
    gsap.fromTo(".wave", { opacity: 1, scale: 0 }, {
        opacity: 0, scale: 1, duration: 1
    })
})

//  Message animation
gsap.set('.flap', { transformOrigin: "top" })
message.addEventListener('click', () => {
    tl.fromTo(".messages-svg", { scale: 1 }, { scale: .9 })
    tl.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<60%")
    tl.fromTo(".messages-svg", { scale: .9 }, { scale: 1 })
    tl.fromTo(".note", { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: 0.75 }, "<40%")
    tl.to(".flap", { scale: 1 },'<50%')
})
