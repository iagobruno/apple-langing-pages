<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';
import { fitTextToWidth } from '@/utils/fitText';
import { playSequence } from '@/utils/sprite';
import Button from '@/components/Button.vue';

// const text = useTemplateRef('text');
// const img = useTemplateRef('canvas');

// onMounted(() => {
//   fitTextToWidth(text.value!);
//   window.addEventListener('resize', () => fitTextToWidth(text.value!), {
//     passive: true,
//   });

//   playSequence(img.value);
// });

const headingRef = useTemplateRef('heading');
const videoRef = useTemplateRef('video');

onMounted(() => {
  headingRef.value!.classList.remove('invisible');

  SplitText.create(headingRef.value!, {
    type: 'words',
    autoSplit: true,
    tag: 'span',
    onSplit(self) {
      return gsap.from(self.words, {
        opacity: 0,
        duration: 2.5,
        stagger: 1.6,
      });
    },
  });
  setTimeout(() => {
    videoRef.value!.play();
  }, 1200);
});
</script>

<template>
  <section
    class="h-svh lg:min-h-[720px] w-full px-6 pt-16 md:pt-30 relative overflow-hidden"
  >
    <div
      class="text-[5rem] md:text-[6rem] flex flex-col items-center text-center relative z-3"
    >
      <img src="/apple-logo.png" class="h-[0.4em] block mx-auto mb-3" />
      <h1 class="font-medium text-[0.4em]">AirPods Pro</h1>
      <h1
        class="font-semibold text-[0.65em]/16 md:text-[1em]/28 invisible"
        ref="heading"
      >
        Icônicos. Supersônicos.
      </h1>

      <p class="text-[0.22em] opacity-75 mt-6">
        AirPods Pro apartir de R$ 1.499<br />
        com Cancelamento de Ruído R$ 1.999
      </p>

      <Button class="text-[0.2em]! mt-8">Comprar</Button>
    </div>

    <!-- <canvas
      ref="canvas"
      class="absolute top-0 left-0 size-full pointer-events-none"
    /> -->

    <!-- <img
      ref="canvas"
      src="/airpods_pro_pair.png"
      class="object-contain size-[80%] z-2 absolute top-2/4 left-2/4 -translate-2/4 pointer-events-none"
    /> -->
    <video
      ref="video"
      src="/airpods-hero.mp4"
      class="object-cover aspect-1380/756 size-[120vw] md:size-[70vw] lg:size-[60vw] xl:size-[48vw] z-2 pointer-events-none absolute top-full left-2/4 -translate-x-2/4 -translate-y-10/14 md:-translate-y-3/5"
      :autoplay="false"
      playsinline
      controlslist="nofullscreen nodownload noremoteplayback"
      disablepictureinpicture
      preload="auto"
      muted
    />
  </section>
</template>
