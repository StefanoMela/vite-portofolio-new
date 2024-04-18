import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue';
import WorkPage from '../pages/WorkPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
        },
        {
            path: '/works',
            name: 'works',
            component: WorkPage,
        },
    ],
    scrollBehavior(){
        return {top: 0}
    }
});

export { router };