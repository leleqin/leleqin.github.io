import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { SvgIcon } from '@/components'
import '../public/iconfont.js'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router)
app.mount('#app')
