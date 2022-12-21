<script>
import DescriptionBlock from "./DescriptionBlock.vue";
import GetInTouchButton from "./GetInTouchButton.vue";
export default {
  components: { DescriptionBlock, GetInTouchButton },
};
</script>

<template>
  <div
    class="h-96 bg-cover bg-bottom bg-[url('/heroimage.webp')] flex justify-center items-center flex-col"
  >
    <div class="text-xl md:text-2xl font-bold">
      <div class="flex flex-row">
        <h1>Vi mindsker besværet med</h1>
        <div class="relative mx-2 w-32 md:w-40">
          <h1 class="w-16">forandringer</h1>
          <img class="absolute -top-6 -left-4" src="circledrawing.svg" alt="" />
        </div>
      </div>

      <h1 class="mt-2">for din virksomhed.</h1>
    </div>

    <p class="text-center mt-3 opacity-60 max-w-md">
      Vores mission er at gøre dit teamsamarbejde mere effektivt og hjælpe dig
      godt på vej med den grønne omstilling.
    </p>
    <GetInTouchButton />
  </div>

  <DescriptionBlock
    :reverseOrder="false"
    title="Hvad vi laver"
    image-url="background.webp"
  />
  <DescriptionBlock
    :reverseOrder="true"
    title="Hvem det er for"
    image-url="background.webp"
  />
  <DescriptionBlock
    :reverseOrder="false"
    title="Proces og resultater"
    image-url="background.webp"
  />
</template>
