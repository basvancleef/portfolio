<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-6xl md:text-[200px] font-bold text-extra-black">TESTI<wbr>MONIALS</h1>
      <div class="md:flex md:space-x-10">
        <UiTestimonial
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :company="testimonial.company"
          :job-title="testimonial.jobTitle"
          :text="testimonial.text"
          :image="testimonial.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Peter van Aalderen',
    company: 'BTTR',
    jobTitle: 'Partner',
    text: 'Bas is ontzettend gedreven om zichzelf te ontwikkelen. Hij heeft een gezonde werkhouding en is niet bang om nieuwe dingen te proberen. Binnen zijn werk is hij secuur en heeft hij oog voor detail. Daarnaast (en misschien wel het belangrijkst) is Bas een hele gezellige collega! Wist je bijvoorbeeld dat hij een aardig nootje kan zingen?',
    image: 'bttr-peter.png',
  },
  {
    name: 'Tim Jongste',
    company: 'BTTR',
    jobTitle: 'Teamlead Development & Operations',
    text: 'Bas is een fijne collega met een sterke werkethiek en een positieve instelling. Hij werkt goed samen, draagt bij aan een goede teamsfeer, en staat open voor ontwikkeling. Naast zijn werk heeft hij zijn propedeuse behaald, wat zijn focus en discipline benadrukt. Zijn vermogen om werk en studie te combineren en zijn bereidheid om te helpen, maken hem een waardevolle kracht met veel potentie.',
    image: 'bttr-tim.png',
  },
  {
    name: 'Rik Nijdeken',
    company: 'BTTR',
    jobTitle: 'Full Stack Developer',
    text: 'Ik heb Bas leren kennen als zijn stagebegeleider en later als directe collega binnen ons development team. In die jaren heb ik hem zien groeien van een beginnend developer tot een vakkundige professional. Zijn leergierigheid en positieve energie maken hem niet alleen een sterke developer, maar ook een gewaardeerde teamspeler die elk project en team naar een hoger niveau tilt.',
    image: 'bttr-rik.png',
  },
]
</script>