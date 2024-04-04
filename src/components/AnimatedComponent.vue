<script>
import gsap from "gsap";

export default {
  data() {
    return {
      tl: null,
      ctx: null,
    };
  },
  methods: {
    animateCloud() {
    this.ctx = gsap.context((self)=>{
        const animatedEl = self.selector('.cloud');
        this.tl = gsap.timeline({repeat: -1})
        .fromTo(animatedEl[0], {x: "random(-1, 1)", y: "random(-10, 150, 3)", opacity: 0.5}, {x: window.innerWidth, y: "random(-1, 100, 2)", duration: 18, ease: "none"})
        .fromTo(animatedEl[1], {x: "random(-1, 1)", y: "random(-10, 150, 3)", opacity: 0.5}, {x: window.innerWidth, y: "random(-1, 200, 2)", duration: 16, ease: "none"}, "<")
        .fromTo(animatedEl[2], {x: "random(-1, 1)", y: "random(-10, 150, 3)", opacity: 0.5}, {x: window.innerWidth, y: "random(-1, 300, 2)", duration: 14, ease: "none"}, "<")
        .fromTo(animatedEl[3], {x: "random(-1, 1)", y: "random(-10, 150, 3)", opacity: 0.5}, {x: window.innerWidth, y: "random(-1, 400, 2)", duration: 12, ease: "none"}, "<")
        .fromTo(animatedEl[4], {x: "random(-1, 1)", y: "random(-10, 150, 3)", opacity: 0.5}, {x: window.innerWidth, y: "random(-1, 500, 2)", duration: 10, ease: "none"}, "<")
    }, this.$refs.scene)
    },
  },

  mounted() {
    this.animateCloud();
  },
};
</script>

<template>
  <div class="images" ref="scene">
    <img src="../assets/img/clouds/cloud-02.png" class="cloud" alt="" />
    <img src="../assets/img/clouds/cloud-02.png" class="cloud" alt="" />
    <img src="../assets/img/clouds/cloud-02.png" class="cloud" alt="" />
    <img src="../assets/img/clouds/cloud-02.png" class="cloud" alt="" />
    <img src="../assets/img/clouds/cloud-02.png" class="cloud" alt="" />
  </div>
</template>

<style lang="scss" scoped>

.images{
  width: 100%;
}

.cloud {
  max-width: 20%;
}
</style>
