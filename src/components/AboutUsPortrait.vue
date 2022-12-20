<template lang="">
  <div class="w-40 bg-primary rounded-md m-10">
    <img class="rounded-md" :src="imgURL" alt="" />
    <h1 class="h-16 justify-center flex flex-col">{{ name }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    imgURL: String,
  },
};
</script>
<style lang=""></style>
