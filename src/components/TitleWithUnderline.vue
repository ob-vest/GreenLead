<template lang="">
  <div>
    <div class="flex flex-col justify-center items-center mb-3">
      <h1 class="text-center text-3xl">{{ title }}</h1>
      <img class="w-40" src="/public/underline.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
