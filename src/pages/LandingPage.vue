<script>
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";

export default {
  data(){
    return{
      isClicked: false
    }
  },
  components: {
    HeroComponent,AboutComponent
  },
};
</script>

<template>
  <HeroComponent @isClicked="isClicked = true"/>
  <AboutComponent v-if="isClicked"/>
</template>

<style lang="scss" scoped>
</style>
