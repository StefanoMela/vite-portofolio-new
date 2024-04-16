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
  <section class="works container">
    <div class="title-wrapper mb-5">
      <h3 class="poppins-bold subtitle my-2">Portfolio</h3>
      <h1>Check out some of my works</h1>
      <p>A collection of my best projects until now</p>
    </div>
    <div class="row g-4">
      <WorkCard v-for="(comic, index) in store.comicsList"
      :key="index"
      :thumb="comic.thumb"
      :techs="comic.techs"
      :brief="comic.brief"
      :title="comic.title" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title-wrapper {
  text-align: center;

  h1 {
    margin: 1rem 0;
  }

  h3{
    
  }
}

.subtitle {
  color: #cc0029;
  font-size: 1.4rem;
  text-transform: uppercase;

  margin: 0.5rem 0;
}
</style>
