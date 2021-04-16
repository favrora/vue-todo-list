import Vue from 'vue'
import VueRouter from 'vue-router'
import EditPage from '../page/EditPage'
import MainPage from '../page/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage
  },
  {
    path: '/edit-page',
    name: 'edit-page',
    component: EditPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router