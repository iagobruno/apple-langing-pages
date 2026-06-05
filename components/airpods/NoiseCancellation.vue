<template>
  <section class="w-full relative grid place-items-center overflow-hidden">
    <div class="text-center pt-12 md:pt-30 relative z-3">
      <h3
        class="text-[1.2rem] md:text-[1.7rem] text-primary font-normal md:mb-2"
      >
        Controle de ruído inteligente
      </h3>
      <h2 class="text-[2.5rem]/12 md:text-[3.8rem]/16 font-semibold">
        A melhor coisa que você nunca ouviu
      </h2>
      <p class="text-[1.15rem] md:text-[1.75rem] opacity-75 mt-3 md:mt-5">
        Você, seu som e mais nada
      </p>
    </div>

    <div class="relative w-full aspect-3/5 md:aspect-5/3 not-md:scale-200">
      <img
        src="/audio-airpods-pro-guts.png"
        class="object-contain size-[60%] z-2 absolute top-2/4 left-2/4 -translate-2/4"
      />
      <img
        src="/noise-control-effect.png"
        class="beat object-contain size-[100%] z-1 absolute top-2/4 left-2/4 -translate-2/4"
      />
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
