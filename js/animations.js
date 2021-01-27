var aboutTL=gsap.timeline({
    scrollTrigger:{
        trigger: "#aboutPhoto",
        toggleActions: "play complete none reverse",
    }
});

aboutTL.from("#aboutPhoto", {x:-200, opacity: 0, duration: 1.5})
.from("#aboutText", {x:200, opacity: 0, duration: 1.5}, "-=1");

var accTL=gsap.timeline({
    scrollTrigger:{
        trigger:".acc",
        toggleActions: "play complete none reverse"
    }
});
accTL.from(".firstVideo",{y:200, opacity: 0, duration: 1});

var smallVideoTL=gsap.timeline({
    scrollTrigger:{
        trigger:".smallVideoContainer",
        toggleActions: "play complete none reverse"
    }
});
smallVideoTL.from(".maryland", {x:-200, opacity: 0, duration: 1})
.from(".wvu", {x:200, opacity: 0, duration: 1}, "-=1");

var vtTL=gsap.timeline({
    scrollTrigger:{
        trigger: ".virginiaTech",
        toggleActions: 'play complete none reverse'
    }
});
vtTL.from(".virginiaTech", {y:200, opacity: 0, duration: 1});

var musicTL=gsap.timeline({
    scrollTrigger:{
        trigger:"#music",
        toggleActions: 'play complete none reverse'
    }
});
musicTL.from("#music", {y:200, opacity: 0, duration:1});

var galleryTL=gsap.timeline({
    scrollTrigger:{
        trigger:"#gallery",
        toggleActions: 'play complete none reverse'
    }
});
galleryTL.from("#gallery", {y:200, opacity: 0, duration:1});

var contactTL=gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        toggleActions: 'play complete reset reverse'
    }
});
contactTL.from("#contact", {y:200, opacity: 0, duration:1});