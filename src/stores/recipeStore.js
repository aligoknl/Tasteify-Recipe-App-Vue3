import { defineStore } from 'pinia'
import { fetchData } from '../api/fetchData'

export const useRecipeStore = defineStore({
  id: 'recipeStore',
  state: () => ({
    searchedMeals: [],
    mealsByCategory: [],
    categories: []
  }),
  actions: {
    async searchMeals(keyword) {
      const meals = await fetchData(`search.php?s=${keyword}`)
      this.setSearchedMeals(meals)
    },
    async searchMealsByCategory(category) {
      const meals = await fetchData(`filter.php?c=${category}`)
      this.setMealsByCategory(meals)
    },
    setSearchedMeals(meals) {
      this.searchedMeals = meals || []
    },
    setMealsByCategory(meals) {
      this.mealsByCategory = meals || []
    },
    setCategories(categories) {
      this.categories = categories || []
    }
  }
})
