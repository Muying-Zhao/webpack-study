import { createApp } from 'vue'
import Home from './Home.vue'

import datav from "muying-rollupvue";

createApp(Home)
.use(datav)
.mount('#app')