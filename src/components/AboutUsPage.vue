<template lang="">
  <div class="flex flex-col justify-center text-center">
    <h1>Hvem er GreenLead</h1>
    <p class="text-left mt-10">
      GreenLead er et rådgivningshus med erhvervskonsulenter, med erfaring med
      grøn omstilling, teknologier som vandkraft, sol og vind, projektudvikling,
      energisystemer og drift af forsyningsvirksomheder. Vi har arbejdet sammen
      på kryds og tværs af et hav af projekter i spædingsfeltet imellem vores
      kompetencefelt og vi supplerer hinanden rigtig godt. Det håber vi at vi
      kan nyttiggøre for dig og din virksomhed Virksomheden bygger på en
      filosofi som lægger vægt på tilid, bæredygtighed, ordentlighed, og
      resultater som opnås igennem relationer og struktur.
    </p>
    <div class="grid md:grid-cols-3 justify-center">
      <AboutUsPortrait
        name="Claus Andersen-Aagaard"
        imgURL="about/claus.webp"
      />
      <AboutUsPortrait name="Morten Sand Knudsen" imgURL="about/morten.webp" />
      <AboutUsPortrait name="Kenneth Nyland" imgURL="about/kenneth.webp" />
    </div>
  </div>
</template>
<script>
import AboutUsPortrait from "./AboutUsPortrait.vue";
export default {
  components: { AboutUsPortrait },
};
</script>
<style lang=""></style>
