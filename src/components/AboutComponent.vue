<script>
import gsap from "gsap/gsap-core";

import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="container-fluid p-0">
    <h2 class="poppins-black title">about</h2>
    <h1 class="big">about</h1>
    <div class="row stripe">
      <div class="col-12">
        <div class="about_info d-flex justify-content-center">
          <div class="overlay"></div>
          <p class="about_text w-50 raleway-reg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            deleniti architecto dolor atque doloremque autem eius expedita
            corporis corrupti voluptate debitis totam quasi sint! Ad molestiae
            illo eos eum necessitatibus. corporis corrupti voluptate debitis
            totam quasi sint! Ad molestiae illo eos eum necessitatibus. corporis
            corrupti voluptate debitis totam quasi sint! Ad molestiae illo eos
            eum necessitatibus.
          </p>
        </div>
      </div>
      <div class="col px-0">
        <div class="tools_container">
          <h2 class="poppins-black tools_title">Working Tools</h2>
          <v-icon name="vi-file-type-html" scale="3" />
          <v-icon name="vi-file-type-css" scale="3" />
          <img src="../assets/img/stacks/bootstrap.png" alt="" />
          <v-icon name="vi-file-type-js-official" scale="3" />
          <v-icon name="vi-file-type-vue" scale="3" />
          <img src="../assets/img/stacks/axios.svg" alt="" />
          <v-icon name="vi-file-type-php" scale="3" />
          <v-icon name="vi-file-type-mysql" scale="3" />
          <img src="../assets/img/stacks/node.png" alt="" />
          <img src="../assets/img/stacks/laravel.svg" alt="" />
        </div>
      </div>
      <div class="btn-container">
        <button class="btn poppins-bold">
          <v-icon name="bi-megaphone" scale="1.7" />
          Holla @ Me !
        </button>
        <RouterLink :to="{ name: 'works' }" class="btn poppins-bold mx-3">
          <v-icon name="ri-code-s-slash-fill" scale="1.7" />
          Works !
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  background: url("src/assets/img/pxfuel.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  min-height: 800px;

  text-align: center;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }
}

.stripe {
  background: url("src/assets/img/honey-white.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #ffffff;
  width: 100%;

  position: relative;
}

// .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #111111;
//   opacity: 0.1;
// }

.about_text {
  padding: 2rem;
  text-align: left;
}

.title {
  color: #cc0029;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  position: absolute;
  top: 50px;
  z-index: 999;
}

.big {
  position: absolute;
  top: 30px;
  left: 40%;
  font-size: 7rem;
  color: rgba(255, 255, 255, 0.226);
  z-index: 1;
  font-weight: 900;
}

.tools_title {
  color: #cc0029;
  position: relative;
  z-index: 999;
  margin: 1rem 0;
}

.tools_container {
  background: url("../assets/img/pxfuel.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;

  height: 100px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;

  img {
    max-height: 60px;
    max-width: 60px;
  }
}

.btn {
  margin: 2rem 0;
  font-size: 1.3rem;
  
  color: black;
  border: 3px solid #cc0029;
}
</style>
