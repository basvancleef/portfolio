<template>
  <Icon
      :name="name"
      :class="{
      'size-2': size === 'tiny',
      'size-3': size === 'extra-small',
      'size-3.5': size === 'smaller',
      'size-4': size === 'small',
      'size-6': size === 'medium',
      'size-8': size === 'large',
    }"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  size?: 'large' | 'medium' | 'small' | 'smaller' | 'extra-small' | 'tiny'
}>(), {
  size: 'medium',
});
</script>