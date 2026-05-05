# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```

No linting or test setup exists in this project.

## Architecture

Single-page Vue 3 portfolio app using the **Options API** (not Composition API) throughout.

### Routing (`src/router/index.js`)

Three routes via `vue-router` with `createWebHistory`:
- `/` → `LandingPage` (Hero + About sections)
- `/works` → `WorkPage` (filterable project grid)
- `/works/:slug` → `DetailPage` (project detail, matched by slug)

### Data (`src/data/store.js`)

A single `reactive` store exported as `store`. All project data lives here as a `projectList` array — there is no backend or API. Each project has: `thumb`, `title`, `techs`, `slug`, `brief`, and optionally `gallery`. Project thumbnails reference `/public/work-bg/` paths (served from `public/`).

### Pages & Components

- `LandingPage` composes `HeroComponent` + `AboutComponent`
- `WorkPage` filters/sorts `store.projectList` locally and renders `WorkCard` components
- `DetailPage` finds the matching project by `$route.params.slug` from the store

### Styling

- **Global**: Bootstrap 5 (imported via SCSS in `style.scss`), Poppins and Raleway fonts from Google Fonts, CSS reset in `reset.scss`
- **Per-component**: scoped SCSS blocks inside each `.vue` file
- **Brand color**: `#cc0029` (red accent used for links, highlights)
- **Typography classes**: `poppins-bold`, `poppins-extrabold`, `poppins-black`, `raleway-reg`

### Icons (`main.js`)

Icons from `oh-vue-icons` are registered globally in `main.js` via `addIcons(...)` and used as `<v-icon name="..." />`. Any new icon must be imported and added to `addIcons()` in `main.js`.

### Animations

GSAP with `ScrollTrigger` is registered globally in `main.js`. Animations are applied inside individual components.
