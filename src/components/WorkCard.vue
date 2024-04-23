<script>
export default {
  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col-3">
    <div class="card border-0 work-card h-100">
      <div class="head">
        <img :src="project.thumb" class="card-img-top mb-3" />
      </div>
      <div class="card-body">
        <h2 class="card-title poppins-bold subtitle">{{ project.title }}</h2>
        <span
          class="raleway-reg tcs"
          v-for="(tech, index) in project.techs"
          :key="index"
        >
          {{ tech + ` ` }}
        </span>
      </div>
      <div class="card-footer border-0" v-if="!isDetail">
        <RouterLink
          class="button raleway-reg"
          :to="{
            name: 'project-detail',
            params: {
              slug: project.slug,
            },
          }"
        >
          Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-top-left-radius: 6px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 10px;

  box-shadow: 12px -5px 3px #00000064;
  .head {
    background-color: transparent;

    img {
      height: 100%;
    }
  }
}

.button {
  display: inline-block;
  border: 1px solid black;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 700;

  margin: 0.5rem 0;
  padding: 0.5rem;

  border-radius: 0.3rem;
}
</style>
