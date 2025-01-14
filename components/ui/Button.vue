<template>
  <component
      :is="to ? NuxtLink : 'button'"
      class="box-border inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl p-3.5 text-sm font-medium leading-none no-underline transition disabled:cursor-not-allowed disabled:opacity-30 disabled:saturate-0 print:hidden"
      :class="[
      ['submit', 'square'].includes(variant) ? colorVariants['primary'] : colorVariants[variant],
      {'pb-4' : variant === 'primary'},
      {'size-11 !p-0' : variant === 'square'},
      {'opacity-30 saturate-0' : disabled},
    ]"
      :disabled="disabled || loading ? 'disabled' : undefined"
      :to="to"
      :type="type === 'submit' ? 'submit' : 'button'"
  >
    <UiIcon
        v-if="prefixIcon"
        :name="prefixIcon"
        :size="iconSize"
        :class="{'text-secondary' : variant !== 'outline'}"
    />
    <span v-if="label">
      {{ label }}
    </span>
    <UiIcon
        v-if="icon"
        :name="icon"
        :size="iconSize"
        :class="{'text-secondary' : variant !== 'outline'}"
    />
    <UiIcon
        v-if="loading"
        :size="iconSize"
        name="svg-spinners:ring-resize"
    />
  </component>
</template>

<script lang="ts" setup>
import {NuxtLink} from '#components';
import type {RouteLocationRaw} from 'vue-router';

const colorVariants = {
  primary: `bg-extra-black text-white border-x border-extra-black`,
  secondary: `bg-secondary text-white border-x border-secondary-700`,
  outline: `bg-transparent text-extra-black border border-extra-black`,
};

withDefaults(defineProps<{
  disabled?: boolean
  icon?: string
  prefixIcon?: string
  label?: string
  loading?: boolean
  iconSize?: 'tiny' | 'small' | 'smaller' | 'medium' | 'large'
  to?: RouteLocationRaw,
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'submit' | 'button'
}>(), {
  disabled: false,
  icon: undefined,
  iconSize: 'smaller',
  label: undefined,
  loading: false,
  prefixIcon: undefined,
  prefixIconSize: 'small',
  to: undefined,
  variant: 'primary',
  type: 'button',
});
</script>