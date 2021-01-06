function smooth(scrollContainer) {
    
      let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]')
      scroll = new LocomotiveScroll({
        el: currentScrollContainer,
        smooth: true
      });
    
    
    
      setTimeout(() => {
        scroll.update();
      }, 5000);
    
    }
let scroll;

barba.init({
  transitions: [{
    name: 'dpk-transition',

    once({ next }) {
      pageTransition();
      smooth(next.container);
    },
    beforeEnter({ next }) {
      scroll.destroy();
      smooth(next.container);
    },
    leave({ next }) {
      pageTransition();
    },
  }]

});