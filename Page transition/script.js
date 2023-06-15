const tlLeave = gsap.timeline({ default: { duration: .75, ease: "Power2.easeOut" } })
const tlEnter = gsap.timeline({ default: { duration: .75, ease: "Power2.easeOut" } })

// leave animation 
const leaveAnimation = (current, done) => {
    const product = current.querySelector('.image-container');
    const text = current.querySelector('.showcase-text');
    const circles = current.querySelectorAll('.circle');
    const arrow = current.querySelector('.next-arrow');

    return (
        tlLeave.fromTo(arrow, { opacity: 1, y: 0 }, { opacity: 0, y: 50, onComplete: done }),
        tlLeave.fromTo(product, { opacity: 1, y: 0 }, { opacity: 0, y: -50, onComplete: done }, "<"),
        tlLeave.fromTo(text, { opacity: 1 }, { opacity: 0, onComplete: done }, "<"),
        tlLeave.fromTo(circles, { opacity: 1 }, { opacity: 0, onComplete: done }, "<")
    );
};

const enterAnimation = (current, ) => {
    const product = current.querySelector('.image-container');
    const text = current.querySelector('.showcase-text');
    const circles = current.querySelectorAll('.circle');
    const arrow = current.querySelector('.next-arrow');

    return (
        tlEnter.fromTo(arrow, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }),
        tlEnter.fromTo(product, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<"),
        tlEnter.fromTo(text, { opacity: 0 }, { opacity: 1}, "<"),
        tlEnter.fromTo(circles, { opacity: 0 }, { opacity: 1, stagger:.15 }, "<")
    );
};


//animations using barba
barba.init({
    preventRunning: true,
    transitions: [{
        name: 'default-transition',
        leave(data) {
            let done = this.async();
            let current = data.current.container
            leaveAnimation(current, done);
        },
        enter(data) {
            let next = data.next.container
            enterAnimation(next)
        }
    }]
});