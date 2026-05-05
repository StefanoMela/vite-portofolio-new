<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OhVueIcon } from "oh-vue-icons";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    "v-icon": OhVueIcon,
  },
  data() {
    return {
      skills: [
        { name: "HTML", icon: "vi-file-type-html" },
        { name: "CSS", icon: "vi-file-type-css" },
        { name: "JavaScript", icon: "vi-file-type-js-official" },
        { name: "Vue.js", icon: "vi-file-type-vue" },
        { name: "PHP", icon: "vi-file-type-php" },
        { name: "MySQL", icon: "vi-file-type-mysql" },
      ],
      extraSkills: [
        { name: "Bootstrap", img: "/stacks/bootstrap.png" },
        { name: "Axios", img: "/stacks/axios.svg" },
        { name: "Laravel", img: "/stacks/laravel.svg" },
      ],
    };
  },
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      gsap.matchMedia().add("(min-width: 768px)", () => {
        gsap.from(".about-header", {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        });

        gsap.from(".about-content > *", {
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.6,
        });

        gsap.from(".skill-item", {
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
          },
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.5,
        });

        gsap.from(".cta-card", {
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
        });
      });
    },
  },
};
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <header class="about-header">
        <span class="section-label font-display">About</span>
        <h2 class="section-heading font-display">Let me introduce myself</h2>
        <div class="header-line"></div>
      </header>

      <div class="about-grid">
        <div class="about-content">
          <div class="bio-card">
            <img
              src="../assets/img/avatar-tr.png"
              alt="Stefano Mela"
              class="avatar"
            />
            <div class="bio-text">
              <h3 class="font-display">Bio</h3>
              <p>
                After a few years of work in the hospitality industry, I decided
                to focus on my interest in the digital world and become a
                developer. I bring a handful of problem-solving and
                interpersonal skills, such as communication, empathy, and
                understanding customer needs.
              </p>
              <p>
                Fluent in four languages, I see them as a bridge, connecting
                people and ideas across cultures. In my free time, you can find me
                reading, playing basketball, trekking, or traveling.
              </p>
            </div>
          </div>

          <div class="personal-card">
            <h3 class="font-display">Get to know me</h3>
            <ul class="personal-list">
              <li>
                <span class="label">Fun fact</span>
                <span class="value">My last name means "apple" in Italian</span>
              </li>
              <li>
                <span class="label">I work on</span>
                <span class="value">Apple</span>
              </li>
              <li>
                <span class="label">Design style</span>
                <span class="value"
                  >Minimalistic and elegant, but I also love colorful,
                  animation-rich designs</span
                >
              </li>
            </ul>
          </div>
        </div>

        <aside class="about-sidebar">
          <div class="skills-section">
            <h3 class="font-display">Tech Stack</h3>
            <div class="skills-grid">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="skill-item"
              >
                <v-icon :name="skill.icon" scale="1.8" class="skill-icon" />
                <span class="skill-name">{{ skill.name }}</span>
              </div>
              <div
                v-for="skill in extraSkills"
                :key="skill.name"
                class="skill-item"
              >
                <img :src="skill.img" :alt="skill.name" class="skill-img" />
                <span class="skill-name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div class="cta-section">
        <a
          href="mailto:stefano.mela25@gmail.com"
          class="cta-card"
        >
          <v-icon name="co-minutemailer" scale="1.5" class="cta-icon" />
          <div class="cta-text">
            <span class="cta-label">Email</span>
            <span class="cta-value">stefano.mela25@gmail.com</span>
          </div>
        </a>
        <a
          href="https://www.canva.com/design/DAGC23R-rs0/mTN5KXF_Dmok6UJ0uLp4fg/view"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-card"
        >
          <v-icon name="ai-cv" scale="1.5" class="cta-icon" />
          <div class="cta-text">
            <span class="cta-label">Resume</span>
            <span class="cta-value">View my CV</span>
          </div>
        </a>
        <RouterLink :to="{ name: 'works' }" class="cta-card">
          <v-icon name="bi-code-slash" scale="1.5" class="cta-icon" />
          <div class="cta-text">
            <span class="cta-label">Portfolio</span>
            <span class="cta-value">Browse my work</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section {
  padding: var(--space-4xl) 0;
  background-color: var(--color-background);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-border),
      transparent
    );
  }
}

.about-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-sm);
}

.section-heading {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.header-line {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0 auto;
  border-radius: var(--radius-full);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.bio-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  display: flex;
  gap: var(--space-xl);
  align-items: flex-start;
}

.avatar {
  width: 140px;
  height: auto;
  flex-shrink: 0;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
}

.bio-text {
  h3 {
    color: var(--color-accent);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-md);
  }

  p {
    margin-bottom: var(--space-md);
    line-height: 1.8;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.personal-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);

  h3 {
    color: var(--color-accent);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-lg);
  }
}

.personal-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  li {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--color-border);

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-muted);
  }

  .value {
    color: var(--color-text-secondary);
    line-height: 1.6;
  }
}

.about-sidebar {
  position: sticky;
  top: var(--space-xl);
  height: fit-content;
}

.skills-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);

  h3 {
    color: var(--color-accent);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-lg);
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }
}

.skill-icon {
  color: var(--color-text-secondary);
}

.skill-img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.skill-name {
  font-size: 0.6875rem;
  color: var(--color-text-muted);
  text-align: center;
}

.cta-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.cta-card {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(20, 184, 166, 0.2);
  }
}

.cta-icon {
  color: var(--color-accent);
  flex-shrink: 0;
}

.cta-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cta-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
}

.cta-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

// Responsive
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .bio-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar {
    width: 120px;
  }

  .cta-section {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
