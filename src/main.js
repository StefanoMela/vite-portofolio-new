import { createApp } from 'vue'
import App from './App.vue'

import {router} from './router/index.js'

// import GSAP for animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// import Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiMegaphone } from "oh-vue-icons/icons";
import { RiCodeSSlashFill } from "oh-vue-icons/icons";
import { CoMinutemailer } from "oh-vue-icons/icons";
import { FaInstagram } from "oh-vue-icons/icons";
import { FaGithub } from "oh-vue-icons/icons";
import { FaLinkedin } from "oh-vue-icons/icons";
import { ViFileTypeHtml } from "oh-vue-icons/icons";
import { ViFileTypeCss } from "oh-vue-icons/icons";
import { ViFileTypeJsOfficial } from "oh-vue-icons/icons";
import { ViFileTypeVue } from "oh-vue-icons/icons";
import { ViFileTypePhp } from "oh-vue-icons/icons";
import { ViFileTypeMysql } from "oh-vue-icons/icons";
import { AiCv } from "oh-vue-icons/icons";
import { BiCodeSlash } from "oh-vue-icons/icons";
addIcons(BiMegaphone, RiCodeSSlashFill, CoMinutemailer, FaInstagram, FaGithub, FaLinkedin, ViFileTypeHtml, ViFileTypeCss, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypePhp, ViFileTypeMysql, AiCv, BiCodeSlash)

// import style
import './assets/css/style.scss'
import './assets/css/reset.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App)
.use(router)
.component("v-icon", OhVueIcon)
.mount('#app')