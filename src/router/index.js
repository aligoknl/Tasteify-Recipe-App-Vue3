import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchingMeal from '../views/SearchingMeal.vue'
import MealDetails from '../views/MealDetails.vue'
import MealCategories from '../views/MealCategories.vue'
import MealByCategory from '../views/MealByCategory.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/searchMeal',
    name: 'searching',
    component: SearchingMeal
  },
  {
    path: '/mealCategories',
    name: 'categories',
    component: MealCategories
  },
  {
    path: '/by-category/:id?',
    name: 'byCategory',
    component: MealByCategory
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component: MealDetails
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
