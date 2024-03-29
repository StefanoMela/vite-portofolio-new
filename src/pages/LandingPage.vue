<script>
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import AnimatedComponent from "../components/AnimatedComponent.vue";


export default {
  data(){
    return{
      isClicked: false,
    }
  },
  components: {
    HeroComponent,AboutComponent, AnimatedComponent
  },
};
</script>

<template>

    <AnimatedComponent style="position: absolute;"/>
    <HeroComponent @isClicked="isClicked = true"/>
    <AboutComponent v-if="isClicked"/>

</template>

<style lang="scss" scoped>
</style>