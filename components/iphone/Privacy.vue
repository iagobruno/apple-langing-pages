<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useVisibilityTrigger } from '@/composables/useVisibilityTrigger';

const section = useTemplateRef('section');
const video = useTemplateRef('video');

useVisibilityTrigger(section, () => {
  video.value!.play();
  setTimeout(() => {
    section.value!.querySelector('.highlight')?.classList.remove('hide');
  }, 1200);
});
</script>

<template>
  <section
    ref="section"
    class="w-full pt-20 px-5 relative bg-[#F5F5F7]"
  >
    <div
      class="text-center bg-white rounded-2xl px-6 py-8 md:px-30 md:py-20 mx-auto max-w-[1100px]"
    >
      <video
        ref="video"
        src="/privacy-lock.mp4"
        class="mx-auto mb-3 size-[3.5em]"
        :autoplay="true"
        playsinline
        controlslist="nofullscreen nodownload noremoteplayback"
        disablepictureinpicture
        preload="auto"
        muted
      ></video>

      <h2 class="text-[1.6rem]/8 md:text-[4rem]/22 font-semibold mb-5">
        Com grandes poderes <br />
        vem grande <span class="highlight hide">privacidade.</span>
      </h2>

      <p class="text-sm md:text-xl opacity-80 text-center">
        A privacidade é um direito humano fundamental e também um dos nossos
        principais valores. Por isso, criamos produtos e serviços para
        protegê-la. É nesse tipo de inovação que acreditamos. Na Apple, nós
        desenvolvemos o chip, o sistema e os serviços juntos para que suas
        informações sejam processadas no próprio aparelho sempre que possível,
        com criptografia avançada e transparência total sobre o que cada app
        pode acessar.
      </p>
    </div>
  </section>
</template>

<style scoped>
.highlight {
  --gradient: linear-gradient(
    -97deg,
    rgb(29, 29, 31),
    rgb(29, 29, 31) 50%,
    #f55600 0,
    #f2416b,
    #ba62fc,
    #0090f7
  );
  background-position: 0% 0;
  background-size: 200% 100%;
  transition: background 1s ease;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-image: var(--gradient);
  background-clip: text;
  color: transparent;
  display: inline-block;
}
.highlight.hide {
  background-position: 100% 0;
}
</style>
