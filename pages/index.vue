<template>
  <div class="p-5">
    <div class="container mx-auto">
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

      <div id="work" class="md:h-screen">
        <AboutWork/>
      </div>

      <div id="contact">
        <AboutTestimonials/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
