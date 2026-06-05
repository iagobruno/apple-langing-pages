<script setup lang="ts">
const items = [
  {
    label: ['Produzido com', '30% do peso em material reciclado.'],
    color: '#8668ff',
    icon: '/icon_recycling.png',
  },
  {
    label: ['Fabricado com ', '40% de eletricidade renovável.'],
    color: '#ed6300',
    icon: '/icon_electricity.png',
  },
  {
    label: ['Embalagens menores para enviar ', '25% mais unidades por viagem.'],
    color: '#00a1b3',
    icon: '/icon_package.png',
  },
];
</script>

<template>
  <section class="py-24 px-6 bg-[#F5F5F7]">
    <div class="max-w-[1200px] mx-auto">
      <h2 class="text-3xl md:text-5xl font-semibold">
        O iPhone e o meio ambiente.
      </h2>

      <div
        class="mt-16 flex gap-6 *:flex-1 flex-col md:flex-row not-md:items-center"
      >
        <article
          v-for="item of items"
          class="bg-white py-9 px-8.5 rounded-xl cursor-pointer transition-transform duration-500 hover:scale-103"
        >
          <img
            :src="item.icon"
            class="size-13 mb-4"
          />
          <div class="text-[1.5rem]/9 font-semibold">
            {{ item.label[0] }}
            <span :style="{ color: item.color }">{{ item.label[1] }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
