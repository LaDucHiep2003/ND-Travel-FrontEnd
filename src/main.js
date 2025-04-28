import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import './assets/css/input.css'
import { registerGlobalComponents } from "./utils/import"
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);


const app = createApp(App)
registerGlobalComponents(app)
app.component("v-icon", OhVueIcon);
app.use(ElementPlus)
app.use(router)
app.use( VueSplide );
app.mount('#app')
