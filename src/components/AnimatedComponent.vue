<script>
import gsap from "gsap";

export default {
  data() {
    return {
        tl: null,
        ctx: null
    };
  },
  methods: {
    animateCloud() {
    this.ctx = gsap.context((self)=>{
        const animatedEl = self.selector('.cloud');
        this.tl = gsap.timeline({ repeat: -1})
        .fromTo(animatedEl[0], {x: -100, y: Math.random() * window.innerHeight, scale: Math.random() * (1.5 - 1) + 1, opacity: 0.5}, { x: window.innerWidth, duration: 20, ease: "none"})
        .fromTo(animatedEl[1], {x: -100, y: Math.random() * window.innerHeight, scale: Math.random() * (1.5 - 1) + 1, opacity: 0.5}, { x: window.innerWidth, duration: 20, ease: "none"})
        .fromTo(animatedEl[2], {x: -100, y: Math.random() * window.innerHeight, scale: Math.random() * (1.5 - 1) + 1, opacity: 0.5}, { x: window.innerWidth, duration: 20, ease: "none"})
        .fromTo(animatedEl[3], {x: -100, y: Math.random() * window.innerHeight, scale: Math.random() * (1.5 - 1) + 1, opacity: 0.5}, { x: window.innerWidth, duration: 20, ease: "none"})
    }, this.$refs.scene)
    },
  },

  mounted() {
    this.animateCloud()
  }
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
.cloud {
  max-width: 20%;
}
</style>
