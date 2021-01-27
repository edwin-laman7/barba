
//Happens after the page is rendered


gsap.registerPlugin(ScrollTrigger);

  // //init locomotive
let scroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
    lerp:0.1,
    multiplier:1.2,
    //offset:["1000",0]
});

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});



barba.init({
    //debug:true,
    logLevel:'debug',
    views: [{
        namespace: 'home',
        beforeEnter() {
          // update the menu based on user navigation
          //Splitting({ by: "words"});
          
        },
        afterEnter() {
          // refresh the parallax based on new page content
          //Splitting({ by: "words"});
          Splitting({ target: "[data-split]", by: "words"});
          //MainPageIn();
          setTimeout(function(){ //require to delay load
           MainPageIn()
            }, 1);
        }
      }],
    transitions: [{
        name: 'whatever',
        beforeLeave(){

        },
        leave(data) {
           // iPhoneOut();
           pageTransition();
            return gsap.to(data.current.container, {opacity: 0, duration:.4, delay:1});
        },
        enter(data) {        
            //PageIn();
            
            mouseStuff();
            //console.log('enter update');
        },
        after(data){
            setTimeout(function(){
                scroll.update()
                }, 200);
            
            //console.log('after update');
        },
        once(data){
            //PageIn();
            mouseStuff();
        }
    }]
  });

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();