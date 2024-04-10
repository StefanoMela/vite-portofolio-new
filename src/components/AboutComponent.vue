<script>
import gsap from "gsap/gsap-core";

import { OhVueIcon } from "oh-vue-icons";
import { stackImgs } from "../data";

export default {
  data() {
    return {
      stackImgs,
    };
  },
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
      <div class="col">
        <div class="about_info">
          <div class="overlay"></div>
          <p class="about_text raleway-reg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            recusandae, facilis ullam magni cumque at, quidem eum velit
            praesentium qui quo vitae expedita enim. Saepe cumque rerum neque
            rem placeat?
          </p>
        </div>
      </div>
      <div class="col">
        <h2 class="poppins-black stack_title">Working Tools</h2>
        <div class="stack_container d-flex flex-wrap gap-3">
          <img src="../assets/img/stacks/html.png" alt="" />
          <img src="../assets/img/stacks/css.png" alt="" />
          <img src="../assets/img/stacks/js.png" alt="" />
          <img src="../assets/img/stacks/bootstrap.png" alt="" />
          <img src="../assets/img/stacks/vue.png" alt="" />
          <img src="../assets/img/stacks/axios.svg" alt="" />
          <img src="../assets/img/stacks/php.png" alt="" />
          <img src="../assets/img/stacks/laravel.svg" alt="" />
          <img src="../assets/img/stacks/mysql.png" alt="" />
          <img src="../assets/img/stacks/node.png" alt="" />
        </div>
      </div>
      <div class="btn-container">
        <button class="btn red">
          <v-icon name="bi-megaphone"scale="1.5"/>
          Holla @ Me !
        </button>
        <RouterLink :to="{ name: 'works' }" class="btn mx-3">
          <v-icon name="ri-code-s-slash-fill" scale="1.5" />
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  opacity: 0.1;
}

.stripe {
  background: url("src/assets/img/honey-white.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 350px;

  padding: 2rem;

  position: relative;
}

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

.stack_title {
  color: #cc0029;
  position: relative;
  z-index: 999;
}

// .striped {
//   padding: 2rem;
//   background-color: white;
//   width: 100%;
//   border-radius: 2rem;
// }

img {
  max-width: 15%;
  position: relative;
  z-index: 999;
}

.btn-container > *{
  position: relative;
  z-index: 999;
}
.btn {
 margin-top: 2rem;
 font-size: 1.3rem;
}
</style>
