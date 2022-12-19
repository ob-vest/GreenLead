<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <img class="" src="./assets/background.webp" alt="" />
  </div>
  <section class="flex flex-row m-20 justify-center">
    <aside class="mr-5">
      <img
        class="w-80 h-52 object-cover rounded-lg"
        src="./assets/background.webp"
        alt=""
      />
    </aside>
    <div class="w-1/2">
      <h1 class="text-center underline text-3xl mb-3">What we do</h1>
      <p>
        GreenLead is a company that specializes in making green visions a
        reality, partly in cooperation with investors and also in cooperation
        with the industry in the transition to green energy. GreenLead advises
        on renewable energy systems - We have a large portfolio of projects and
        a broad network of investors - we often work in the empty space between
        financing and the project. We specialize in designing green projects and
        describing the project to investors as well as finding the right
        projects for the right investor. This means making the green transition
        a reality.
      </p>
    </div>
  </section>
  <HelloWorld msg="Vite + Vue" />
</template>
