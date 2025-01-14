<template>
  <div class="flex items-center justify-between h-screen bg-secondary md:h-min md:px-36 md:py-28">
    <div class="hidden md:flex md:flex-col">
      <div class="text-left">
        <h1 class="text-3xl font-bold text-extra-black">IK BEN BAS,</h1>
        <h2 class="text-5xl font-extrabold text-extra-black mt-2">GEWOON BAS.</h2>
        <p class="text-lg text-extra-black mt-4">
          <span class="font-semibold">Software Developer</span> based in
          <span class="font-semibold">Lienden, Netherlands</span>
        </p>
      </div>
      <div class="mt-8 flex space-x-4">
        <UiSocials color="extra-black"/>
      </div>
    </div>
    <div class="mt-8">
      <img
          src="~/assets/images/bas-van-cleef.jpg"
          alt="Bas"
          class="rounded-lg h-80 object-cover md:h-full"
      />
      <div class="flex flex-col mt-5 md:hidden">
        <h1 class="text-3xl font-bold text-extra-black">BAS VAN CLEEF</h1>
        <h2 class="text-extra-gray">Software Developer</h2>
      </div>
      <div class="flex items-center space-x-6 mt-10 md:hidden">
        <UiButton to="#about" class="w-full" label="ABOUT ME" variant="primary"/>
        <a href="/BasvanCleef_CV.pdf" download class="w-full underline">RESUME</a>
      </div>
    </div>
  </div>
</template>