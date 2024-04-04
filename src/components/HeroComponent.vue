<script>
import gsap from "gsap";

import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
  methods: {},
};
</script>

<template>
  <!-- Main Section w/ animation -->
  <section class="wrapper">
    <div class="link-container p-3">
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
          <RouterLink :to="{ name: 'about' }">
            <span>
              <v-icon
                name="fa-regular-hand-point-down"
                scale="2.5"
                animation="float"
                speed="fast"
              />
            </span>
          </RouterLink>
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
