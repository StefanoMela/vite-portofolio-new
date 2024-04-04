<script>
import gsap from "gsap";

export default {
  methods: {
    textScale() {
      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".bio_title",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=500",
          scrub: true,
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });
      // add animations and labels to the timeline
      tl.addLabel("start")
        .from(".to-scale", { scale: 0 })
        .addLabel("scaleUp")
        .to(".to-scale", { scale: 1.1 })
        .addLabel("end");
    },

    logoShow() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_stacks_container",
          pin: true,
          start: "top top",
          end: "+=500",
          scrub: 1,
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.in", // the ease of the snap animation ("power3" by default)
          },
          toggleActions: "play pause resume reset",
        },
      });
      tl.addLabel("start")
        .from(".roll-in", { x: -window.innerWidth })
        .addLabel("rollIn")
        .to(".roll-in", { x: "center center"})
        .addLabel("end");
    },
  },

  mounted() {
    this.textScale();
    this.logoShow();
  },
};
</script>

<template>
  <!-- About Section -->
  <section id="about" class="container-fluid">
    <div class="about-container">
      <div class="bio_title">
        <h1>Who Am I</h1>
      </div>
      <div class="bio_container to-scale">
        <div class="bio_paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem
            distinctio tenetur, iste earum molestias, rem ut modi nisi sunt
            soluta, aspernatur labore accusantium minus culpa fugiat? Sint,
            delectus quidem? Cum cumque quam ex id! Et, eos animi! Enim officiis
            praesentium a ratione explicabo nulla necessitatibus aspernatur in.
            Dolore nihil sint beatae quo dolores et iure repellendus vero in
            optio? Dolorem voluptatem atque laudantium officiis pariatur, itaque
            odio, facere libero eius obcaecati temporibus fugiat hic iusto illo
            neque est facilis maxime qui dicta tempore nam vel eveniet error.
            Qui, necessitatibus.
          </p>
        </div>
      </div>
      <div class="stacks_title">
        <h1>Knowledge</h1>
      </div>
      <div class="about_stacks_container roll-in mt-5">
        <div class="row">
          <div class="col">
            <img src="../assets/img/stacks/html.png" alt="" />
            <img src="../assets/img/stacks/css.png" alt="" />
            <img src="../assets/img/stacks/js.png" alt="" />
            <img src="../assets/img/stacks/vue.png" alt="" />
            <img src="../assets/img/stacks/axios.svg" alt="" />
            <img src="../assets/img/stacks/php.png" alt="" />
            <img src="../assets/img/stacks/laravel.svg" alt="" />
            <img src="../assets/img/stacks/mysql.png" alt="" />
            <img src="../assets/img/stacks/myadmin.png" alt="" />
            <img src="../assets/img/stacks/node.png" alt="" />
          </div>
        </div>
        <div class="link-container">
          <RouterLink :to="{ name: 'works' }">Some Works </RouterLink>
          <RouterLink :to="{ name: 'contacts' }">Holla @ Me </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  padding: 3rem;
  background-color: #23469e3c;
}

.about-container {
  text-align: center;
}

.about_stacks_container {
  img {
    width: 15%;
  }
}

.link-container {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 3rem;
  font-size: 1.2rem;
  text-transform: uppercase;
}
</style>
