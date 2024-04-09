<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="container-fluid px-3">
    <div class="overlay"></div>
    <div class="row">
      <div class="col">
        <h1 class="poppins-extrabold title">about</h1>
        <img src="/src/assets/img/avatar.svg" alt="avatar" />
        <div class="about_info">
          <p class="about_text raleway-reg text-center">
            I'm Stefano<br />
            Islander <br />
            Hearts on: minimalistic, clean, linear design <br />
            Passionate about: basketball, reading, music, films, trekking <br />
          </p>
        </div>
        <button class="btn">
          <v-icon name="bi-megaphone" class="mx-1" />
          Holla @ Me !
        </button>
        <RouterLink :to="{ name: 'works' }">
          <button class="btn btn-outline-dark mx-3">
            <v-icon name="ri-code-s-slash-fill" class="mx-1" />
            Works !
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  background: #151515 url("src/assets/img/about-bg2.jpeg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  min-height: 800px;

  color: white;

  padding: 3rem 0;
  text-align: center;
  position: relative;

  h1,
  h2 {
    text-transform: uppercase;
  }
  p {
    font-size: 3rem;
    text-align: start;
    z-index: 999;
    
  }

  .title {
    color: #cc0029;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    position: relative;
    z-index: 999;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  opacity: 0.70;
}

.about_info {
  display: flex;
  justify-content: space-around;
  align-items: center;

}
img {
  max-width: 20%;
  margin: 3rem 0;
  position: relative;
  z-index: 999;
}

.btn{
  z-index: 999;
}
</style>
