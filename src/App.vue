<script setup>
import DescriptionBlock from "./components/DescriptionBlock.vue";
import NavBar from "./components/NavBar.vue";
import GetInTouchButton from "./components/GetInTouchButton.vue";
</script>

<template>
  <NavBar />
  <div
    class="h-96 bg-cover bg-bottom bg-[url('../public/heroimage.webp')] flex justify-center items-center flex-col"
  >
    <h1>We lessen the hardship of your change</h1>
    <p class="text-center mt-3 opacity-60 max-w-md">
      Our mission is to make your team collaboration more efficient and help you
      well on your way with the green transition.
    </p>
    <GetInTouchButton />
  </div>

  <DescriptionBlock image-url="background.webp" />
</template>
