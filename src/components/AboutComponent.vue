<script>
import gsap from "gsap/gsap-core";

import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },

  // methods: {
  //   fadeInCenter() {
  //     gsap.from(".fade-in-center", {
  //       opacity: 0,
  //       duration: 1,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //       },
  //     });
  //   },
  //   fadeInRight() {
  //     gsap.from(".fade-in-right", {
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //       },
  //       x: +650,
  //       ease: "none",
  //     });
  //   },
  //   fadeInLeft() {
  //     gsap.from(".fade-in-left", {
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //       },
  //       x: -650,
  //       ease: "none",
  //     });
  //   },
  // },

  // mounted() {
  //   this.fadeInCenter();
  //   this.fadeInRight();
  //   this.fadeInLeft();
  // },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="text-center p-5 trigger">
    <div class="container">
      <div class="row centered">
        <h3>about</h3>
        <h1>Let me introduce myself</h1>
        <div class="col-4">
          <div class="avatar-container">
            <img src="../assets/img/avatar.svg" alt="" />
          </div>
        </div>
        <div class="col-10 w-50">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nam
            vel eum facere cupiditate aliquid fugit voluptate a, aliquam
            laudantium aut obcaecati, atque quaerat. Doloremque aut cumque sed
            hic repellendus.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h3 class="text-start">section title</h3>
          <p class="text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vero
              incidunt quibusdam odit iure unde, ipsam rerum accusantium sed totam
              harum aperiam at! Omnis expedita illum ipsa soluta cum fugit.
            </p>
        </div>
        <div class="col-6">
          <h3 class="text-start">section title</h3>
          <p class="text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vero
            incidunt quibusdam odit iure unde, ipsam rerum accusantium sed totam
            harum aperiam at! Omnis expedita illum ipsa soluta cum fugit.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  //  background: #050505;

  //  color: white;

  // h1,
  // h2 {
  //   text-transform: uppercase;
  // }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about_text {
    text-transform: uppercase;
    background-color: #cc0029ae;
    padding: 2rem;
    border-radius: 2rem;
    color: white;
  }

  .avatar_card {
    border-radius: 50%;
    // border: 10px inset red;

    border: 3px solid black;

    outline: 3px dotted rgb(231, 48, 31);
    outline-offset: 2rem;
  }

  .tools_box {
    margin: 3rem;
    padding: 3em;
    width: 100%;

    border: 1px solid black;

    display: flex;

    .stack {
      height: 150px;
      aspect-ratio: 1;
      border: 1px solid green;
      background-color: green;
    }
    .stack:nth-child(2) {
      border: 1px solid red;
      background-color: red;
    }
    .stack:nth-child(3) {
      border: 1px solid rgb(4, 0, 255);
      background-color: blue;
    }
  }
}
</style>
