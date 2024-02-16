import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { Core } from '@unseenco/taxi'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homeRenderer from './renders/homeRender';




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



const formF = document.querySelectorAll('.form_t_field')
const formS = document.querySelector('.submit_b')
const closeB = document.querySelector('.close_form')




const mainLinks = document.querySelectorAll('[data-a="footer"]');


mainLinks.forEach((mainLink) => {
  mainLink.addEventListener('click', function () {
    lenis.stop();

    const tl = gsap.timeline();

    tl.set('.form_wrapper', { display: 'flex' });

    tl.fromTo('.form_parent', {
      scale: 0.3,
      y: '80%',
      opacity: 0
    }, {
      scale: 1,
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out'
    }, '0.1');

    tl.fromTo(formF, {
      scaleX: '0%',
      transformOrigin: 'left',
      opacity: 0
    }, {
      scaleX: '100%',
      opacity: 1,
      duration: 1.4,
      ease: 'expo.out',
      stagger: {
        each: 0.02
      }
    }, '0.4');

    tl.fromTo(closeB, {
      scale: 0.3,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'expo.out'
    }, '0.5');

    tl.fromTo(formS, {
      scale: 0.3,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'expo.out'
    }, '0.6');
  });
});


document.querySelector('.close_form').addEventListener('click', function () {

  const tl = gsap.timeline();

  tl.to(formF, {
    scaleX: '0%',
    transformOrigin: 'right',
    duration: 1,
    stagger: {
      each: 0.02
    }
  }, '0.1')

  tl.to(formS, {
    scale: 0.3,
    opacity: 0,
    duration: 1,
    ease: 'expo.out'
  }, '0.2')

  tl.to(closeB, {
    scale: 0.3,
    opacity: 0,
    duration: 1,
    ease: 'expo.out'
  }, '0.3')

  tl.to('.form_parent', {
    scale: 0.3,
    y: '80%',
    opacity: 0,
    duration: 0.8,
    ease: 'expo.out',
    onComplete: function () {
      lenis.start();

      gsap.set('.form_wrapper', { display: 'none' });
    }
  }, '0.3');
});


gsap.registerPlugin(ScrollTrigger);


//Info Click Animation

const mainT = document.querySelector('.info_span')
const infoT = document.querySelectorAll('.info_p')
const infoN = document.querySelectorAll('.info_n_span')
const infoL = document.querySelectorAll('.item_line')

const infoB = document.querySelector('.button_close_info')

const infoLinks = document.querySelectorAll('[data-a="info-link"]')

infoLinks.forEach((infoLink) => {
  infoLink.addEventListener('click', function () {
    lenis.stop();


    const tl = gsap.timeline();

    tl.set('.info_wrapper', { display: 'flex' });

    tl.fromTo('.info_hold', {
      scale: 0.3,
      y: '80%',
      opacity: 0
    }, {
      scale: 1,
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out'
    }, '0.1');

    tl.fromTo(mainT, {
      y: '110%',
      opacity: 0
    }, {
      y: '0%',
      opacity: 1,
      duration: 1.6,
      ease: 'expo.out',

    }, '0.2');

    tl.fromTo(infoT, {
      y: '110%',
      opacity: 0
    }, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'expo.out',
      stagger: {
        each: 0.05
      }
    }, '0.3');

    tl.fromTo(infoN, {
      y: '110%',
      opacity: 0
    }, {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'expo.out',
      stagger: {
        each: 0.05
      }
    }, '0.3');

    tl.fromTo(infoL, {
      width: '0%',
      opacity: 0,
    }, {
      width: '100%',
      opacity: 1,
      duration: 1.4,
      ease: 'expo.out',
      stagger: {
        each: 0.04
      }
    }, '0.3')
  });
});



document.querySelector('.button_close_info').addEventListener('click', function () {

  const tl = gsap.timeline();

  tl.to(infoT, {
    y: '110%',
    opacity: 0,
    duration: 1,
  }, '0.1')

  tl.to(infoN, {
    y: '110%',
    opacity: 0,
    duration: 1,
    ease: 'expo.out',
    stagger: {
      each: 0.02
    }
  }, '0.2')

  tl.to(mainT, {
    y: '110%',
    opacity: 0,
    duration: 1,
    ease: 'expo.out'
  }, '0.3')

  tl.to('.info_hold', {
    scale: 0.3,
    y: '80%',
    opacity: 0,
    duration: 0.8,
    ease: 'expo.out',
    onComplete: function () {
      lenis.start();

      gsap.set('.info_wrapper', { display: 'none' });
    }
  }, '0.3');
});

// document.querySelector('.submit_b').addEventListener('click', function () {
//   const downloadLink = document.querySelector('.download_link');
//   downloadLink.click();
// });

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.submit_b').addEventListener('click', function () {
    // Select all form fields
    const formFields = document.querySelectorAll('.form_t_field');

    // Check if all fields are filled
    const allFieldsFilled = Array.from(formFields).every(field => field.value.trim() !== '');

    if (allFieldsFilled) {
      // If all fields are filled, find and click the download link
      const downloadLink = document.querySelector('.download_link');
      if (downloadLink) {
        downloadLink.click();
      } else {
        console.error('Download link not found');
      }
    } else {
      // Optional: Alert the user or handle the case where not all fields are filled
      console.log('Please fill all the fields.');
    }
  });
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




const taxi = new Core({
  renderers: {
    home: homeRenderer,
  }
})