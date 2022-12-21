<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<template>
  <NavBar />
  <router-view class="md:mx-36"></router-view>
  <div id="wcb" class="carbonbadge wcb-d mt-20"></div>
</template>
