<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useScrollTrigger } from '@/composables/useScrollTrigger';
import { gsap } from 'gsap';

const video = useTemplateRef('video');
const section = useTemplateRef('section');

useScrollTrigger(section, {
  start: 'top 80%',
  end: 'center center',
  scrub: 1,
  // markers: true,

  onUpdate(self) {
    if (video.value!.duration) {
      video.value!.currentTime = self.progress * video.value!.duration;
    }
  },
});

const labelsRefs = useTemplateRef('labels');

useScrollTrigger(section, {
  start: 'center 90%',
  end: 'center center',
  scrub: 1,

  onUpdate(self) {
    labelsRefs.value!.forEach((item, i) => {
      const el = labelsRefs.value![i];
      if (!el) return;

      const DELAY = 0.15;
      const startProgress = i * DELAY;
      const localProgress = (self.progress - startProgress) / DELAY;
      const opacity = Math.min(1, Math.max(0, localProgress));

      gsap.set(el, { opacity });
    });
  },
});
</script>

<template>
  <section
    ref="section"
    class="w-full py-16 px-6 relative [--copy-width:500px]"
  >
    <div class="text-center max-w-(--copy-width) mx-auto">
      <h3
        class="text-[1.4rem] md:text-[1.5rem] text-primary font-normal md:mb-2"
      >
        É inovação para todo lado.
      </h3>
      <h2 class="text-[2.6rem]/13 md:text-[3rem]/16 font-medium mb-5">
        Então assim que é se sentir no futuro.
      </h2>
    </div>

    <div class="relative mx-auto w-fit">
      <video
        ref="video"
        src="/iphone-rotation.webm"
        class=""
        :autoplay="false"
        playsinline
        controlslist="nofullscreen nodownload noremoteplayback"
        disablepictureinpicture
        preload="auto"
        muted
      />

      <div class="absolute top-2/4 left-full -translate-y-2/4 pl-8 w-[200px]">
        <div class="flex gap-14 flex-col">
          <div
            v-for="item of [
              ['18 MP', 'Câmera frontal Center Stage'],
              ['48 MP', 'Câmera Fusion principal'],
              ['4K a 60 qps', 'Dolby Vision'],
              ['4 lentes', 'no seu bolso'],
            ]"
            ref="labels"
            class="text-center md:text-left"
            :style="{ opacity: 0 }"
          >
            <div class="text-[1.5rem] font-medium mb-0">{{ item[0] }}</div>
            <div class="text-[1.16rem] opacity-60">{{ item[1] }}</div>
          </div>
        </div>
      </div>
    </div>

    <p class="text-lg text-center opacity-80 mt-6 max-w-[620px] mx-auto">
      Com mais de uma década de inovações em hardware e software, o iPhone se
      tornou a câmera mais amada do mundo. O iPhone Air continua esse legado com
      um poderoso sistema de câmera Fusion de 48 MP que funciona como várias
      câmeras avançadas em uma.
    </p>
  </section>
</template>
