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
        const loadText = new SplitType(loadT, { types: 'words, chars' })


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



        // const intro = gsap.timeline({ paused: true })



        // const load = gsap.timeline({})
        // const loadS = gsap.timeline({ paused: true })

        // loadS.to(loadNumber, {
        //     y: '120%',
        //     ease: 'expo.out',
        //     duration: 1.1
        // }, '0.1')

        // load.set(loadNumber, {
        //     display: 'flex'
        // })



        // load.to(loadNumber, {
        //     textContent: 100,
        //     roudProps: "textContent",
        //     ease: 'linear',
        //     duration: 2,
        //     onUpdate: function () {
        //         loadNumber.textContent = Math.round(this.targets()[0].textContent);
        //     },
        // })

        // load.to(Lwrapper, {
        //     y: '-110%',
        //     duration: 1.6,
        //     ease: 'expo.out',
        // })

        // load.from('.hero_wrapper', {
        //     y: '110%',
        //     duration: 1.2,
        //     ease: 'expo.out'
        // })


        // load.eventCallback("onComplete", function () {
        // });


        console.log('its laodidng');


        // restartWebflow()


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
