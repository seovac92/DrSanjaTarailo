import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faChartBar)
library.add(faFacebook)
library.add(faInstagram)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
