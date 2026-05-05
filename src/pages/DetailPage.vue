<script>
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      project: null,
      modal: {
        isOpen: false,
        image: "",
      },
    };
  },
  computed: {
    projectIndex() {
      return this.store.projectList.findIndex(
        (p) => p.slug === this.$route.params.slug
      );
    },
    prevProject() {
      if (this.projectIndex > 0) {
        return this.store.projectList[this.projectIndex - 1];
      }
      return null;
    },
    nextProject() {
      if (this.projectIndex < this.store.projectList.length - 1) {
        return this.store.projectList[this.projectIndex + 1];
      }
      return null;
    },
  },
  methods: {
    fetchProject() {
      this.project = this.store.projectList.find(
        (project) => project.slug === this.$route.params.slug
      );
    },
    openModal(image) {
      this.modal.isOpen = true;
      this.modal.image = image;
    },
    closeModal() {
      this.modal.isOpen = false;
      this.modal.image = "";
    },
  },
  mounted() {
    this.fetchProject();
  },
  watch: {
    "$route.params.slug": {
      handler() {
        this.fetchProject();
      },
    },
  },
};
</script>

<template>
  <main class="detail-page" v-if="project">
    <div class="container">
      <RouterLink :to="{ name: 'works' }" class="back-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Works</span>
      </RouterLink>

      <article class="project-article">
        <header class="project-header">
          <div class="project-meta">
            <span
              v-for="(tech, index) in project.techs"
              :key="index"
              class="badge-tech"
            >
              {{ tech.trim() }}
            </span>
          </div>
          <h1 class="project-title font-display">{{ project.title }}</h1>
        </header>

        <div class="project-hero">
          <img
            :src="project.thumb"
            :alt="project.title"
            class="hero-image"
            @click="openModal(project.thumb)"
          />
        </div>

        <div class="project-content">
          <div class="content-main">
            <section class="content-section">
              <h2 class="section-title font-display">About this project</h2>
              <p class="project-description">{{ project.brief }}</p>
            </section>

            <section class="content-section" v-if="project.gallery">
              <h2 class="section-title font-display">Gallery</h2>
              <div class="gallery-grid">
                <div
                  v-for="(image, index) in project.gallery"
                  :key="index"
                  class="gallery-item"
                  @click="openModal(image)"
                >
                  <img :src="image" :alt="`${project.title} screenshot ${index + 1}`" />
                </div>
              </div>
            </section>
          </div>

          <aside class="content-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-title font-display">Technologies</h3>
              <div class="tech-list">
                <span
                  v-for="(tech, index) in project.techs"
                  :key="index"
                  class="tech-item"
                >
                  {{ tech.trim() }}
                </span>
              </div>
            </div>
          </aside>
        </div>

        <nav class="project-navigation">
          <RouterLink
            v-if="prevProject"
            :to="{ name: 'project-detail', params: { slug: prevProject.slug } }"
            class="nav-link prev"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <div class="nav-text">
              <span class="nav-label">Previous</span>
              <span class="nav-title">{{ prevProject.title }}</span>
            </div>
          </RouterLink>
          <div v-else></div>

          <RouterLink
            v-if="nextProject"
            :to="{ name: 'project-detail', params: { slug: nextProject.slug } }"
            class="nav-link next"
          >
            <div class="nav-text">
              <span class="nav-label">Next</span>
              <span class="nav-title">{{ nextProject.title }}</span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </nav>
      </article>
    </div>

    <!-- Image Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="modal.isOpen" class="modal-overlay" @click="closeModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeModal">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img :src="modal.image" alt="Project screenshot" class="modal-image" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<style lang="scss" scoped>
.detail-page {
  min-height: 100vh;
  padding: var(--space-2xl) 0 var(--space-4xl);
  background-color: var(--color-background);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--space-2xl);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
}

.project-article {
  max-width: 1000px;
  margin: 0 auto;
}

.project-header {
  margin-bottom: var(--space-xl);
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.project-title {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
}

.project-hero {
  margin-bottom: var(--space-2xl);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  cursor: zoom-in;
  transition: transform var(--transition-smooth);

  &:hover {
    transform: scale(1.02);
  }
}

.project-content {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);
}

.content-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.content-section {
  .section-title {
    font-size: 1.125rem;
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-md);
  }
}

.project-description {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-md);
}

.gallery-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: zoom-in;
  transition: all var(--transition-base);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.content-sidebar {
  position: sticky;
  top: var(--space-xl);
  height: fit-content;
}

.sidebar-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}

.sidebar-title {
  font-size: 0.875rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.tech-item {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
}

.project-navigation {
  display: flex;
  justify-content: space-between;
  gap: var(--space-lg);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--color-border);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  max-width: 45%;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }

  &.prev {
    text-align: left;
  }

  &.next {
    text-align: right;
    margin-left: auto;
  }

  svg {
    color: var(--color-text-muted);
    flex-shrink: 0;
  }
}

.nav-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
}

.nav-title {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

// Modal
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: var(--space-xl);
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.modal-close {
  position: absolute;
  top: calc(-1 * var(--space-xl));
  right: 0;
  color: var(--color-text-primary);
  padding: var(--space-sm);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
}

.modal-image {
  max-width: 100%;
  max-height: 85vh;
  border-radius: var(--radius-lg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Responsive
@media (max-width: 768px) {
  .project-content {
    grid-template-columns: 1fr;
  }

  .content-sidebar {
    position: static;
    order: -1;
  }

  .project-navigation {
    flex-direction: column;
  }

  .nav-link {
    max-width: 100%;
  }
}
</style>
