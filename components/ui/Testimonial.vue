<template>
  <div class="max-w-md flex flex-col justify-between p-4">
    <p class="text-gray-800">"{{ text }}"</p>

    <div class="flex items-center mt-4">
      <img
          :src="image"
          :alt="`Image of ${name} from ${company}`"
          class="w-12 h-12 rounded-full"
      />

      <div class="ml-4">
        <p class="font-semibold text-gray-900">{{ name }}</p>
        <p class="text-sm text-gray-500">{{ jobTitle }} @ {{ company }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  text: string
  jobTitle: string
  company: string
  image: string
}>();
</script>