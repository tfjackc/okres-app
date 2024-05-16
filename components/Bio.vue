<template>
<div class="flex flex-row my-15">
    <div class="w-1/2">
      <NuxtImg
          src="headshot.jpg"
          sizes="100vw sm:75vw md:300px"
          class="custom-rounded"></NuxtImg>
    </div>
  <div class="w-1/2 flex flex-col items-center justify-center">
    <div class="mb-5 flex flex row items-center">
        <div class="text-3xl text-center font-bold">Tulsa, Oklahoma</div>
        <NuxtImg
          class="mx-5 custom-rounded"
          src="tulsa-flag.jpg"
          height="70"
          width="auto"
          :style="{ height: '70px', width: 'auto' }"
          :modifiers="{ roundCorner: '0:500' }"
        />
    </div>
    <div class="text-2xl text-center font-bold text-slate-600 mb-3 font-sans">12+ Years of Industry Experience</div>
    <p class="text-center font-sans text-xl">Graduated in the fall of 2013 from The University of Tulsa with a Bachelor of Science degree in Petroleum Engineering. Paige is intimately familiar with the complexities of the oil and gas industry, being raised in a family that has owned, drilled, and operated wells in Oklahoma for multiple generations. Paige specializes in oil & gas asset evaluations, economic analysis, and reserve forecasting.</p>
  </div>
  </div>
</template>

<style scoped>
.custom-rounded {
  border-radius: 10px; /* Adjust the value as needed */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>