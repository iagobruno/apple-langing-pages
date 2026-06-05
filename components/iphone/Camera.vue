<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useScrollTrigger } from '@/composables/useScrollTrigger';
import { gsap } from 'gsap';

const section = useTemplateRef('section');

const ease = gsap.parseEase('power2.out');

useScrollTrigger(section, {
  start: 'top bottom',
  end: 'top top',
  scrub: 1,
  // markers: true,

  onUpdate(self) {
    const min = 40,
      max = 0;
    const easedProgress = ease(self.progress);
    const scale = min + easedProgress * (max - min);
    section.value!.style.setProperty('--rotation', scale.toString() + 'deg');
  },
});
</script>

<template>
  <section
    ref="section"
    class="px-10 py-16 lg:pt-40 lg:pb-30 bg-black text-white relative overflow-hidden"
  >
    <div
      class="mx-auto max-w-[1300px] flex flex-col-reverse lg:flex-row justify-between items-center gap-x-4 gap-y-14"
    >
      <div class="text-[2.8rem]/13 md:text-[4.2rem]/20 max-w-[540px]">
        <h3 class="text-[0.38em] leading-normal text-amber-500 mb-1">
          Esse zoom vai longe.
        </h3>
        <h2 class="font-medium">A câmera com o maior fandom do mundo.</h2>

        <div class="mt-14 flex gap-10 flex-col">
          <div
            v-for="item of [
              ['Zoom de até', '8x'],
              ['Câmeras traseiras de', '48 MP'],
              ['Câmera frontal de', '18 MP'],
            ]"
            class="font-medium text-gray-500"
          >
            <div class="text-xl">{{ item[0] }}</div>
            <div class="text-5xl font-semibold text-amber-500 my-2">
              {{ item[1] }}
            </div>
          </div>
        </div>
      </div>

      <div class="absolute left-4/8 top-2/4 ml-5 -translate-y-2/4">
        <img
          src="/iphone-back.jpg"
          class="not-xl:hidden min-w-[1500px] origin-[9.5%_20%] scale-100 rotate-(--rotation)"
        />
        <!-- <span class="bg-red-500 size-2 absolute left-[9.5%] top-[20%]" /> -->
      </div>
    </div>
  </section>
</template>
