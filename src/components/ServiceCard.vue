<template lang="">
  <div>
    <div
      class="w-72 h-40 bg-[url('/heroimage.webp')] rounded-md flex flex-col justify-between text-center"
    >
      <h1 class="mt-5">{{ title }}</h1>

      <p class="text-gray-300 text-xs mb-3">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>
<style lang=""></style>
