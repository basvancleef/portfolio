<template>
  <div class="flex flex-col">
    <span class="card-title mb-4" :class="`text-${color}`">FOLLOW ME</span>
    <div class="flex flex-row gap-x-2">
      <NuxtLink
          to="https://www.linkedin.com/in/bas-van-cleef/"
          target="_blank"
      >
        <SocialsLinkedIn :class="`text-${color}`" class="size-8"/>
      </NuxtLink>
      <NuxtLink
          to="https://www.facebook.com/people/Bas-van-Cleef/pfbid034qxENjVmadmo87fFLPmWDLbxPHJuoMxMdEu1PiJW7kuiCiVgwGpR1Uk65KC3z5QEl/"
          target="_blank"
      >
        <SocialsFacebook :class="`text-${color}`" class="size-8"/>
      </NuxtLink>
      <NuxtLink
          to="https://www.instagram.com/basvancleef/"
          target="_blank"
      >
        <SocialsInstagram :class="`text-${color}`" class="size-8"/>
      </NuxtLink>
      <NuxtLink
          to="https://github.com/basvancleef?tab=repositories&q=&type=&language=&sort=name"
          target="_blank"
      >
        <SocialsGithub :class="`text-${color}`" class="size-8"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: 'extra-black' | 'white',
});
</script>
