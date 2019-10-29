import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Customers from './components/Customers.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{
      path: "/",
      component: Customers
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/add",
      component: Add
    },
    {
      path: "/customer/:id", 
      component: CustomerDetails
    },
    {
      path: "/edit/:id",
      component: Edit
    }
  ]
})

new Vue({
  router,
  render: h =>h(App)
}).$mount('#app')