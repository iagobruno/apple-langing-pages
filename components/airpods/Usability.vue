<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { useScrollTrigger } from '@/composables/useScrollTrigger';
import { gsap } from 'gsap';

const sectionRef = useTemplateRef('sectionRef');
const video = useTemplateRef('video');
const videoContainer = useTemplateRef('videoContainer');

useScrollTrigger(videoContainer, {
  start: 'center center',
  end: '+=3000',
  scrub: true,
  pin: true,
  // markers: true,
});

useScrollTrigger(sectionRef, {
  start: 'top bottom',
  end: 'bottom bottom',
  scrub: 1,
  // markers: true,

  onUpdate(self) {
    if (video.value!.duration) {
      video.value!.currentTime = self.progress * video.value!.duration;
    }
  },
});

const label1 = useTemplateRef('label1');
const label2 = useTemplateRef('label2');

[label1, label2].forEach((element) => {
  useScrollTrigger(element, {
    start: 'top 50%',
    end: 'top 30%',
    scrub: true,
    // markers: true,

    onUpdate(self) {
      const opacity =
        self.progress < 0.5 ? self.progress * 2 : (1 - self.progress) * 2;
      gsap.set(element.value, { opacity });
    },
  });
  onMounted(() => {
    element.value!.style.opacity = '0';
  });
});
</script>

<template>
  <section class="w-full relative">
    <div class="text-center pt-26 px-6">
      <h3
        class="text-[1.4rem] md:text-[1.75rem] text-primary font-normal md:mb-2"
      >
        Usabilidade
      </h3>
      <h2 class="text-[2.6rem]/13 md:text-[4.2rem]/18 font-semibold mb-5">
        Um design harmônico
      </h2>
      <p
        class="text-[1.2rem] md:text-[1.6rem] opacity-75 mx-auto max-w-[600px]"
      >
        Os AirPods 4 oferecem um encaixe excepcional, maior estabilidade e
        conforto o dia todo.
      </p>
    </div>

    <div ref="sectionRef" class="relative w-full max-w-[1200px] mx-auto">
      <div
        ref="videoContainer"
        class="h-[80svh] w-full grid place-items-center"
      >
        <video
          ref="video"
          src="/airpods-rotation.webm"
          class="object-contain aspect-738/568 pointer-events-none"
          :autoplay="false"
          playsinline
          controlslist="nofullscreen nodownload noremoteplayback"
          disablepictureinpicture
          preload="auto"
          muted
        />
      </div>

      <div
        ref="label1"
        class="w-[340px] absolute top-[360px] left-6 not-lg:hidden"
      >
        <div class="text-[1.1rem] font-medium mb-1">
          Para um encaxe perfeito
        </div>
        <p class="opacity-80">
          A arquitetura interna e o acabamento refinado proporcionam um encaixe
          firme e confortável para ainda mais pessoas.
        </p>
      </div>
      <div
        ref="label2"
        class="w-[340px] absolute top-[1340px] right-6 not-lg:hidden"
      >
        <div class="text-[1.1rem] font-medium mb-1">
          Haste atualizada com sensor de força.
        </div>
        <p class="opacity-80">
          Basta apertar a haste para tocar músicas, atender chamadas e até fazer
          fotos e vídeos no iPhone com o novo Controle Remoto da Câmera.
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-[460px] text-center pb-20 -mt-8">
      <p class="text-[1.1rem] font-medium mb-1">
        Resistentes a poeira, suor e água.
      </p>
      <p class="opacity-75">
        Os AirPods 4 e o estojo de recarga têm classificação IP54 de resistência
        a poeira, suor e água. Aguentam os exercícios mais intensos e até mesmo
        a chuva6.
      </p>
    </div>
  </section>
</template>

<style scoped>
.beat {
  animation: beat 0.6s ease-in-out infinite;
}

@keyframes beat {
  0% {
    transform: scale(1);
  }

  /* primeiro pico - mais forte */
  6% {
    transform: scale(1.18);
  }
  12% {
    transform: scale(0.93);
  }
  18% {
    transform: scale(1.08);
  }
  24% {
    transform: scale(0.97);
  }
  30% {
    transform: scale(1.02);
  }
  35% {
    transform: scale(1);
  }

  /* segundo pico - mais fraco */
  42% {
    transform: scale(1.09);
  }
  48% {
    transform: scale(0.96);
  }
  54% {
    transform: scale(1.04);
  }
  60% {
    transform: scale(0.99);
  }
  66% {
    transform: scale(1.01);
  }
  80% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
