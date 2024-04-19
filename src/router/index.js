import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue';
import WorkPage from '../pages/WorkPage.vue';
import DetailPage from '../pages/DetailPage.vue';


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
        {
            path: '/works/:slug/',
            name: 'project-detail',
            component: DetailPage,
        },
    ],
    scrollBehavior(){
        return {top: 0}
    }
});

export { router };