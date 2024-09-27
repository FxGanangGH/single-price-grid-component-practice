<template>
  <div class="rounded-b-lg bg-primary-cyan/80 p-5 md:p-8 lg:rounded-bl-none lg:p-10">
    <h1 class="font-karla text-lg text-white md:text-xl lg:text-2xl">Why Us</h1>
    <ul class="mt-3">
      <li
        v-for="pro in pros"
        :key="pro"
        class="font-karla text-sm font-extralight text-secondary-light-gray md:text-base lg:text-lg"
      >
        {{ pro }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const pros = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our GitHub repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];
</script>
