<script>
import WorkCard from "../components/WorkCard.vue";

export default {
  components: { WorkCard },
};
</script>

<template>
  <!-- work page -->
  <div id="works" class="container-fluid">

    <div class="row g-4 justify-content-center">
      <WorkCard v-for="i in 9" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#works {
  height: 100%;
  width: 100%;

  padding: 3rem;

  background: url("../assets/img/stars-bg.jpeg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
}

</style>
