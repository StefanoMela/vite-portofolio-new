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
    animateTitle() {
      this.ctx = gsap.context((self) => {
        const elements = self.selector(".animated-el");
        this.tl = gsap
          .timeline()
          .from(elements[0], { y: -700, duration: 0.8, ease: "bounce.out" })
          .from(elements[1], {
            y: -450,
            duration: 0.8,
            ease: "power2.inOut",
          })
          .from(elements[2], {
            y: -500,
            duration: 0.8,
            ease: "power2.inOut",
          })
          .from(elements[3], {
            y: -550,
            duration: 0.8,
            ease: "power2.inOut",
          })
          .from(elements[4], {
            y: -600,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.inOut",
          })
          .reverse();
      }, this.$refs.scene);
    },
  },
  mounted() {
    this.animateTitle();
  },
  beforeUnmount() {
    this.ctx.revert();
  },
};
</script>

<template>
  <!-- Main Section w/ animation -->
  <section class="main wrapper" ref="scene" @mouseenter="toggleTimeline">
    <div class="link-container">
      <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
      <RouterLink :to="{ name: 'works' }">Works</RouterLink>
    </div>
    <div class="container-fluid animation-box px-5 py-3">
      <div class="hero">
        <div class="animated-el img-container" key="k1">
          <img src="../assets/img/avatar.svg" alt="pro-pic" class="profile-pic"
        </div>
        <div class="txt-container" key="k2">
          <h1 class="animated-el">Hello ! <br /></h1>
          <h2 class="animated-el">I'm Stefano</h2>
          <h3 class="animated-el">A Jr Full Stack Web Developer</h3>
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
  background-color: #133c55;
  color: rgb(233, 200, 13);
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
}
.profile-pic {
  max-width: 100%;
  border-radius: 50%;
}

.txt-container {
  h3 {
    font-weight: bolder;
  }
}
.scroll-btn {
  position: absolute;
  transform: translateY(150px);
}
</style>
