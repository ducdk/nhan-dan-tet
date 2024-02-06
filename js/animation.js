
$(window).on('load', function () {
  if ($(window).width() > 768) {
    gsap.registerPlugin("ScrollTrigger");
    gsap.to("#nguoi", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: -500,
    })
    
    gsap.to("#background", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: -300,
    })
    gsap.to("#nen", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: -300,
    })
    
    gsap.to("#texttet", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      x: "400",
    })
  }
  if ($(window).width() <= 768) {
    gsap.registerPlugin("ScrollTrigger");
    gsap.to("#nguoi", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: -280,
    })
    
    gsap.to("#background", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: -260,
    })
    gsap.to("#nen", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: -260,
    })
    
    gsap.to("#texttet", {
      scrollTrigger:{
        trigger: "#gsap1",
        scrub: 1,
        markers: false
      },
      y: 100,
    })
  }
});
