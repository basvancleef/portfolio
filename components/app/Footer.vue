<template>
  <footer class="bg-extra-black text-white py-10 px-5 md:py-16 md:px-28">
    <div class="container mx-auto mb-16 flex flex-wrap items-center justify-center md:justify-between gap-6">
      <span class="text-6xl md:text-[200px] text-white font-medium">CONTACT</span>
      <a
          class="bg-white text-black font-medium rounded-[50px] text-lg md:text-2xl px-10 py-5"
          href="mailto:basvancleef@icloud.com"
      >
        CONTACT ME
      </a>
    </div>
    <div class="container mx-auto flex flex-wrap items-center justify-center md:justify-between gap-6">
      <div class="hidden space-x-10 md:flex">
        <div class="flex flex-col">
          <span class="card-subtitle">LOCAL TIME</span>
          <span class="card-title">{{ formattedTime }}</span>
        </div>
        <div class="flex flex-col">
          <span class="card-subtitle">LOCATION</span>
          <span class="card-title">Lienden, Netherlands</span>
        </div>
      </div>
      <div class="text-center md:text-left">
        <span>© 2025 Bas van Cleef. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentTime = ref(new Date());
const formattedTime = computed(() => currentTime.value.toLocaleTimeString());

let interval;

onMounted(() => {
  currentTime.value = new Date();

  interval = setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  // Clear the interval when the component is destroyed
  clearInterval(interval);
});
</script>