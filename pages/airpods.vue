<script setup lang="ts">
import Hero from '@/components/airpods/Hero.vue';
import AppleMusic from '@/components/airpods/AppleMusic.vue';
import AudioExperience from '@/components/airpods/AudioExperience.vue';
import Battery from '@/components/airpods/Battery.vue';
import HearingHealth from '@/components/airpods/HearingHealth.vue';
import NoiseCancellation from '@/components/airpods/NoiseCancellation.vue';
import Usability from '@/components/airpods/Usability.vue';

useHead({
  title: 'AirPods Pro - Apple',
  link: [
    {
      rel: 'preload',
      as: 'video',
      href: '/airpods-rotation.webm'
    }
  ]
});
</script>

<template>
  <Hero />

  <AudioExperience />

  <Usability />

  <HearingHealth />

  <NoiseCancellation />

  <Battery />

  <AppleMusic />
</template>
