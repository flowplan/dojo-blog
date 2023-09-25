import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComputedValues from '../views/ComputedValues.vue'
import PropsValue from '../views/PropsValue.vue'
import DataFetch from '../views/DataFetch.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/compute',
    name: 'computed',
    component: ComputedValues
  },
  {
    path: '/props',
    name: 'props',
    component: PropsValue
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: DataFetch
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
