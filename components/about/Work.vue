<template>
  <div>
    <div>
      <div class="flex items-center">
        <span class="w-2.5 h-2.5 bg-extra-black rounded-full block mr-2"/>
        <h6>WORK</h6>
      </div>
      <h2 class="text-4xl font-bold text-extra-black">PROJECTS</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-14 mt-4">
        <UiProject
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Project 1',
    stack: 'Laravel / Nuxt / TailwindCSS',
    image: 'project1.jpg',
    url: 'https://google.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Project 2',
    stack: 'Laravel / Nuxt / TailwindCSS',
    image: 'project2.jpg',
    url: 'https://google.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Project 3',
    stack: 'Laravel / Nuxt / TailwindCSS',
    image: 'project3.jpg',
    url: 'https://google.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Project 4',
    stack: 'Laravel / Nuxt / TailwindCSS',
    image: 'project4.jpg',
    url: 'https://google.com',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Project 5',
    stack: 'Laravel / Nuxt / TailwindCSS',
    image: 'project5.jpg',
    url: 'https://google.com',
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Project 6',
    stack: 'Laravel / Nuxt / TailwindCSS',
    image: 'project6.jpg',
    url: 'https://google.com',
    github: 'https://github.com',
  }
];
</script>