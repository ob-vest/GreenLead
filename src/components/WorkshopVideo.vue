<template lang="">
  <div
    class="flex justify-start flex-col items-center md:items-start"
    :class="setOrder"
  >
    <video
      class="flex justify-center"
      width="320"
      height="540"
      controls
      preload="none"
    >
      <source :src="videoUrl" type="video/mp4" />
    </video>
    <div class="mx-3 flex flex-col max-w-2xl">
      <h1 class="text-center mb-3">{{ title }}</h1>
      <p class="text-gray-400 text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reverseOrder: Boolean,
    videoUrl: String,
    title: String,
    description: String,
  },
  computed: {
    setOrder: function () {
      console.log("adasdsad");
      return this.reverseOrder == true ? "md:flex-row-reverse" : "md:flex-row";
    },
  },
};
</script>
<style lang=""></style>
