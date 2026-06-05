<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import { useVisibilityTrigger } from '@/composables/useVisibilityTrigger';

const section = useTemplateRef('section');

const showing = ref(false);

useVisibilityTrigger(section, () => {
  showing.value = true;
});
</script>

<template>
  <section class="">
    <div
      class="w-full pt-60 pb-70 px-10 text-center relative text-white bg-linear-to-b from-transparent via-emerald-500 to-[#111111]"
    >
      <h3 class="text-[1.3rem] md:text-[1.7rem] font-medium mb-2">
        Bateria para o dia todo
      </h3>
      <h2 class="text-[2.5rem]/13 md:text-[4rem]/19 font-semibold">
        Recarrega rápido
        <div
          class="relative text-nowrap"
          ref="section"
        >
          <span
            v-for="index in 7"
            :key="index"
            :style="{
              zIndex: 10 - index,
              opacity: !showing ? 0 : 1 - index * 0.15 + 0.2,
              transform:
                index === 1 && !showing
                  ? 'none'
                  : `translateY(${index * 26 - 26}px) scale(${1 - index * 0.1 + 0.1})`,
              position: index === 1 ? 'relative' : 'absolute',
              maskImage:
                index === 1
                  ? ''
                  : `linear-gradient(180deg,rgba(255,255,255,0) 55%,rgb(255,255,255))`,
              transitionDelay: `${index * 100}ms`,
            }"
            class="top-0 pointer-events-none transition-all duration-500"
            :class="index === 1 ? '' : 'left-2/4 -translate-x-2/4'"
          >
            E dura
          </span>
        </div>
      </h2>
    </div>

    <img
      src="/battery-case.png"
      class="mx-auto -mt-30 w-[280px] relative z-1"
    />

    <div class="text-center pt-12 px-10 mx-auto max-w-[1000px]">
      <p class="text-2xl font-medium opacity-90">
        O estojo de recarga MagSafe está cheio de recursos úteis, como
        alto‑falante integrado e Busca Precisa mais poderosa, para você
        encontrar seus AirPods Pro 3 onde quer que estejam. E, agora, uma única
        recarga é suficiente para você curtir o dia. Sem parar.
      </p>

      <div
        class="py-20 flex gap-6 *:flex-1 flex-col md:flex-row not-md:items-center"
      >
        <div
          v-for="item of [
            ['30 horas', 'de áudio com o estojo'],
            ['5 horas', 'de áudio com apenas uma recarga'],
            ['4 horas', 'de áudio com o Cancelamento Ativo de Ruído'],
          ]"
          class="text-center md:text-left font-medium"
        >
          <div class="text-xl">Até</div>
          <div
            class="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-br from-emerald-500 to-emerald-600"
          >
            {{ item[0] }}
          </div>
          <div class="text-xl">{{ item[1] }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
