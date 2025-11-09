import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ui from '@nuxt/ui/vue-plugin'

/* add icons to the library */
library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(ui)
app.mount('#app')