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
    <h1>Vi mindsker besværet med forandringer for din virksomhed.</h1>
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
