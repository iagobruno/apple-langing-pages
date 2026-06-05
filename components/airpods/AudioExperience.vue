<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useScrollTrigger } from '@/composables/useScrollTrigger';

const section = useTemplateRef('section');

useScrollTrigger(section, {
  start: 'top bottom',
  end: 'top top',
  scrub: 1,
  // markers: true,

  onUpdate(self) {
    const min = 0.8;
    const max = 1;
    const scale = min + self.progress * (max - min);
    section.value!.style.setProperty('--scale', scale.toString());
  },
});
</script>

<template>
  <section
    ref="section"
    class="w-full relative grid place-items-center overflow-hidden bg-[#140826]"
  >
    <div
      class="text-center text-white pt-14 md:pt-60 mx-auto max-w-[700px] relative z-1"
    >
      <div class="relative z-1">
        <h3 class="text-[1.1rem] lg:text-[1.8rem] font-medium mb-1">
          Desempenho de áudio
        </h3>
        <h2 class="text-[2rem]/10 lg:text-[4.8rem]/22 font-semibold">
          Uma experiência <br />
          sonora <br />
          completamente <br />
          reinventada.
        </h2>
      </div>

      <div
        class="z-0 absolute top-0 left-0 size-full -translate-y-0 lg:translate-y-50 2xl:translate-y-80"
      >
        <div
          v-for="(color, index) in ['#E589F6', '#A338D2', '#670DA0', '#3C0C67']"
          :key="index"
          class="w-[120vw] lg:w-[70vw] 2xl:w-[55vw] rounded-full absolute top-1/2 left-1/2 aspect-square inset-shadow-[0_0_50px_rgb(255_255_255/25%)] bg-[url(/noise.png)]"
          :style="{
            backgroundColor: color,
            transform: `translate(-50%, -50%) scale(calc(var(--scale) * ${1 + index * 0.4}))`,
            zIndex: 5 - index,
          }"
        />
      </div>
    </div>

    <img
      src="/audio_hero.png"
      class="md:w-[60%] mx-auto xl:-mt-10 relative z-1"
    />
  </section>
</template>
