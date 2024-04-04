import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import WorkPage from '../pages/WorkPage.vue';
import AboutPage from "../pages/AboutPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
        {
            path: '/works',
            name: 'works',
            component: WorkPage,
        },
    ]
});

export { router };