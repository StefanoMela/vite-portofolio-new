<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-container">
      <RouterLink :to="{ name: 'landing' }" class="nav-logo font-display">
        SM<span class="logo-accent">.</span>
      </RouterLink>

      <div :class="['nav-menu', { open: isMobileMenuOpen }]">
        <RouterLink
          :to="{ name: 'landing' }"
          class="nav-link"
          @click="closeMobileMenu"
        >
          Home
        </RouterLink>
        <a href="/#about" class="nav-link" @click="closeMobileMenu">About</a>
        <RouterLink
          :to="{ name: 'works' }"
          class="nav-link"
          @click="closeMobileMenu"
        >
          Works
        </RouterLink>
        <a
          href="mailto:stefano.mela25@gmail.com"
          class="nav-cta"
          @click="closeMobileMenu"
        >
          Contact
        </a>
      </div>

      <button
        :class="['mobile-toggle', { open: isMobileMenuOpen }]"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-md) 0;
  transition: all var(--transition-base);

  &.scrolled {
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-sm) 0;
  }
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
}

.logo-accent {
  color: var(--color-accent);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-accent);
    transition: width var(--transition-fast);
  }

  &:hover {
    color: var(--color-text-primary);

    &::after {
      width: 100%;
    }
  }

  &.router-link-active {
    color: var(--color-text-primary);

    &::after {
      width: 100%;
    }
  }
}

.nav-cta {
  font-size: 0.875rem;
  font-weight: 500;
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-accent);
  color: var(--color-background);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-accent-hover);
    transform: translateY(-1px);
    color: var(--color-background);
  }
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-sm);
  cursor: pointer;
}

.toggle-line {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.mobile-toggle.open {
  .toggle-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .toggle-line:nth-child(2) {
    opacity: 0;
  }
  .toggle-line:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}

// Responsive
@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background);
    flex-direction: column;
    justify-content: center;
    gap: var(--space-xl);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);

    &.open {
      opacity: 1;
      visibility: visible;
    }
  }

  .nav-link {
    font-size: 1.5rem;
  }

  .nav-cta {
    font-size: 1rem;
    padding: var(--space-md) var(--space-xl);
  }
}
</style>
