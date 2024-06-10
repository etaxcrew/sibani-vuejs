import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

//import store vuex
import store from './store'

const app = createApp(App)

//gunakan router di vue js dengan plugin "use"
app.use(router)
app.use(store)


app.mount('#app')