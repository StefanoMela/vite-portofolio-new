<script>
import WorkCard from "../components/WorkCard.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  components: { WorkCard },
};
</script>

<template>
  <!-- work page -->
  <section class="works container py-5">
    <div class="title-wrapper">
      <h3 class="poppins-bold subtitle">Portfolio</h3>
      <h1>Check out some of my works</h1>
      <p>A collection of my best projects until now</p>
    </div>
    <!-- cards -->
    <div class="row mt-3 g-4">
      <WorkCard
        v-for="(project, index) in store.projectList"
        :key="index"
        :project=project
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title-wrapper {
  text-align: center;

  h1 {
    margin: 1rem 0;
  }
}

.subtitle {
  color: #cc0029;
  font-size: 1.4rem;
  text-transform: uppercase;
}
</style>
