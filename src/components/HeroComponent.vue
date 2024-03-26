<script>
import gsap from "gsap";

import { OhVueIcon } from "oh-vue-icons";

export default {
  data() {
    return {
      tl: null,
      ctx: null,
      isClicked: false,
    };
  },
  components: {
    "v-icon": OhVueIcon,
  },
  methods: {
    toggleTimeline() {
      this.tl.reversed(!this.tl.reversed());
    },
  },
  mounted() {
    this.ctx = gsap.context((self) => {
      const elements = self.selector(".animated-el");
      this.tl = gsap
        .timeline()
        .from(elements[0], { y: -700 })
        .from(elements[1], { y: -450, stagger: 0.05 })
        .from(elements[2], { y: -500, stagger: 0.05 })
        .from(elements[3], { y: -550, stagger: 0.05 })
        .from(elements[4], { y: -600, stagger: 0.05 })
        .reverse();
    }, this.$refs.main);
  },
  beforeUnmount() {
    this.ctx.revert();
  },
};
</script>

<template>
  <!-- Main Section w/ animation -->
  <section class="main wrapper">
    <div class="link-container">
      <a href="">about</a>
      <a href="">contact</a>
      <a href="">works</a>
    </div>
    <div class="container-fluid animation-box mt-3 px-5 py-3" @mouseenter="toggleTimeline" >
      <div class="hero"  ref="main">
        <div class=" animated-el img-container" key="k1"></div>
        <div class="txt-container" key="k2">
          <h1 class="animated-el" >Hello ! <br /></h1>
          <h2 class="animated-el" >I'm Stefano Mela</h2>
          <h3 class="animated-el" >A Jr Full Stack Web Developer</h3>
        </div>
        <!-- Scroll Button -->
        <div class="animated-el scroll-btn" cursor="pointer" key="k3">
          <a href="#about">
            <v-icon
              @click="$emit('isClicked')"
              name="fa-regular-hand-point-down"
              scale="2.5"
              animation="float"
              speed="fast"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}

.link-container {
  position: absolute;
  right: 0;
  a {
    margin: 0 1rem;
  }
}

.animation-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}
.img-container {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}

.scroll-btn{
  position: absolute;
  transform: translateY(150px);
}
</style>
