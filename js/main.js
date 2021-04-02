document.addEventListener('DOMContentLoaded', () => {
  // anime({
  //   targets: '.logo',
  //   translateX: [-100, 0],
  //   easing: 'easeOutExpo',
  //   duration: 1500,
  //   delay: 1000,
  //   opacity: [0, 1],
  // });

  anime({
    targets: 'h1',
    translateX: [-100, 0],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: 1500,
    opacity: [0, 1],
  });

  anime({
    targets: 'h2',
    translateX: [-100, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 1000,
    opacity: [0, 1],
  });

  // anime({
  //   targets: 'h3',
  //   translateX: [-100, 0],
  //   easing: 'easeOutExpo',
  //   duration: 1500,
  //   delay: 1000,
  //   opacity: [0, 1],
  // });

  // anime({
  //   targets: 'p',
  //   translateY: [50, 0],
  //   easing: 'easeOutExpo',
  //   duration: 1500,
  //   delay: 1000,
  //   opacity: [0, 1],
  // });

  anime({
    targets: 'nav a',
    translateY: [-50, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: (el, i) => {
      return 1500 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: '.picture',
    translateX: [500, 0],
    easing: 'easeOutExpo',
    duration: 3000,
    opacity: [0, 1],
  });
})