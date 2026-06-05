<template>
  <section class="px-10 pt-34 pb-30 bg-[#FAFAFC]">
    <div
      class="mx-auto max-w-[1000px] flex flex-col-reverse lg:flex-row justify-between items-center gap-x-4 gap-y-14"
    >
      <div class="text-[2.2rem]/11 md:text-5xl/16">
        <img
          src="/apple-music-logo.png"
          class="h-[0.6em] mb-3"
        />
        <h2 class="font-medium max-w-[450px]">
          Ganhe 3 meses de Apple Music com seus AirPods
        </h2>
      </div>

      <div class="relative w-full max-w-[350px] lg:w-[35%] aspect-square">
        <img
          v-for="(img, index) of [
            '/coisas-naturais-cover.jpg',
            '/melodrama-cover.png',
            '/future-nostalgia.png',
          ]"
          :src="img"
          class="aspect-square object-cover rounded-xl origin-top size-full absolute top-0 left-0"
          :class="{
            'z-10': index === 0,
            'z-9 scale-90 -translate-y-4': index === 1,
            'z-8 scale-80 -translate-y-8': index === 2,
          }"
        />
      </div>
    </div>
  </section>
</template>
