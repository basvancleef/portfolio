<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-start items-center">
        <h2 class="text-6xl md:text-[200px] font-bold text-extra-black">EXPERIENCE</h2>
      </div>
      <div
          v-for="experience in experiences"
          :key="experience.company"
          class="text-extra-gray font-medium grid grid-cols-1 mt-4 md:grid-cols-3 md:mt-4"
      >
        <div class="flex flex-col space-y-4 font-bold md:font-normal">
          <span>{{ experience.company }}</span>
        </div>
        <div class="flex flex-col space-y-4">
          <span>{{ experience.position }}</span>
        </div>
        <div class="flex flex-col space-y-4">
          <span>{{ experience.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = [
  {
    company: 'BTTR',
    position: 'SOFTWARE DEVELOPER',
    date: '2022 - PRESENT',
  },
  {
    company: 'FREELANCE',
    position: 'DEVELOPER',
    date: '2019 - PRESENT',
  },
];
</script>