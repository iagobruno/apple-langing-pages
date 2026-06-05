import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollSmoother);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  ScrollSmoother.create({
    smooth: 1.05,
    // smoothTouch: 0.1
  });
});
