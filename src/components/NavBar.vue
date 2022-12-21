<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-6 z-50">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link
          to="/"
          tag="button"
          class="font-semibold text-xl tracking-tight"
          >GreenLead</router-link
        >
      </div>
      <div class="block lg:hidden">
        <button
          @click="isMobileNavItemVisible = !isMobileNavItemVisible"
          class="flex items-center px-3 py-2 border rounded text-white hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full hidden flex-grow lg:flex lg:items-end lg:w-auto flex-col-reverse"
      >
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/services"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary mr-4 hover:animate-pulse"
            >Services</router-link
          >
          <router-link
            to="/workshop"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary mr-4 hover:animate-pulse"
            >Workshop</router-link
          >
          <router-link
            to="/"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary mr-4 hover:animate-pulse"
            >Cases</router-link
          >
          <router-link
            to="/about"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary mr-4 hover:animate-pulse"
            >Om Os</router-link
          >
        </div>
      </div>
      <!-- MOBILE NAV BAR -->
      <div
        v-if="isMobileNavItemVisible"
        class="w-full block lg:hidden flex-grow"
      >
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/services"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >Services</router-link
          >
          <router-link
            to="/workshop"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >Workshop</router-link
          >
          <router-link
            to="/"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >Cases</router-link
          >
          <router-link
            to="/about"
            tag="button"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >Om Os</router-link
          >
        </div>
      </div>
      <!-- MOBILE NAV BAR END -->
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobileNavItemVisible: false,
    };
  },
};
</script>
<style></style>
