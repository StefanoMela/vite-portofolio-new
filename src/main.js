import { createApp } from 'vue'
import App from './App.vue'

import {router} from './router/index.js'

// import GSAP for animations
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


// import Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaRegularHandPointDown } from "oh-vue-icons/icons";
import { HiArrowNarrowRight } from "oh-vue-icons/icons";
addIcons(FaRegularHandPointDown, HiArrowNarrowRight);


// import style
import './assets/css/style.scss'
import './assets/css/reset.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App)
.use(router)
.component("v-icon", OhVueIcon)
.mount('#app')