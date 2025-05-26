import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { registerGlobalComponents } from "./utils/import"
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import HighchartsVue from 'highcharts-vue'
import Editor from '@tinymce/tinymce-vue'

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);


const app = createApp(App)
registerGlobalComponents(app)
app.component("v-icon", OhVueIcon);
app.component('Editor', Editor)
app.use(ElementPlus)
app.use(router)
app.use( VueSplide );
app.use(HighchartsVue)
app.mount('#app')
