<script setup lang="ts">
import Camera from '~/components/iphone/Camera.vue';
import Features from '~/components/iphone/Features.vue';
import Hero from '~/components/iphone/Hero.vue';
import Innovation from '~/components/iphone/Innovation.vue';
import IOS from '~/components/iphone/IOS.vue';
import Performance from '~/components/iphone/Performance.vue';
import Privacy from '~/components/iphone/Privacy.vue';

useHead({
  title: 'iPhone Air - Apple',
  link: [
    // {
    //   rel: 'preload',
    //   as: 'video',
    //   href: '/airpods-rotation.webm'
    // }
  ],
});
</script>

<template>
  <Hero />

  <Innovation />

  <Camera />

  <Performance />

  <IOS />

  <Privacy />

  <Features />
</template>
