<script>
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";

export default {
  components: {
    AboutComponent,
    HeroComponent,
  },
};
</script>

<template>
  <HeroComponent />
  <AboutComponent />
</template>

<style lang="scss" scoped></style>
