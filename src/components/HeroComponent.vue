<script>
import { OhVueIcon } from "oh-vue-icons";
import gsap from "gsap";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
  mounted() {
    this.animateHero();
  },
  methods: {
    animateHero() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-greeting", { 
        opacity: 0, 
        y: 20, 
        duration: 0.6,
        delay: 0.2 
      })
      .from(".hero-name", { 
        opacity: 0, 
        y: 30, 
        duration: 0.8 
      }, "-=0.3")
      .from(".hero-title", { 
        opacity: 0, 
        y: 20, 
        duration: 0.6 
      }, "-=0.4")
      .from(".hero-description", { 
        opacity: 0, 
        y: 20, 
        duration: 0.6 
      }, "-=0.3")
      .from(".hero-cta", { 
        opacity: 0, 
        y: 20, 
        duration: 0.5 
      }, "-=0.2")
      .from(".hero-social a", { 
        opacity: 0, 
        y: 10, 
        stagger: 0.1, 
        duration: 0.4 
      }, "-=0.3")
      .from(".scroll-indicator", { 
        opacity: 0, 
        duration: 0.6 
      }, "-=0.2");
    }
  },
};
</script>

<template>
  <section class="hero">
    <div class="hero-background">
      <div class="hero-gradient"></div>
      <div class="hero-grid"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-greeting font-display">Hello, World</span>
        <h1 class="hero-name font-display">Stefano Mela</h1>
        <p class="hero-title">
          <span class="title-accent">Jr Full Stack Developer</span>
        </p>
        <p class="hero-description">
          Building polished web experiences with a focus on clean code and thoughtful design.
          Passionate about creating intuitive interfaces that connect people and ideas.
        </p>
        
        <div class="hero-cta">
          <RouterLink :to="{ name: 'works' }" class="btn-primary-custom">
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </RouterLink>
          <a href="#about" class="btn-secondary-custom">
            <span>About Me</span>
          </a>
        </div>
      </div>
      
      <div class="hero-social">
        <a
          href="https://www.github.com/StefanoMela"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <v-icon name="fa-github" scale="1.2" />
        </a>
        <a
          href="https://www.linkedin.com/in/smela/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <v-icon name="fa-linkedin" scale="1.2" />
        </a>
      </div>
    </div>
    
    <a href="#about" class="scroll-indicator" aria-label="Scroll to about section">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span class="scroll-text">Scroll</span>
    </a>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(20, 184, 166, 0.08), transparent);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
  padding: var(--space-xl);
  text-align: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.hero-greeting {
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent);
}

.hero-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  background: linear-gradient(180deg, var(--color-text-primary) 0%, var(--color-text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.title-accent {
  position: relative;
  
  &::before,
  &::after {
    content: "//";
    color: var(--color-accent);
    opacity: 0.6;
    margin: 0 var(--space-sm);
  }
}

.hero-description {
  max-width: 500px;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
}

.hero-cta {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.hero-social {
  position: absolute;
  right: var(--space-xl);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  
  a {
    color: var(--color-text-muted);
    transition: all var(--transition-base);
    padding: var(--space-sm);
    
    &:hover {
      color: var(--color-accent);
      transform: translateX(-4px);
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-accent);
  }
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid currentColor;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-wheel {
  width: 3px;
  height: 8px;
  background: currentColor;
  border-radius: 2px;
  animation: scroll-bounce 1.5s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(6px);
    opacity: 0.5;
  }
}

.scroll-text {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

// Responsive
@media (max-width: 768px) {
  .hero-content {
    padding: var(--space-lg);
  }
  
  .hero-social {
    position: fixed;
    right: var(--space-md);
    top: auto;
    bottom: var(--space-xl);
    transform: none;
    flex-direction: row;
    gap: var(--space-md);
    z-index: 100;
  }
  
  .hero-cta {
    flex-direction: column;
    width: 100%;
    
    .btn-primary-custom,
    .btn-secondary-custom {
      width: 100%;
      justify-content: center;
    }
  }
  
  .hero-description {
    font-size: 0.9375rem;
  }
  
  .scroll-indicator {
    bottom: var(--space-xl);
  }
}
</style>
