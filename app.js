Splitting({ by: "words"});

// let magicScroll = new MagicScroll({
//     target: document.querySelector(".scroll-view.after"), // for body, no need to set target
//     speed: 140,
//     smooth: 24
//   });

  // //init locomotive
let scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp:0.08,
    multiplier:1.2,
    //offset:["1000",0]
});
  
gsap.registerPlugin(ScrollTrigger);

barba.init({
    debug:true,
    logLevel:'debug',
    views: [{
        namespace: 'home',
        beforeEnter() {
          // update the menu based on user navigation
          Splitting({ by: "words"});
        },
        afterEnter() {
          // refresh the parallax based on new page content
          Splitting({ by: "words"});
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
            iPhoneIn();
            console.log('enter update');
        },
        after(data){
            setTimeout(function(){
                scroll.update()
                }, 200);
            
            console.log('after update');
        },
        once(data){
            iPhoneIn();
        }
    }]
  });

// Page transition
function pageTransition() {
    var tl = gsap.timeline();
    tl.to('body',{backgroundColor:"#fff"},"-=1");
	tl.to('ul.transition li', {duration:.3, scaleY:1, transformOrigin:"bottom left", ease:"sine.inOut", stagger:.1})
    tl.to('ul.transition li', {duration:.3, scaleY:0, transformOrigin:"bottom left", ease:"sine.inOut",stagger:.1, },"+=0.2")
    tl.to('body',{backgroundColor:"#222"},"-=1");
}

function iPhoneOut(){
    var tl = gsap.timeline();
    tl.to('div.center img',{duration:1,x:-200});
    tl.to('header ul li',{y:-20, duration:2, stagger:0.2});
}
function iPhoneIn(){
    var tl = gsap.timeline();
    Splitting({ by: "words"});
    tl.from('div.center img',{duration:1,y:400,ease:"sine.inOut"});

    tl.from('h1.hero1 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2},"-=1.2");
    tl.to('h1.hero1 .word',{duration:.8, opacity:0, y:-10},"3");
    tl.from('h1.hero2 .word',{duration:0.8, delay:3,opacity:0, rotateX:-80,stagger:0.2},"");
    tl.to('h1.hero2',{duration:1.2, scale:20,ease:"sine.inOut",y:-200},"+=.5");
    tl.to('h1.hero2',{opacity:0});

    tl.from('h1.hero3 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2},"-=1.2");
    tl.to('h1.hero3',{duration:.8, opacity:.5, y:-250, scale:.7},"+=1");

    tl.from('h1.hero4 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2},"-=.2");
    tl.to('h1.hero3',{duration:.8, opacity:0, y:-250},"+=0");
    tl.to('h1.hero4',{duration:.8, opacity:.5, y:-250, scale:.7},"+=1");
    

    tl.from('h1.hero5 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2},"-=.2");
    tl.to('h1.hero4',{duration:.8, opacity:0, y:-250},"+=0");
    tl.to('h1.hero5',{duration:.8, opacity:.5, y:-250, scale:.7},"+=1");
    
    

    tl.from('h1.hero6 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2},"-=.2");
    tl.to('h1.hero5',{duration:.8, opacity:0, y:-250},"+=0");
    tl.to('h1.hero6',{duration:.8, opacity:.5, y:-250, scale:.7},"+=1");
    

    tl.from('h1.hero7 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2},"-=.2");
    tl.to('h1.hero6',{duration:1, opacity:0, y:-250},"+=0");
    //tl.to('h1.hero7 .word',{duration:.8, opacity:0, y:-10},"+=2");

    // tl.from('h1.hero4 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2});
    // tl.to('h1.hero4 .word',{duration:.8, opacity:0, y:-10},"3");
    // tl.from('h1.hero5 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2});
    // tl.to('h1.hero5 .word',{duration:.8, opacity:0, y:-10},"3");
    // tl.from('h1.hero6 .word',{duration:.8, opacity:0, rotateX:-80,stagger:0.2});
    // tl.to('h1.hero6 .word',{duration:.8, opacity:0, y:-10},"3");
    //tl.to('body',{backgroundColor:"#fff"},"-=1");

    tl.from('p.intro',{duration:0.5,opacity:0,y:10},"+=.5");
    tl.to('div.center img',{duration:2,rotate:-10, yoyo:true,yoyoEase: true},"-=1.2");
    tl.from('header ul li',{y:-200, duration:.4, stagger:0.1},"-=1.5");
    //tl.to('h1 .word',{duration:0.2,x:1000,stagger:0.2,ease:"sine.inOut"},"+=3");
}

// ScrollTrigger.addEventListener("refresh", () => scroll.update());
// ScrollTrigger.refresh();