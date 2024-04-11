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
  <section id="about" class="text-center py-5">
    <div class="container">
      <h1 class="poppins-black">about</h1>
      <div class="row">
        <div class="col-8">
          <div class="about_text">
            <h2 class="poppins-extrabold">who am i</h2>
            <p class="poppins-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              harum quaerat modi nam blanditiis quod sequi rerum, quia accusamus
              explicabo a, inventore repellat ratione cum fugiat! Ad sapiente
              tempora inventore! Voluptates, distinctio quasi. Doloribus, vero
              laudantium minima consectetur tenetur iure repellat maxime aliquid
              facilis incidunt ipsa qui placeat culpa nam obcaecati debitis
              reprehenderit reiciendis esse? Placeat numquam cupiditate cum
              quis?
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="avatar_card card">
            <img src="../assets/img/avatar.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col">
          <div class="about_tools">
            <h2 class="poppins-extrabold">my tools</h2>
            <div class="tools_box"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {

  background: #212121;

  color: white;

  h1,
  h2 {
    color: #cc0029;
    text-transform: uppercase;
  }

  .about_text{
  
    text-transform: uppercase;
  }


  .tools_box {
    height: 400px;
    width: 200px;

    border: 1px solid red;
  }
}
</style>
