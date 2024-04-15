<script>
import gsap from "gsap/gsap-core";

import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },

  methods: {
    fadeIn() {},
  },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="container-fluid px-0 py-2">
    <div class="overlay light"></div>
    <div class="about_body">
      <h1 class="poppins-black title my-2">about</h1>
      <div class="row stripe mx-0">
        <div class="col">
          <div class="about_avatar">
            <img src="../assets/img/avatar.svg" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="about_bio p-2">
            <h3 class="subtitle poppins-bold">Bio</h3>
            <p class="raleway-reg">
              Hey &#128075; <br />
              I'm Stefano ! <br />
              In this portoflio you'll find my works and my salty tears and
              désespoir for when coding don't go as planned
            </p>
            <h3 class="subtitle poppins-bold">Get to know me</h3>
            <ul class="raleway-reg p-0">
              <li>
                <span class="mybadge poppins-bold">Fun fact:</span> my last name
                means &#127822;
              </li>
              <li>
                <span class="mybadge poppins-bold">Fun fact<sup>2</sup>:</span>
                been a bartender for more than 15 years and now I’m almost fully
                sober.. <br />
                Disclaimer: exceptions can be done for good cocktails
              </li>
              <li>
                <span class="mybadge poppins-bold"> I speak:</span> Italian as a
                mother tongue, English, French and Spanish, and I can say Hey,
                how are you ? in 5 more languages.
              </li>
              <li>
                <span class="mybadge poppins-bold"> I work on:</span> Apple
              </li>
              <li>
                <span class="mybadge poppins-bold"> Hearts on:</span>
                minimalistic, elegant design. I recon I still need a few graphic
                design courses to attend that... but I also love those
                cartoon-type, colored, full-of-animations-design…. oh man, life
                is so hard.
              </li>
              <li>
                <span class="mybadge poppins-bold"> Love to:</span> play
                basketball, read, travel
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 rel px-0">
          <div class="overlay dark"></div>
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
        <div
          class="cTa text-center"
        >
          <div class="cTa_text my-2">
            <p class="raleway-reg"
              >Wanna know more about ? Wanna grab a cocktail ?
            </p>
          </div>
          <div class="cTa_btns">
            <button class="poppins-bold btn">
              <v-icon name="bi-megaphone" scale="1.7" />
              Holla @ Me !
            </button>
            <button class="poppins-bold btn">
              <RouterLink :to="{ name: 'works' }">
                <v-icon name="ri-code-s-slash-fill" scale="1.7" />
                Works !
              </RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// main and overlay

#about {
  background: url("../assets/img/abs-white-bg.jpg") no-repeat center center;

  background-size: cover;
  height: 100%;
  width: 100%;

  position: relative;

  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }
}

.rel {
  position: relative;
}

.overlay.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  opacity: 0.65;
}

.overlay.light {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.7;
}

.about_body {
  position: relative;
}

// main title

.title {
  color: #cc0029;
  font-size: 2.8rem;
  letter-spacing: 0.2rem;
  text-align: center;
}

// bio section
p,
li {
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 600;
}

.subtitle {
  color: #cc0029;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  text-align: center;

  margin: 0.5rem 0;
}

img {
  max-width: 80%;
}

.mybadge {
  color: #cc0029;
}

// tools section

.tools_title {
  color: #cc0029;
  margin: 1rem 0;
}

.tools_container {
  background: url("../assets/img/hero-bg.jpeg") no-repeat center center;
  background-size: cover;

  padding: 1rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;

  img {
    max-height: 60px;
    max-width: 60px;
  }

  > * {
    z-index: 999;
  }
}

// call to action section
.btn {
  font-size: 1.3rem;
  color: black;
}
</style>
