<script setup lang="ts"></script>

<template>
  <section
    class="h-svh lg:min-h-[720px] w-full px-6 py-12 md:py-24 relative overflow-hidden"
  >
    <div
      class="text-[1.4rem] md:text-[2rem] h-full flex flex-col justify-between items-center gap-6 text-center relative z-3"
    >
      <header>
        <h1 class="font-semibold text-[1.2em]/10 mb-4 text-slate-800">
          iPhone Air
        </h1>
        <h1
          class="font-medium text-slate-700/90 text-[0.92em] leading-7 md:leading-10"
        >
          Rápido que é uma beleza.<br />
          Potência de sobra.
        </h1>
      </header>

      <img
        src="/iphone-hero-mobile.jpg"
        class="md:hidden max-h-[80svh]"
      />

      <footer
        class="not-md:bg-[#F5F5F7] not-md:w-[400px] not-md:absolute p-6 rounded-2xl bottom-0 left-2/4 not-md:-translate-x-2/4"
      >
        <Button class="text-[0.7em]! mt-4 md:mb-9">Comprar</Button>

        <p class="text-[0.64em] opacity-75">
          A partir de R$ 874,92/mês ou R$ 10.499*
        </p>
      </footer>
    </div>

    <video
      src="/iphone-floating.mp4"
      class="not-md:hidden object-cover aspect-2020/660 w-[100vw] absolute top-2/4 left-2/4 -translate-x-3/11 -translate-y-2/4"
      :autoplay="true"
      playsinline
      controlslist="nofullscreen nodownload noremoteplayback"
      disablepictureinpicture
      preload="auto"
      muted
    />
  </section>
</template>
