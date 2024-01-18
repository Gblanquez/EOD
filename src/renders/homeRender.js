import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { Core } from '@unseenco/taxi'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Renderer } from '@unseenco/taxi';
import { restartWebflow } from '@finsweet/ts-utils';

export default class homeRenderer extends Renderer {
    initialLoad() {


        //Load Animation

        const Lwrapper = document.querySelector('.load_wrapper')
        const loadT = document.querySelector('.loadt')
        const loadText = new SplitType(loadT, { types: 'words, chars, lines' })


        const heroWrap = document.querySelector('.hero_parent')
        const pHero = document.querySelector('.hero_p')
        const loadNumber = document.querySelector('.numbload')
        const buttomMain = document.querySelector('.main_link')
        const heroH1 = document.querySelector('.hero_h1')
        const heroH2 = document.querySelector('.hero_h2')
        const subH = document.querySelector('.sub_heading')
        const eLine = document.querySelectorAll('[data-a="heroline"]')
        const eNumb = document.querySelectorAll('[data-a="heronumb"]')
        const eP = document.querySelectorAll('[data-a="herop"]')

        const Hsub = new SplitType(subH, { types: 'chars' })
        const heroText = new SplitType(heroH1, { types: 'chars' })
        const heroSub = new SplitType(heroH2, { types: 'chars' })
        const heroMinText = new SplitType(pHero, { types: 'chars' })

        const pSplit = new SplitType(eP, { types: 'chars' });
        const numbSplit = new SplitType(eNumb, { types: 'chars' });



        const intro = gsap.timeline({ paused: true })

        intro.from(eLine, {
            width: '0%',
            duration: 1.4,
            ease: 'expo.out',
            stagger: {
                each: 0.02
            }
        }, '0')

        intro.from(heroMinText.chars, {
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
            }
        }, '0.1')

        intro.from(Hsub.chars, {
            y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            // opacity: 0,
            yPercent: 190,
            xPercent: -190,
            rotateZ: () => Math.random() * 90, // Random value between 0 and 360
            rotateX: -90,
            scale: () => 0.8 + Math.random() * 0.4, // Random value between 0.8 and 1.2
            transformOrigin: "center center",
            transformPerspective: 2000,
            ease: 'expo.out',
            stagger: {
                each: 0.01
            },
            duration: 1.6,
        }, '0.2')

        intro.from(heroSub.chars, {
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
            }
        }, '0.3')

        intro.from(heroText.chars, {
            y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            // opacity: 0,
            yPercent: 190,
            xPercent: -190,
            rotateZ: () => Math.random() * 90, // Random value between 0 and 360
            rotateX: -90,
            scale: () => 0.8 + Math.random() * 0.4, // Random value between 0.8 and 1.2
            transformOrigin: "center center",
            transformPerspective: 2000,
            ease: 'expo.out',
            stagger: {
                each: 0.01
            },
            duration: 1.6,
        }, '0.4')

        intro.from(buttomMain, {
            y: '120%',
            opacity: 0,
            duration: 1.6,
            ease: 'expo.out'
        }, '0.5')


        intro.from(pSplit.chars, {
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
            }
        }, '0.6');

        intro.from(numbSplit.chars, {
            y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            // opacity: 0,
            yPercent: 190,
            xPercent: -190,
            rotateZ: () => Math.random() * 90, // Random value between 0 and 360
            rotateX: -90,
            scale: () => 0.8 + Math.random() * 0.4, // Random value between 0.8 and 1.2
            transformOrigin: "center center",
            transformPerspective: 2000,
            ease: 'expo.out',
            stagger: {
                each: 0.01
            },
            duration: 1.6,
        }, '0.7');


        const load = gsap.timeline({})
        const loadS = gsap.timeline({ paused: true })

        loadS.to(loadText.chars, {
            y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            opacity: 0,
            yPercent: 190,
            xPercent: -190,
            rotateZ: () => Math.random() * 90, // Random value between 0 and 360
            rotateX: -90,
            scale: () => 0.8 + Math.random() * 0.4, // Random value between 0.8 and 1.2
            transformOrigin: "center center",
            transformPerspective: 2000,
            ease: 'expo.out',
            stagger: {
                each: 0.01
            },
            duration: 1.6,
        }, '0')

        loadS.to(loadNumber, {
            y: '120%',
            ease: 'expo.out',
            duration: 1.1
        }, '0.1')

        load.set(loadNumber, {
            display: 'flex'
        })




        load.from(loadText.chars, {
            y: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            x: () => `${Math.random() * 160 - 80}%`, // Random value between -80% and 80%
            // opacity: 0,
            yPercent: 190,
            xPercent: -190,
            rotateZ: () => Math.random() * 90, // Random value between 0 and 360
            rotateX: -90,
            scale: () => 0.8 + Math.random() * 0.4, // Random value between 0.8 and 1.2
            transformOrigin: "center center",
            transformPerspective: 2000,
            ease: 'expo.out',
            stagger: {
                each: 0.01
            },
            duration: 1.6,
        })

        load.to(loadNumber, {
            textContent: 100,
            roudProps: "textContent",
            ease: 'linear',
            duration: 2,
            onUpdate: function () {
                loadNumber.textContent = Math.round(this.targets()[0].textContent);
            },
            onComplete: () => loadS.play()
        })

        load.from(heroWrap, {
            scale: 0.7,
            borderTopLeftRadius: '4rem',
            borderTopRightRadius: '4rem',
            overflow: 'hidden',
            y: '46%',
            ease: 'expo.out',
            duration: 2,
        })


        load.eventCallback("onComplete", function () {

            intro.play();
        });


        console.log('its laoding');


    }


    onEnter() {

        // run after the new content has been added to the Taxi container
    }

    onEnterCompleted() {
        // run after the transition.onEnter has fully completed
    }

    onLeave() {
        // run before the transition.onLeave method is called
    }

    onLeaveCompleted() {
        // run after the transition.onleave has fully completed
    }
}
