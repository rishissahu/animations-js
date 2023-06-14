//animations using barba
barba.init({
    transitions: [{
      name: 'default-transition',
      leave(data) {
        // create your stunning leave animation here
        // console.log(data)
        let current = data.current.container
        gsap.fromTo(current, {opacity: 1}, {opacity:0, duration :3})
      },
      enter(data) {
        // create your amazing enter animation here
        // console.log(data)
        let next=data.next.container
        gsap.fromTo(next, {opacity: 0}, {opacity:1, duration :3})

      }
    }]
  });