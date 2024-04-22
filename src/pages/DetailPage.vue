<script>
import WorkCard from "../components/WorkCard.vue";
import { store } from "../data/store.js";

import { Flip } from "gsap/Flip";

export default {
  data() {
    return {
      store,
      detailList: [],
      project: {},
      modal: {
        isOpen: false,
        image: "",
      },
    };
  },
  components: { WorkCard },

  methods: {
    fetchProjects() {
      store.projectList.forEach((project) => {
        if (project.slug === this.$route.params.slug) {
          this.project = project;
        }
      });
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>

<template>
  <section class="project-detail container">
    <div class="row g-3">
      <h2 class="card-title poppins-bold subtitle text-center my-3">
        {{ project.title }}
      </h2>
      <div class="col gallery">
        <div class="img-container">
          <img :src="project.thumb" class="card-img-top border" />
        </div>
        <div class="gallery_thumbs" v-if="project.gallery">
          <div
            class="gallery_item"
            v-for="(galleryPic, index) in project.gallery"
            :key="index"
          >
            <img :src="galleryPic" class="gallery_img" alt="" />
          </div>
        </div>
        <div class="modal" v-if="modal.isOpen" @click="closeModal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <img :src="modal.image" class="modal-img" alt="" />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card-body">
          <div class="tech-container">
            <h5 class="poppins-bold subtitle-sm">Technology:</h5>
            <h6
              class="raleway-reg tcs"
              v-for="(tech, index) in project.techs"
              :key="index"
            >
              {{ tech }}
            </h6>
          </div>
          <div class="project-about">
            <h5 class="poppins-bold subtitle-sm">About:</h5>
            <p class="card-text raleway-reg">{{ project.brief }}</p>
          </div>
        </div>
      </div>
      <div class="link-container poppins-bold text-center mt-5">
        <RouterLink :to="{ name: 'works' }"> < Works / > </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-detail {
  padding: 3rem;
}

.project-detail_main {
  display: flex;
}

.card-body {
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 1rem;
}

.link-container {
  color: #cc0029;
}

.gallery_thumbs {
  margin-top: 1rem;
  max-width: 350px;

  display: flex;

  .gallery_img {
    max-width: 100%;

    margin: 0 1rem;
  }
}
</style>
