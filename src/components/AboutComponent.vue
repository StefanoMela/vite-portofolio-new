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
  <!-- About Section -->
  <section id="about" class="container-fluid px-3">
    <div class="row">
      <div class="col">
        <h5>about</h5>
        <h1 class="poppins-extrabold">Let me introduce myself</h1>
        <div class="about_info">
          <img src="/src/assets/img/avatar.svg" alt="" />
          <p class="about_text raleway-reg">
            I'm Stefano<br>
            Islander <br>
            Hearts on: minimalistic, linear design <br>
            Passionate about: basketball, music, reading, trekking<br>
            Looking for: a wage that'll make me live my passions. <br>
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="skills-container">
          <div class="row">
            <h2 class="poppins-extrabold">what do i use</h2>
            <div class="col">
              <v-icon
              name="vi-file-type-html"
              scale="5"
              animation="float" hover
              />
              <v-icon
              name="vi-file-type-css"
              scale="5"
              animation="float" hover
              />
              <v-icon
              name="vi-file-type-js-official"
              scale="5"
              animation="float" hover
              />
              <v-icon
              name="vi-file-type-vue"
              scale="5"
              animation="float" hover
              />
            </div>
            <div class="col">
              <v-icon
              name="vi-file-type-php"
              scale="5"
              animation="float" hover
              />
              <v-icon
              name="vi-file-type-mysql"
              scale="5"
              animation="float" hover
              />
              <v-icon
              name="vi-file-type-swift"
              scale="5"
              animation="float" hover
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  padding: 3rem 0;
  text-align: center;

  position: relative;

  h5 {
    color: #cc0029;
    font-weight: bolder;
    letter-spacing: 0.2rem;
  }

  p{
    text-align: start;
  }

  h5, h1, h2{
    text-transform: uppercase;
  }
}

.about_info {

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3rem;

  img{
    max-width: 20%;
  }
}
.raleway-reg {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.stack_logo{
  height: 80px;
  width: 80px;
  text-align: center;
}
</style>
