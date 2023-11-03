import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPatient from '../views/AddPatient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add_patient',
      name: 'addPatient',
      component: AddPatient
    }
  ]
})

export default router
