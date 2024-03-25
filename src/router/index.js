import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue';
import ContactPage from '../pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
    ]
});

export { router };