<template>
  <div>
    <div class="container mx-auto">
      <Analytics/>

      <!--    <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans">-->
      <!--      <img src="/Logo.png" alt="Bas van Cleef Logo" class="h-12 mb-8"/>-->
      <!--      <p class="text-center text-2xl max-w-2xl">-->
      <!--        Ik ben achter de schermen de website nog even aan het finetunen. Zin in een frisse website of gewoon even-->
      <!--        sparren?-->
      <!--        Stuur me een mailtje op-->
      <!--        <a href="mailto:hi@basvancleef.nl" class="underline text-white hover:text-orange-400">-->
      <!--          hi@basvancleef.nl-->
      <!--        </a>-->
      <!--      </p>-->
      <!--    </div>-->

      <div id="home">
        <AboutHero/>
      </div>

      <div id="about">
        <AboutImageSlider/>
        <AboutIntroduction/>
      </div>

      <div id="skills" class="space-y-[6vw] h-screen my-[6vw]">
        <AboutSkills/>
        <AboutExperience/>
      </div>

      <!--      <div id="work" class="md:h-screen">-->
      <!--        <AboutWork/>-->
      <!--      </div>-->

      <div id="contact">
        <AboutTestimonials/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Analytics} from '@vercel/analytics/nuxt'
</script>
