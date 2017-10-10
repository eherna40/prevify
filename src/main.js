import Vue from 'vue'
import App from './App.vue'

import EventBus from './components/plugins/event-bus'

Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
