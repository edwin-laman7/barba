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


3. 