import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/main.css"
import route from "./routes/route"

// font awesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { faD, faS, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(faS);
library.add(far);
library.add(faD);


const app = createApp(App)
app.use(route)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app')
