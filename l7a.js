// Page transition
function pageTransition() {
    $('.transition-ball').show();
    var tl = gsap.timeline();
    tl.to('.transition-ball',{scale:80, opacity:1, duration:.2});
    tl.to('.transition-ball',{scale:1, duration:.2},"+=.3");

    // tl.to('body',{backgroundColor:"#fff"},"-=1");
	// tl.to('ul.transition li', {duration:.3, scaleY:1, transformOrigin:"bottom left", ease:"sine.inOut", stagger:.1})
    // tl.to('ul.transition li', {duration:.3, scaleY:0, transformOrigin:"bottom left", ease:"sine.inOut",stagger:.1, },"+=0.2")
    // tl.to('body',{backgroundColor:"#222"},"-=1");
}

function iPhoneOut(){
    var tl = gsap.timeline();
    //tl.to('div.center img',{duration:1,x:-200});
    tl.to('header ul li',{y:-20, duration:2, stagger:0.2});
}
function PageIn(){
    var tl = gsap.timeline();
    //Splitting({ by: "words"});
    //tl.from('div.center img',{duration:1,y:400,ease:"sine.inOut"});

    tl.from('h1.hero1 .word',{delay:0.5,duration:.5, opacity:0, rotateX:-80,stagger:0.1});
    tl.to('h1.hero1 .word',{duration:3, opacity:0.9,},"2");
    tl.from('.hero2 .word',{duration:0.5,opacity:0,stagger:0.2,},"-=3");
    //tl.add(tl.to('.hero2 .word',{duration:1.2,y:100, opacity:.1,ease:"sine.inOut", repeat:10,yoyo:true}));

    //tl.from('h2.second .word',{duration:.5, opacity:0, rotateX:-80,stagger:0.08},"-=1.2");
    tl.to('h2.second .hblue',{color: "#3C78D8"});

    //tl.from('p.intro',{duration:0.5,opacity:0,y:10},"+=.5");
    //tl.to('div.center img',{duration:2,rotate:-10, yoyo:true,yoyoEase: true},"-=1.2");
    
    //tl.from('header ul li',{y:-200, duration:.4, stagger:0.1},"-=1.5");
    
    //tl.to('h1 .word',{duration:0.2,x:1000,stagger:0.2,ease:"sine.inOut"},"+=3");
    
    tl.from('h2.second .word', {
        scrollTrigger: {
          trigger: ".box",
          scroller: ".smooth-scroll",
          scrub: true,
          start: "top center",
          end: "top top"
        },
        duration:.5, opacity:0, rotateX:-80,stagger:0.08,
        ease: "none"
      });
    
    tl.from('h2.third .word',{
        scrollTrigger: {
            trigger: "h2.second",
            scroller: ".smooth-scroll",
            scrub: true,
            start: "top bottom",
            end: "bottom center"
        },
        opacity:0, rotateX:-90, stagger:0.1
    });

    tl.to('h2.third',{
        scrollTrigger: {
            trigger: "h2.third",
            scroller: ".smooth-scroll",
            scrub: true,
            start: "top center",
            end: "bottom top"
        },
        scale:10,y:500,filter:"blur(3px)",ease: "none", color:"#000", 
    });
   
}

function mouseStuff() {
    // $('a').mouseover(function(e){
    //     $('.ball').addClass('ball-on');
    //     $('.smallball').hide();
    // })
    // $('a').mouseout(function(e){
    //     $('.ball').removeClass('ball-on');
    //     $('.smallball').show();
    // });
    // $('a').click(function(e){
    //     //$('.ball').attr('style','z-index:1000');
    //     //$('.smallball').show();
    // });
};


$(document).mousemove(function(e){
    //posX = e.clientX,
    //posY = e.clientY,
    x = e.pageX-15,
    y = e.pageY-15,
    $("span.coordinate").text(e.pageX + ", " + e.pageY);
    $(".transition-ball").attr("style","top: "+y+"px; left:"+x+"px");
   // $("h1").addClass("ball")
})

//Mouse follow functions
gsap.set(".ball", {xPercent: -50, yPercent: -50});
gsap.set(".smallball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const smallball = document.querySelector(".smallball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.5;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");
const xSet2 = gsap.quickSetter(smallball, "x", "px");
const ySet2 = gsap.quickSetter(smallball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
  xSet2(pos.x);
  ySet2(pos.y);
});
