<template>
  <div class="grid md:grid-cols-2">
    <div>
      <div class="flex items-center">
        <span class="w-2.5 h-2.5 bg-extra-black rounded-full block mr-2" />
        <h6>ABOUT ME</h6>
      </div>
      <h2 class="text-4xl font-bold text-extra-black">BAS VAN CLEEF</h2>
      <p class="text-lg mt-4">
        Als 19-jarige ben ik <strong>enthousiast</strong>, <strong>proactief</strong> en <strong>ondernemend</strong>. Ik ben een <strong>doorzetter</strong> en werk <strong>doelgericht</strong> om betrouwbare oplossingen te bieden. Ik ben vastberaden om mijn kennis en vaardigheden verder te ontwikkelen en nieuwe uitdagingen aan te gaan.
        <br><br>
        Ik ben een deeltijdstudent aan de Avans Hogeschool in Breda en volg de opleiding HBO Informatica. Ik ben geïnteresseerd in het ontwerpen en bouwen van digitale producten en het verder helpen van mensen.
        <br><br>
      </p>
      <a href="/BasvanCleef_CV.pdf" download class="underline">DOWNLOAD CV</a>
    </div>
    <div class="grid grid-cols-2 gap-4 place-content-around p-4 mx-auto">
      <div class="bg-extra-purple flex flex-col justify-between w-40 h-40 rounded-2xl p-4">
        <div class="flex items-center">
          <span class="font-bold text-5xl">2</span>
          <span class="font-bold text-3xl">+</span>
        </div>
        <div class="flex flex-col">
          <span class="card-subtitle">YEARS OF</span>
          <span class="card-title">EXPERIENCE</span>
        </div>
      </div>
      <div class="bg-extra-green flex flex-col justify-between w-40 h-40 rounded-2xl p-4">
        <SocialsSpotify/>
        <div class="flex flex-col">
          <span class="card-subtitle">LISTENING TO</span>
          <span class="card-title">ROWWEN HÈZE</span>
        </div>
      </div>
      <div class="bg-extra-yellow flex flex-col justify-between w-40 h-40 rounded-2xl p-4">
        <UiIcon name="heroicons:star" class="!size-12"/>
        <div class="flex flex-col">
          <span class="card-subtitle">FAVOURITE DRINK</span>
          <span class="card-title">HERTOG JAN</span>
        </div>
      </div>
      <div class="bg-extra-blue flex flex-col justify-between w-40 h-40 rounded-2xl p-4">
        <UiIcon name="heroicons:building-office" class="!size-12"/>
        <div class="flex flex-col">
          <span class="card-subtitle">WORKING AT</span>
          <span class="card-title">BTTR</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>