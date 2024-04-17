<script>
export default {
  props: {
    thumb: String,
    techs: String,
    brief: String,
    title: String,
  },
};
</script>

<template>
  <div class="col-3">
    <div class="card work-card rounded h-100">
        <div class="card-header p-4">
          <img :src="thumb" class="card-img-top mb-3" />
        </div>
        <div class="card-body">
          <h2 class="card-title poppins-bold subtitle">{{ title }}</h2>
          <h5 class="raleway-reg tcs">{{ techs }}</h5>
          <p class="card-text raleway-reg">{{ brief }}</p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

.subtitle {
  color: #cc0029;
  font-size: 1.4rem;

  margin: 0.5rem 0;
}
.tcs {
  font-weight: 600;
}
</style>
