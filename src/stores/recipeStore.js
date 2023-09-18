import { defineStore } from 'pinia'
import { fetchData } from '../api/fetchData'

export const useRecipeStore = defineStore({
  id: 'recipeStore',
  state: () => ({
    searchedMeals: []
  }),
  actions: {
    async searchMeals(keyword) {
      const meals = await fetchData(`search.php?s=${keyword}`)
      this.setSearchedMeals(meals)
    },
    setSearchedMeals(meals) {
      this.searchedMeals = meals || []
    }
  }
})
