import { defineStore } from 'pinia'
import { fetchData } from '../api/fetchData'

export const useRecipeStore = defineStore({
  id: 'recipeStore',
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: {}
  }),
  actions: {
    async searchMeals(keyword) {
      const meals = await fetchData(`search.php?s=${keyword}`)
      this.setSearchedMeals(meals)
    },

    async searchMealsByLetter(letter) {
      const meals = await fetchData(`search.php?f=${letter}`)
      this.setMealsByLetter(meals)
    },

    async searchMealsByIngredient(ing) {
      const meals = await fetchData(`filter.php?i=${ing}`)
      this.setMealsByIngredients(meals)
    },

    setSearchedMeals(meals) {
      this.searchedMeals = meals || []
    },

    setMealsByLetter(meals) {
      this.mealsByLetter = meals || []
    },

    setMealsByIngredients(meals) {
      this.mealsByIngredient = meals || []
    },

    setIngredient(ingredient) {
      this.ingredient = ingredient
    }
  }
})
