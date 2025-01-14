<template>
  <header class="absolute w-full z-50">
    <div class="container mx-auto flex items-center justify-between p-8">
      <img src="~/assets/images/logo.png" alt="Logo">

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <NuxtLink
            v-for="item in menu"
            :key="item.slug"
            :to="item.slug"
            to="/"
            class="text-lg text-extra-black"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <button
          class="md:hidden flex items-center text-white justify-center size-16 bg-extra-black rounded-full"
          @click="toggleMenu"
      >
        <UiIcon name="heroicons:bars-2" size="large"/>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
        v-if="menuOpen"
        class="fixed inset-0 bg-extra-black text-white py-16 px-12 item flex flex-col justify-between max-sm:pt-10"
    >
      <button
          class="absolute top-8 right-8 size-16 text-extra-black bg-white flex items-center justify-center rounded-full"
          @click="toggleMenu"
      >
        <UiIcon name="heroicons:x-mark" size="large"/>
      </button>

      <!-- Mobile Navigation -->
      <div class="flex flex-col pt-24">
        <span class="card-title mb-4">NAVIGATION</span>
        <div class="flex flex-col space-y-6">
          <NuxtLink
              v-for="item in menu"
              :key="item.slug"
              :to="item.slug"
              class="text-3xl uppercase text-[48px]"
              @click="toggleMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>

      <UiSocials color="white"/>
    </div>
  </header>
</template>

<script setup lang="ts">
const menu = [
  {
    name: 'home',
    slug: '/',
  },
  {
    name: 'about',
    slug: '#about',
  },
  {
    name: 'skills',
    slug: '#skills',
  },
  {
    name: 'work',
    slug: '#work',
  },
  {
    name: 'contact',
    slug: '#contact',
  },
];

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
