<script>
import gsap from "gsap/gsap-core";

import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },

  methods: {
    fadeInTL() {
      let tl = gsap.timeline({
        defaults: { autoAlpha: 0, ease: "power1.out" },
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
      });
      tl.from(".line", { width: 0, duration: 2, stagger: { from: "center" } });
      tl.from(".about_avatar", { duration: 1 });
      tl.from(
        ".bio_top",
        {
          scale: 0,
        },
        ">-1"
      );
      tl.from(".bio_btm *", {
        x: 550,
        stagger: 0.1,
      });
      tl.from(
        ".tools_container *",
        { stagger: { amount: 2, from: "center" } },
        ">-3"
      );
      tl.from(".cTa", {});
    },
  },
  mounted() {
    this.fadeInTL();
  },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="container-fluid px-0 py-2">
    <div class="about_body">
      <!-- title -->
      <div class="title-wrapper container">
        <h3 class="poppins-bold subtitle my-2">about</h3>
        <h1 class="raleway-reg">Let me introduce myself</h1>
        <span class="line"></span>
      </div>
      <div class="row mx-0">
        <div class="col">
          <div class="about_avatar">
            <!-- avatar -->
            <img src="../assets/img/avatar.svg" class="avatar" alt="" />
            <!-- call to action -->
            <div class="cTa text-center">
              <div class="cTa_text my-2">
                <p class="raleway-reg">
                  Wanna know more about ? Wanna grab a cocktail ?
                </p>
              </div>
              <div class="cTa_btns mb-3">
                <span class="poppins-bold btn mx-5">
                  <v-icon name="co-minutemailer" scale="1.7" />
                  stefano.mela25@gmail.com
                </span>
                <button class="poppins-bold btn mx-5">
                  <RouterLink :to="{ name: 'works' }">
                    <v-icon name="ri-code-s-slash-fill" scale="1.7" />
                    Works !
                  </RouterLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <!-- bio -->
          <div class="about_bio p-2">
            <div class="bio_top">
              <h3 class="subtitle poppins-bold">Bio</h3>
              <p class="raleway-reg bio_t">
                Hey &#128075; <br />
                I'm Stefano ! <br />
                In this portoflio you'll find my works and my salty tears and
                désespoir for when coding don't go as planned &#128540;
              </p>
            </div>
            <div class="bio_btm">
              <h3 class="subtitle poppins-bold">Get to know me</h3>
              <ul class="raleway-reg p-0 bio_t">
                <li>
                  <span class="mybadge poppins-bold">Fun fact:</span> my last
                  name means &#127822;
                </li>
                <li>
                  <span class="mybadge poppins-bold"
                    >Fun fact<sup>2</sup>:</span
                  >
                  been a bartender for more than 15 years and now I’m almost
                  fully sober.. <br />
                  <span class="badge bg-warning"
                    >Disclaimer: exceptions can be done for good cocktails
                  </span>
                </li>
                <li>
                  <span class="mybadge poppins-bold"> I speak:</span> Italian as
                  a mother tongue, English, French and Spanish, and I can greet
                  people in 5 more languages.
                </li>
                <li>
                  <span class="mybadge poppins-bold"> I work on:</span> Apple
                </li>
                <li>
                  <span class="mybadge poppins-bold"> Hearts on:</span>
                  minimalistic, elegant design. I recon I still need a few
                  graphic design courses to attend that... but I also love those
                  cartoon-type, colored, full-of-animations-design… oh man, life
                  is so hard.
                </li>
                <li>
                  <span class="mybadge poppins-bold"> Love to:</span> read,
                  travel, play basketball
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- tools -->
        <div class="col-12 rel px-0">
          <div class="overlay dark"></div>
          <div class="tools_container">
            <h2 class="poppins-bold tools_title">Working Tools</h2>
            <v-icon class="tool" name="vi-file-type-html" scale="3" />
            <v-icon class="tool" name="vi-file-type-css" scale="3" />
            <img class="tool" src="../assets/img/stacks/bootstrap.png" alt="" />
            <v-icon class="tool" name="vi-file-type-js-official" scale="3" />
            <v-icon class="tool" name="vi-file-type-vue" scale="3" />
            <img class="tool" src="../assets/img/stacks/axios.svg" alt="" />
            <v-icon class="tool" name="vi-file-type-php" scale="3" />
            <v-icon class="tool" name="vi-file-type-mysql" scale="3" />
            <img class="tool" src="../assets/img/stacks/node.png" alt="" />
            <img class="tool" src="../assets/img/stacks/laravel.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// main and overlay

h2,
h3 {
  text-transform: uppercase;
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

// body and titles

.about_body {
  position: relative;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  display: inline-block;
  height: 5px;
  width: 50%;
  background-color: #cc0029;
  border-radius: 10px;
}

// avatar section

.about_avatar {
  text-align: center;
  .avatar {
    width: 400px;
  }
}

// call to action section

.cTa_text {
  font-size: 1.2rem;
}

.btn {
  font-size: 1.3rem;
  color: black;
}

.btn:hover {
  scale: 1.2;
}

// bio

.about_bio {
  font-size: 1.2rem;
  letter-spacing: 0.5px;
}

// tools section

.rel {
  position: relative;
}

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
</style>
