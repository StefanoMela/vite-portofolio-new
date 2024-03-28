<script>
import gsap from "gsap";

export default {
  methods: {
    textChange() {
      gsap.from("#txToChange", {
        duration: 13,
        text: "",
      });
    },
  },
  mounted() {
    this.textChange();
  },
};
</script>

<template>
  <!-- About Section -->
  <section class="about container-fluid" id="about">
    <div class="about_container">
      <p id="txToChange" class="about_paragraph">
        👋 I'm Stefano ! <br />
        My family name means 🍎 .. and guess from which device I code ? <br />
        I have just started my journey through coding and I can't wait to kick
        off this career ! <br />
        In this portfolio you'll find my works and projects, other than my salty
        tears and désespoir for when code don't go as planned...
      </p>
      <div class="links">
        <div class="work_link">
          <div class="gold"></div>
          <RouterLink :to="{ name: 'works' }">
            See some works
          </RouterLink>
          <v-icon name="hi-arrow-narrow-right" />
        </div>
        <div class="contact_link">
          <div class="gold-2"></div>
          <RouterLink
          :to="{name: 'contacts'}">
          Holla @ Me !
          </RouterLink>
          <v-icon name="hi-arrow-narrow-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  height: 100vh;
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
    margin: 0.4rem;
  }
}
</style>
