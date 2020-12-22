// var tween = gsap.to(".check", {
//     x: 1800, duration: 5,
//     paused: true
// });

// document.querySelector(".check").onclick = () => tween.play();
// // document.querySelector(".check").onclick = () => tween.pause();
// // document.querySelector(".check").onclick = () => tween.resume();
// // document.querySelector(".check").onclick = () => tween.reverse();
// document.querySelector(".check").onclick = () => tween.restart();

// gsap.registerPlugin(scrollTrigger);

gsap.to(".check", {
    scrollTrigger: ".check",
    x: 400,
    rotation: 360,
    duration: 3

})




let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.dark',
        start: 'center bottom'
    }
});

tl.from('.corona', { x: 200, opacity: 0, duration: 1.5 })
    .from('.content', { y: 300, opacity: 0, duration: 1 }, '-=1')