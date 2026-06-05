<script setup lang="ts">
import { useScrollTrigger } from '~/composables/useScrollTrigger';

const sectionRef = useTemplateRef('sectionRef');

useScrollTrigger(sectionRef, {
  start: 'top bottom',
  end: 'bottom top',
  scrub: 1,

  onUpdate(self) {
    const min = 0.3,
      max = 0.6;
    const clamped = Math.min(Math.max(self.progress, min), max) * 2;
    sectionRef.value?.style.setProperty('--parallax', clamped.toString());
  },
});
</script>

<template>
  <section ref="sectionRef" class="w-full pt-14 pb-24 relative">
    <div class="text-center px-6">
      <h3
        class="text-[1.4rem] md:text-[1.55rem] text-primary font-medium md:mb-0.5"
      >
        iOS e Apps
      </h3>
      <h2 class="text-[2.6rem]/13 md:text-[4.2rem]/20 font-semibold mb-5">
        Seu e do seu jeito.<br />
        Por anos e anos.
      </h2>
    </div>

    <div class="relative w-fit mx-auto my-14">
      <img src="/ios_hero.webp" class="block relative z-2" />

      <img
        src="/ios_icons_left.png"
        class="right-full z-3 absolute top-2/4 -translate-y-2/4 -mr-6 origin-right scale-(--parallax)"
      />
      <img
        src="/ios_icons_right.png"
        class="left-full z-3 absolute top-2/4 -translate-y-2/4 -ml-9 origin-left scale-(--parallax)"
      />
    </div>

    <p class="lg:text-xl opacity-75 text-center max-w-[700px] mx-auto">
      Usar o iPhone significa usar o iOS, um sistema operacional extremamente
      seguro e intuitivo, que permite compartilhar fotos e arquivos, conversar
      com outras pessoas e muito mais. Tudo de um jeito integrado. Com o iOS,
      você pode personalizar a Tela de Início e a Tela Bloqueada do iPhone.
    </p>
  </section>
</template>
