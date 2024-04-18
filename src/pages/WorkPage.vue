<script>
import WorkCard from "../components/WorkCard.vue";
import { store } from "../data/store";

import { OhVueIcon } from "oh-vue-icons";

export default {
  data() {
    return {
      store,
      selectedFilter: "",
      filteredProjects: [],
      filters: false,
    };
  },
  components: { WorkCard, "v-icon": OhVueIcon },
  methods: {
    filterBy(technology) {
      this.filters = true;
      this.selectedFilter = technology;
      this.filteredProjects = this.store.projectList.filter((project) => {
        return project.techs.includes(technology);
      });
    },
  },
};
</script>

<template>
  <!-- work page -->
  <section class="works container py-5">
    <div class="link-container poppins-bold">
      <RouterLink :to="{ name: 'landing' }"> < Home / > </RouterLink>
    </div>
    <div class="title-wrapper mb-5">
      <h3 class="poppins-bold subtitle">Portfolio</h3>
      <h1>Check out some of my works</h1>
      <h5>A collection of my projects</h5>
    </div>
    <p class="text-center" for="filterSelect">Filter by technlogy</p>
    <div
      class="filter-wrapper d-flex justify-content-center align-items-center mt-3"
    >
      <v-icon
        @click="filterBy('HTML')"
        class="tool"
        name="vi-file-type-html"
        scale="3"
      />
      <v-icon
        @click="filterBy('CSS')"
        class="tool"
        name="vi-file-type-css"
        scale="3"
      />
      <v-icon
        @click="filterBy('JS')"
        class="tool"
        name="vi-file-type-js-official"
        scale="3"
      />
      <v-icon
        @click="filterBy('Vue')"
        class="tool"
        name="vi-file-type-vue"
        scale="3"
      />
      <img
        @click="filterBy('Laravel')"
        class="tool"
        src="../assets/img/stacks/laravel.svg"
        alt=""
      />
    </div>
    <!-- cards -->
    <div class="row mt-3 g-4" v-if="!filters">
      <WorkCard
        v-for="(project, index) in store.projectList"
        :key="index"
        :project="project"
      />
    </div>
    <div class="row mt-3 g-4" v-if="filters">
      <WorkCard
        v-for="(project, index) in this.filteredProjects"
        :key="index"
        :project="project"
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


.link-container {
  color: #cc0029;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;

  position: absolute;
  right: 0;
  margin: 1.5rem 0;
  rotate: -90deg;
  
}

.subtitle {
  color: #cc0029;
  font-size: 1.4rem;
  text-transform: uppercase;
}


.filter-wrapper {
  img {
    width: 57.59px;
  }

  gap: 2rem;

  * {
    cursor: pointer;
  }

  *:hover {
    scale: 1.5;
  }
}
</style>
