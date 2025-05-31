<template>
<!--  <NuxtLayout>-->
    <NuxtPage />
<!--  </NuxtLayout>-->
</template>

<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Bas van Cleef` : 'Bas van Cleef - Software Developer',
});
</script>
