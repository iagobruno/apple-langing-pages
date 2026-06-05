<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useScrollTrigger } from '@/composables/useScrollTrigger';

const video = useTemplateRef('video');
const container = useTemplateRef('container');

useScrollTrigger(container, {
  start: 'top 80%',
  end: 'center top',
  scrub: 1,
  // markers: true,

  onUpdate(self) {
    if (video.value!.duration) {
      video.value!.currentTime = self.progress * video.value!.duration;
    }
  },
});
</script>

<template>
  <section
    ref="container"
    class="max-w-[700px] mx-auto px-4 py-20 relative"
  >
    <div class="relative">
      <h3 class="text-[1.5rem] mb-0 text-primary">Desempenho e bateria</h3>
      <h2 class="text-[3.2rem] font-medium">Feito para voar.</h2>

      <video
        ref="video"
        src="/iphone-air.webm"
        class="object-contain z-5 absolute top-7/11 left-2/4 -translate-2/4 min-w-[1500px] aspect-1450/850"
        :autoplay="false"
        playsinline
        controlslist="nofullscreen nodownload noremoteplayback"
        disablepictureinpicture
        preload="auto"
        muted
      />
      <div class="h-[500px]"></div>

      <div class="flex gap-6 *:flex-1 flex-col md:flex-row not-md:items-center">
        <div
          v-for="item of [
            ['Chip', 'A19 Pro'],
            ['Chip', 'N1'],
            ['Modem', 'C1X'],
          ]"
          class="text-center md:text-left"
        >
          <div class="text-[1.16rem] opacity-80">{{ item[0] }}</div>
          <div class="text-[1.6rem] font-medium">
            {{ item[1] }}
          </div>
        </div>
      </div>
    </div>

    <p class="text-xl opacity-80 mt-14">
      O iPhone Air foi projetado para oferecer desempenho Pro no iPhone mais
      fino já feito. Ele junta toda a potência da nova geração de chips da Apple
      e a eficiência do A19 Pro. Isso permite o uso de recursos avançados, como
      a ferramenta de Limpeza no Fotos e a Apple Intelligence, além de rodar
      jogos com gráficos pesados. Tudo sem esforço.
    </p>
  </section>
</template>
