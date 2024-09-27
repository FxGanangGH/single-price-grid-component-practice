<template>
  <main
    class="grid size-full min-h-screen select-none place-items-center bg-secondary-light-gray px-8 py-10"
  >
    <div
      class="grid w-full max-w-80 auto-rows-auto grid-cols-1 drop-shadow-xl md:max-w-96 lg:w-10/12 lg:max-w-screen-md lg:grid-cols-2 lg:drop-shadow-2xl"
    >
      <SinglePriceWelcoming class="lg:col-span-2" />
      <SinglePriceSignUp />
      <SinglePricePros />
    </div>
  </main>
</template>

<script setup>
import SinglePriceWelcoming from "./components/SinglePriceWelcoming.vue";
import SinglePriceSignUp from "./components/SinglePriceSignUp.vue";
import SinglePricePros from "./components/SinglePricePros.vue";
</script>
