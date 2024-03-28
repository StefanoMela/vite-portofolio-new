<script>
import WorkCard from "../components/WorkCard.vue";

export default {
  components: { WorkCard },
};
</script>

<template>
  <div class="container mt-4">
      <div class="row row-cols-4 g-4 justify-content-center">
          <WorkCard v-for="i in 9"/>
      </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
