import { defineStore } from 'pinia'
import { fetchData } from '../api/fetchData'

export const useRecipeStore = defineStore({
  id: 'recipeStore',
  state: () => ({
    searchedMeals: [],
    mealsByCategory: [],
    categories: [],
    randomMeal: [],
    meal: []
  }),
  actions: {
    async searchMeals(keyword) {
      try {
        const meals = await fetchData(`search.php?s=${keyword}`)
        this.setSearchedMeals(meals)
      } catch (error) {
        console.error('An error occurred while searching meals:', error)
      }
    },
    async searchMealsByCategory(category) {
      try {
        const meals = await fetchData(`filter.php?c=${category}`)
        this.setMealsByCategory(meals)
      } catch (error) {
        console.error('An error occurred while fetching meals by category:', error)
      }
    },
    async getRandomMeal() {
      try {
        const data = await fetchData('random.php')
        this.setRandomMeal(data)
      } catch (error) {
        console.error('An error occurred while fetching a random meal:', error)
      }
    },
    async getCategories() {
      try {
        const response = await fetchData('list.php?c=list')
        this.setCategories(response)
      } catch (error) {
        console.error('An error occurred while fetching categories:', error)
      }
    },
    async getMealDetail(id) {
      try {
        const meal = await fetchData(`lookup.php?i=${id}`)
        this.setMealDetail(meal[0])
      } catch (error) {
        console.error('An error occurred while fetching meal details:', error)
      }
    },
    setSearchedMeals(meals) {
      this.searchedMeals = meals || []
    },
    setMealsByCategory(meals) {
      this.mealsByCategory = meals || []
    },
    setRandomMeal(randomMeal) {
      this.randomMeal = randomMeal || []
    },
    setCategories(categories) {
      this.categories = categories || []
    },
    setMealDetail(meal) {
      this.meal = meal || []
    }
  }
})
