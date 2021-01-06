# barba-gsap-locomotive

This is using multiple library to work and display iPhone 12

Demo - https://barba.laman7.com

![Logo](https://assetl7.s3.ap-southeast-1.amazonaws.com/2019/07/laman7-logo-web-design-company-malaysia.svg)

Issues
1. data-scroll-sticky Doesn't work.
2. 

Steps to Integrate Barba-Locomotive
1. Initiate Locomotive.
2. In barba, use scroll.update() as after() is loaded.
3. Set timeout, because it loads slower. Use 200ms

Steps to Integrate Locomotive and GSAP ScrollTrigger
1. Initiate & Register registerPlugin
````
gsap.registerPlugin(ScrollTrigger);
````
2. Match the query selector LocomotiveScroll to ScrollTrigger
````
ScrollTrigger.scrollerProxy("THIS-SELECTOR", {
    scrollTop(value) {
      return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("THIS-SELECTOR").style.transform ? "transform" : "fixed"
});
````

3. At the end of Doc, add the following
````
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
````

Code Pen https://codepen.io/GreenSock/pen/1dc38ca14811bc76e25c4b8c686b653d?editors=1010