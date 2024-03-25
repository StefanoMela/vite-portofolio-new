<script>
import gsap from "gsap";

import { OhVueIcon } from "oh-vue-icons";

export default {
  data() {
    return {
      tl: null,
      ctx: null,
    };
  },
  components: {
    "v-icon": OhVueIcon,
  },
  methods: {
    toggleTimeline() {
      this.tl.reversed(!this.tl.reversed());
    },
    textChange() {
      gsap.from("#txToChange", {
        duration: 10,
        text: "",
      });
    },
    animatedLinks() {
      gsap.timeline()
      .to(".gold", {
        width: "100%",
        ease: "Elastic.easeOut(0.25)",
        duration: 0.4,
      })
      .to(".gold", {
        width: "2em",
        left: "100%",
        ease: "Elastic.easeOut(0.4)",
        duration: 0.6,
      });
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
  <div class="wrapper">
    <div class="link-container">
      <a href="">about</a>
      <a href="">contact</a>
      <a href="">works</a>
    </div>
    <div
      class="container-fluid animation-box mt-3 px-5 py-3"
      @mouseenter="toggleTimeline"
    >
      <div class="hero" ref="main">
        <div class="animated-el img-container"></div>
        <div class="txt-container">
          <div class="animated-el">
            <h1>Hello ! <br /></h1>
          </div>
          <div class="animated-el"><h2>I'm Stefano Mela</h2></div>
          <div class="animated-el"><h3>A Jr Full Stack Web Developer</h3></div>
        </div>
      </div>
      <!-- Scroll Button -->
      <div class="scroll-btn" cursor="pointer">
        <a href="#about">
          <v-icon
            @click="textChange"
            name="fa-regular-hand-point-down"
            scale="2.5"
            animation="float"
            speed="fast"
          />
        </a>
      </div>
    </div>
  </div>
  <section class="about" id="about">
    <div class="about_container">
      <p id="txToChange" class="about_paragraph">
        I am Stefano <br />
        I have just started my journey through coding and I can't wait to kick
        off this career. <br />
        In this portfolio you'll find my works and projects, farther then my
        salty tears and desespoir for when code don't go as planned......
      </p>
      <div class="links">
        <div class="work_link" @mouseenter="animatedLinks">
          <a href="works"></a>
          <div class="gold"></div>
          <span>See some works</span>
          <v-icon name="hi-arrow-narrow-right" />
        </div>
        <div class="contact_link">
          <a href="contacts"></a>
          <div class="gold-2"></div>
          <span>Holla at me, you won't regret it !</span>
          <v-icon name="hi-arrow-narrow-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper,
.about {
  height: 100vh;
  color: rgb(233, 200, 13);
}

.animation-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.link-container {
  position: absolute;
  right: 0;
  a {
    margin: 0 1rem;
  }
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

.about_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 0rem 15rem;
}

.about_paragraph {
  font-size: 1.5rem;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  span {
    margin: 1rem;
  }

  position: relative;

  .gold {
    width: 2em;
    height: 2em;
    border-radius: 2em;
    background-color: rgb(187, 108, 28);

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -0.65em;
  }

  .gold-2 {
    width: 2em;
    height: 2em;
    border-radius: 2em;
    background-color: rgb(187, 108, 28);

    position: absolute;
    top: 50%;
    transform: translate(15rem, -50%);
    left: -0.65em;
  }
}
</style>
