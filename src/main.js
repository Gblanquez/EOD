import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { Core } from '@unseenco/taxi'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homeRenderer from './renders/homeRender';

gsap.registerPlugin(ScrollTrigger);

//Character Swiper

const characterSwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  speed: 400,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  }
});


//Character Animation
const cards = document.querySelectorAll('[data-a="card"]');

cards.forEach((card) => {
  const cardWrapper = card.querySelector('.ch_wrap_info');
  const cardbg1 = card.querySelectorAll('[data-a="cardbg1"]');
  const cardText = card.querySelector('[data-a="card-text"]');
  const cardTexts = card.querySelectorAll('[data-a="card-smalltext"]');

  const textCard = new SplitType(cardText, { types: 'words,chars' });
  const h2Card = new SplitType(cardTexts, { types: 'words,chars' });

  let navTl = gsap.timeline({ paused: true });

  navTl.to(cardWrapper, {
    display: 'flex',
  }, '0')
    .from(cardbg1, {
      height: '0%',
      ease: 'expo.out',
      duration: 1.2,
      stagger: {
        each: 0.1
      }
    }, '0.1')
    .from(h2Card.words, {
      y: '120%',
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: {
        each: 0.01
      }
    }, '0.2')
    .from(textCard.chars, {
      y: '120%',
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: {
        each: 0.01
      }
    }, '0.2');

  navTl.reverse();

  card.addEventListener("click", function () {
    navTl.reversed(!navTl.reversed());
  });
});



//Testimonial Slider

const testimonialSwiper = new Swiper('.swiper.testimonial', {
  slidesPerView: 2,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: document.querySelector('.testimonial_bttn.swiper-next'),
    prevEl: document.querySelector('.testimonial_bttn.swiper-prev'),
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
    },
  }
});


//Global H2 Animations

const pageH2 = document.querySelectorAll('[data-a="globalh2"]')


pageH2.forEach((element) => {
  const h2Text = new SplitType(element, { types: 'words, chars' })


})



//Global Paragraph Animation


const globalP = document.querySelectorAll('[data-a="globalp"]')

globalP.forEach((element) => {


  const pGlobal = new SplitType(element, { types: 'words, chars' })

})




//Smooth Scroll 

let lenis;
if (Webflow.env("editor") === undefined) {
  lenis = new Lenis({
    lerp: 0.1,
    orientation: 'vertical',
    infinite: false,
    wheelMultiplier: 0.4,
    gestureOrientation: "both",
    normalizeWheel: false,
    smoothTouch: false,
    autoResize: true
  });



  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);

  }
  requestAnimationFrame(raf);
}



const taxi = new Core({
  renderers: {
    home: homeRenderer,
  }
})