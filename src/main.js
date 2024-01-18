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
  const h2Card = new SplitType(cardTexts, { types: 'words,chars,lines' });

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
    .from(h2Card.lines, {
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
  const h2Text = new SplitType(element, { types: 'words, chars, lines' })

  gsap.from(h2Text.chars, {
    y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
    x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
    // opacity: 0,
    yPercent: 190,
    xPercent: -190,
    color: '#C2C2C2',
    rotateZ: () => Math.random() * 90, // Random value between 0 and 360
    rotateX: -90,
    scale: () => 0.8 + Math.random() * 0.4, // Random value between 0.8 and 1.2
    transformOrigin: "center center",
    transformPerspective: 2000,
    duration: 2,
    ease: 'expo.out',
    stagger: {
      each: 0.03
    },
    scrollTrigger: {
      trigger: element,
      toggleActions: 'restart none none reset'
    }
  })

})



//Global Paragraph Animation


const globalP = document.querySelectorAll('[data-a="globalp"]')

globalP.forEach((element) => {


  const pGlobal = new SplitType(element, { types: 'words, chars, lines' })

  gsap.from(pGlobal.chars, {
    y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
    x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
    opacity: 0,
    rotateZ: 20,
    rotateX: -120,
    transformOrigin: "center center",
    transformPerspective: 2000,
    duration: 1.2,
    ease: 'expo.out',
    stagger: {
      each: 0.01
    },
    scrollTrigger: {
      trigger: element,
      toggleActions: 'restart none none reset'
    }
  })

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


//Experts Animation
const companyParents = document.querySelectorAll('.company_parent');
const summaryDivs = document.querySelectorAll('.summary_div');
const summaryCompanyPs = document.querySelectorAll('.summary_company_p');
const logos = document.querySelectorAll('.logo');
const swIcons = document.querySelectorAll('.sw_icon_1'); // Select the sw_icon_1 elements
const icons = document.querySelectorAll('.icon'); // Select the icon elements

companyParents.forEach((parent, index) => {
  parent.addEventListener('click', () => {
    if (!parent.classList.contains('active')) {
      // Find the currently active parent and remove the active class
      const currentActiveParent = document.querySelector('.company_parent.active');
      if (currentActiveParent) {
        currentActiveParent.classList.remove('active');
      }

      // Find all currently active summary_div, summary_company_p, logo, sw_icon_1, and icon elements and animate them
      const currentActiveSummaryDivs = document.querySelectorAll('.summary_div.active');
      const currentActiveSummaryCompanyPs = document.querySelectorAll('.summary_company_p.active');
      const currentActiveLogos = document.querySelectorAll('.logo.active');
      const currentActiveSwIcons = document.querySelectorAll('.sw_icon_1.active'); // Select the active sw_icon_1 elements
      const currentActiveIcons = document.querySelectorAll('.icon.active'); // Select the active icon elements

      currentActiveSummaryDivs.forEach(div => {
        gsap.to(div, {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          onComplete: () => div.classList.remove('active')
        });
      });

      currentActiveSummaryCompanyPs.forEach(p => {
        const pSplit = new SplitType(p, { types: 'words, chars' });
        gsap.to(pSplit.words, {
          y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
          x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
          opacity: 1,
          rotateZ: 0,
          rotateX: 0,
          yPercent: 0,
          xPercent: 0,
          transformOrigin: "center center",
          transformPerspective: 2000,
          duration: 1,
          ease: 'expo.out',
          stagger: {
            each: 0.01
          },
          onComplete: () => p.classList.remove('active')
        });
      });

      currentActiveLogos.forEach(logo => {
        gsap.to(logo, {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          onComplete: () => logo.classList.remove('active')
        });
      });

      currentActiveSwIcons.forEach(swIcon => {
        gsap.to(swIcon, {
          opacity: 0,
          scale: 0.5, // Animate the scale
          duration: 1,
          ease: 'power1.inOut',
          onComplete: () => swIcon.classList.remove('active')
        });
      });

      currentActiveIcons.forEach(icon => {
        gsap.to(icon, {
          opacity: 0,
          scale: 0.5, // Animate the scale
          duration: 1,
          ease: 'power1.inOut',
          onComplete: () => icon.classList.remove('active')
        });
      });

      // Add the active class to the clicked parent
      parent.classList.add('active');

      const summaryDiv = summaryDivs[index];
      const summaryCompanyP = summaryCompanyPs[index];
      const logo = logos[index];
      const swIcon = swIcons[index]; // Select the corresponding sw_icon_1 element
      const icon = icons[index]; // Select the corresponding icon element

      if (summaryDiv && summaryCompanyP && logo && swIcon && icon) {
        summaryDiv.classList.add('active');
        const pSplit = new SplitType(summaryCompanyP, { types: 'words, chars' });
        gsap.from(pSplit.words, {
          y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
          x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
          opacity: 0,
          rotateZ: 20,
          rotateX: -90,
          xPercent: -120,
          yPercent: 300,
          transformOrigin: "center center",
          transformPerspective: 2000,
          duration: 1,
          ease: 'expo.out',
          stagger: {
            each: 0.01
          }
        });
        summaryCompanyP.classList.add('active');
        logo.classList.add('active');
        swIcon.classList.add('active'); // Add the active class to the sw_icon_1 element
        icon.classList.add('active'); // Add the active class to the icon element

        gsap.to([summaryDiv, logo, swIcon, icon], {
          opacity: 1,
          scale: 1, // Animate the scale
          duration: 1,
          ease: 'power1.inOut'
        });
      }
    }
  });
});


const taxi = new Core({
  renderers: {
    home: homeRenderer,
  }
})