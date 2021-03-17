import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

// put .use(store) to let Vue utilize the store that you created
createApp(App).use(store).mount('#app')
