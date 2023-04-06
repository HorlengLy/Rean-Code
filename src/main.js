import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import { createWebHistory,createRouter } from 'vue-router'
import Home from "./components/Home.vue"
import Roadmap from "./components/Roadmap.vue"
import AboutUs from "./components/AboutUs.vue"
import Support from "./components/Support.vue"
import Pratice from "./components/Pratice.vue"
import Lesson from "./components/Lesson.vue"
import Contact from "./components/Contact.vue"
// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faD, faS, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const routes = [
    {path:'/',component:Home,name:'home'},
    {path:'/lessons',component:Lesson,name:'lesson'},
    {path:'/roadmap',component:Roadmap,name:'roadmap'},
    {path:'/about_us',component:AboutUs,name:'about'},
    {path:'/support',component:Support,name:'support'}, 
    {path:'/contact',component:Contact,name:'contact'}, 
    {path:'/pratices',component:Pratice,name:'pratice'}, 
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

library.add(fas);
library.add(faS);
library.add(far);
library.add(faD);


const app = createApp(App)
app.use(router)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app')
