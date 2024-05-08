<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
  methods: {},
};
</script>

<template>
  <!-- Hero Section -->
  <section class="hero container-fluid">
    <div class="link-container poppins-bold">
      <RouterLink :to="{ name: 'works' }"> < Works / > </RouterLink>
    </div>
    <div class="overlay"></div>
    <div class="hero_content">
      <div class="row">
        <div class="col">
          <h3 class="poppins-black">Hello, World</h3>
          <h1 class="poppins-extrabold">I'm Stefano Mela</h1>
          <span class="job">Jr Full Stack Developer</span>
        </div>
      </div>
      <a href="#about">
        <div class="scroller">
          <span class="scroller_pointer"></span>
        </div>
      </a>

      <div class="social">
        <a
          href="https://www.github.com/StefanoMela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon name="fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/smela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon name="fa-linkedin" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: #151515 url("src/assets/img/hero-bg.jpeg") no-repeat center bottom;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  text-transform: uppercase;

  h3 {
    color: #cc0029;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }

  h1 {
    font-size: 3.3rem;
    letter-spacing: 0.2rem;
  }

  span {
    font-size: 1rem;
  }
}

.link-container {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 3rem;
  margin-right: 1.5rem;

  color: #cc0029;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  z-index: 1;
}

.job::before,
.job::after {
  display: inline-block;
  content: "|";
  width: 1px;
  color: #cc0029;
  margin-inline: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  opacity: 0.85;
}

.hero_content {
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroller {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: start;

  transform: translateY(250px);

  border: 3px solid white;

  padding: 5px;
  height: 60px;
  width: 35px;
  border-radius: 20px;

  .scroller_pointer {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;

    animation-name: scroll;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(35px);
    }
  }
}

.social {
  width: 30px;
  color: #cc0029;

  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-right: 1rem;
}

@media only screen and (max-width: 576px) {
  .hero {
    h3 {
      font-size: 1.3rem;
    }
    h1 {
      font-size: 2.8rem;
    }
  }

  .social{
    margin-right: .4rem;
  }

  .scroller {
    transform: translateY(220px);
  }
  

  .link-container{
    margin-bottom: 2rem;
  }
}
</style>
