import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'
import ItemsListPage from '../pages/ItemsListPage.vue'
import ItemDetailsPage from '../pages/ItemDetailsPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage
      },
      {
        path: '/items',
        name: 'ItemsList',
        component: ItemsListPage
      },
      {
        path: '/items/:id',
        name: 'ItemDetails',
        component: ItemDetailsPage,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router