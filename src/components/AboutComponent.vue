<script>
import gsap from "gsap/gsap-core";
import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },

  methods: {
    preventAnim() {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 576px)", () => {
        let tl = gsap.timeline({
          defaults: { autoAlpha: 0, ease: "power1.out" },
          scrollTrigger: {
            trigger: "#about",
            start: "top center",
          },
        });
        tl.from(".line", {
          width: 0,
          duration: 2,
          stagger: { from: "center" },
        });
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
        tl.from(".call-to-action", {});
      });
    },
  },
  mounted() {
    this.preventAnim();
  },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="container-fluid overflow-xs-scroll">
    <div class="about_body">
      <!-- title -->
      <div class="title-wrapper container">
        <h3 class="poppins-bold subtitle">about</h3>
        <h1 class="raleway-reg">Let me introduce myself</h1>
        <span class="line"></span>
      </div>
      <div class="row">
        <div class="col-12 col-lg">
          <div class="about_avatar">
            <!-- avatar -->
            <img src="../assets/img/avatar-tr.png" class="avatar" alt="" />
            <!-- call to action -->
            <div class="call-to-action poppins-bold">
              <div class="email">
                <v-icon name="co-minutemailer" scale="2" class="cta_icons" />
                stefano.mela25@gmail.com
              </div>
              <div class="resume">
                <a
                  href="https://www.canva.com/design/DAGC23R-rs0/mTN5KXF_Dmok6UJ0uLp4fg/view"
                  target="_blank"
                >
                  <v-icon name="ai-cv" scale="2" class="cta_icons" /> See
                  Resume</a
                >
              </div>
              <div class="works">
                <v-icon name="bi-code-slash" scale="2" class="cta_icons" />
                <RouterLink :to="{ name: 'works' }">Works</RouterLink>
              </div>
              <div class="social">
                <a
                  href="https://www.github.com/StefanoMela"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon name="fa-github"  scale="2" class="cta_icons"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/smela/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon name="fa-linkedin" scale="2" class="cta_icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <!-- bio -->
          <div class="about_bio">
            <div class="bio_top">
              <h3 class="subtitle poppins-bold">Bio</h3>
              <p class="raleway-reg">
                After few years of work in the hospitality industry I've decided
                to focus on my intrest on the digital world and become a
                developer. <br />
                I come with a handful luggage of problem solving and
                interpersonal skills, such as communication, empathy, and
                understanding customer needs. <br />
                Fluent in four languages, I see them as a bridge, connecting
                people and ideas across cultures. <br />
                Hobbies are: reading, playing basketball, trekking, travelling.
              </p>
            </div>
            <div class="bio_btm">
              <h3 class="subtitle poppins-bold">Get to know me</h3>
              <ul class="raleway-reg">
                <li>
                  <span class="mybadge poppins-bold">Fun fact:</span> my last
                  name means &#127822;
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
              </ul>
            </div>
          </div>
        </div>
        <!-- tools -->
        <div class="col-lg-12 rel px-0 tools_col">
          <div class="overlay"></div>
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
            <img class="tool" src="../assets/img/stacks/laravel.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// main and overlay

#about {
  overflow: hidden;
  position: relative;

  padding: 0;

}

h2,
h3 {
  text-transform: uppercase;
}

.overlay {
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

  overflow-y: auto;

  ul {
    padding-left: 0;

    li {
      margin: 0.4rem 0;
    }
  }
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.5rem;
}

.line {
  display: inline-block;
  height: 2px;
  width: 50%;
  background-color: #cc0029;
  border-radius: 10px;
}

// avatar section

.about_avatar {
  text-align: center;

  .avatar {
    max-height: 400px;
  }
}

// call to action section

.call-to-action {
  margin: 1rem;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  .cta_icons {
    color: #cc0029;
  }
}
// bio

.about_bio {
  font-size: 1.2rem;
  letter-spacing: 0.5px;

  padding: 0 2.5rem;
}

// tools section

.rel {
  position: relative;
}

.tools_title {
  color: #cc0029;
}

.tools_container {
  background: url("../assets/img/hero-bg.jpeg") no-repeat center center;
  background-size: cover;

  width: 100%;
  padding: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  .tool {
    max-width: 60px;
  }

  > * {
    z-index: 999;
  }
}

// mobile query

@media only screen and (max-width: 576px) {
  .avatar {
    height: 300px;
  }

  .about_bio {
    padding: 0 1rem;

    margin: 1rem 0;
  }

  .title-wrapper {
    margin-bottom: 0.5rem;
  }

  .line {
    width: 80%;
  }

  .call-to-action {
    font-size: 1rem;
  }

  .tools_container {
    flex-wrap: wrap;

    gap: 2rem;

    .tools_title {
      display: none;
    }

    .tool {
      max-height: 50px;
      max-width: 50px;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .tools_col {
    max-width: 100%;
  }
  .tools_container {
    max-width: 100%;

    .tools_title {
      display: none;
    }
    gap: 0.3rem;
  }
}
</style>
