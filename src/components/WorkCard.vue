<script>
export default {
  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <article class="work-card card-modern">
    <RouterLink
      :to="{
        name: 'project-detail',
        params: { slug: project.slug },
      }"
      class="card-link"
    >
      <div class="card-image">
        <img :src="project.thumb" :alt="project.title" />
        <div class="card-overlay">
          <span class="view-text">View Project</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title font-display">{{ project.title }}</h3>
        <p class="card-brief">{{ project.brief.substring(0, 80) }}...</p>
        <div class="card-techs">
          <span
            v-for="(tech, index) in project.techs"
            :key="index"
            class="badge-tech"
          >
            {{ tech.trim() }}
          </span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
.work-card {
  height: 100%;
}

.card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.card-image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-surface-elevated);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-smooth);
  }

  .work-card:hover & img {
    transform: scale(1.05);
  }
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--space-md);
  gap: var(--space-sm);
  color: var(--color-text-primary);
  opacity: 0;
  transition: opacity var(--transition-base);

  .work-card:hover & {
    opacity: 1;
  }
}

.view-text {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.card-content {
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  flex: 1;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  .work-card:hover & {
    color: var(--color-accent);
  }
}

.card-brief {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  flex: 1;
}

.card-techs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
}
</style>
