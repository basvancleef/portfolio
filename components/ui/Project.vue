<template>
  <div>
    <div class="h-[250px] w-full bg-gray-300 rounded-lg"></div>

    <div class="flex justify-between items-center py-4">
      <div>
        <h2 class="text-lg font-semibold text-extra-black mb-2">{{ project.title }}</h2>
        <p class="text-sm text-extra-gray">{{ project.stack }}</p>
      </div>

      <div class="flex space-x-2">
        <NuxtLink :to="project.url">
          <LinkExternal class="text-extra-black size-6"/>
        </NuxtLink>
        <NuxtLink :to="project.github">
          <SocialsGithub class="text-extra-black size-6"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    id: number;
    title: string;
    stack: string;
    image: string;
    url: string;
    github: string;
  };
}>();
</script>