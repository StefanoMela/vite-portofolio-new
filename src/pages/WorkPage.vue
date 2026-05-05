<script>
import WorkCard from "../components/WorkCard.vue";
import { store } from "../data/store";
import { OhVueIcon } from "oh-vue-icons";

export default {
  data() {
    return {
      store,
      selectedFilter: "All",
      filters: ["All", "HTML", "CSS", "JS", "Vue", "Laravel"],
    };
  },
  components: { WorkCard, "v-icon": OhVueIcon },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === "All") {
        return this.store.projectList;
      }
      return this.store.projectList.filter((project) =>
        project.techs.some((tech) => tech.trim() === this.selectedFilter)
      );
    },
  },
  methods: {
    setFilter(filter) {
      this.selectedFilter = filter;
    },
  },
};
</script>

<template>
  <main class="works-page">
    <header class="page-header">
      <div class="container">
        <RouterLink :to="{ name: 'landing' }" class="back-link">
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
          <span>Home</span>
        </RouterLink>

        <div class="header-content">
          <span class="section-label font-display">Portfolio</span>
          <h1 class="page-title font-display">Selected Works</h1>
          <p class="page-description">
            A collection of projects I&apos;ve built, from full-stack applications to
            frontend experiments.
          </p>
        </div>

        <div class="filters">
          <span class="filter-label">Filter by:</span>
          <div class="filter-buttons">
            <button
              v-for="filter in filters"
              :key="filter"
              :class="['filter-btn', { active: selectedFilter === filter }]"
              @click="setFilter(filter)"
            >
              {{ filter }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <section class="works-grid-section">
      <div class="container">
        <div class="projects-count">
          <span>{{ filteredProjects.length }} projects</span>
        </div>

        <TransitionGroup name="fade" tag="div" class="works-grid">
          <WorkCard
            v-for="project in filteredProjects"
            :key="project.slug"
            :project="project"
            :isDetail="false"
          />
        </TransitionGroup>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.works-page {
  min-height: 100vh;
  background-color: var(--color-background);
}

.page-header {
  padding: var(--space-3xl) 0 var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--space-xl);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
}

.header-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-2xl);
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

.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--space-md);
}

.page-description {
  color: var(--color-text-secondary);
  font-size: 1.0625rem;
  line-height: 1.7;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.filter-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
}

.filter-btn {
  padding: var(--space-sm) var(--space-md);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--color-text-muted);
    color: var(--color-text-primary);
  }

  &.active {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-background);
  }
}

.works-grid-section {
  padding: var(--space-2xl) 0 var(--space-4xl);
}

.projects-count {
  margin-bottom: var(--space-lg);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-xl);
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-move {
  transition: transform 0.3s ease;
}

// Responsive
@media (max-width: 768px) {
  .page-header {
    padding: var(--space-2xl) 0 var(--space-xl);
  }

  .filters {
    flex-direction: column;
    gap: var(--space-md);
  }

  .works-grid {
    grid-template-columns: 1fr;
  }
}
</style>
