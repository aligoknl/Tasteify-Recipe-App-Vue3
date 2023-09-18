<template>
  <div class="container">
    <div class="bar">
      <div class="input-bar">
        <input
          v-model="searchQuery"
          placeholder="Search for a meal"
          list="meals"
          @dblclick="clearInput"
        />
        <AppButton class="search-button">
          <span class="material-icons">search</span>
        </AppButton>
      </div>
      <div class="suggestion-box" v-if="showSuggestion">
        <div
          v-for="meal in store.searchedMeals"
          :key="meal.idMeal"
          class="suggestion-item"
          @click="selectAndClose(meal)"
        >
          {{ meal.strMeal }}
        </div>
      </div>
    </div>
    <div v-if="showResults" class="results">
      <MealItem v-if="mealSelected && store.searchedMeals.length > 0" :meal="selectedMeal" />
      <p class="no-matching" v-if="store.searchedMeals.length === 0">No matching meals found.</p>
    </div>
    <HeroSection
      class="hero-section"
      v-if="!showResults"
      heroTitle="Discover the Art of Cooking"
      heroSubtitle="Savor the Flavors of Delicious Cuisine"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'
import MealItem from '../components/MealItem.vue'
import AppButton from '../components/AppButton.vue'
import HeroSection from '../components/HeroSection.vue'

const store = useRecipeStore()
const searchQuery = ref('')
const showResults = ref(false)
const showSuggestion = ref(false)
const mealSelected = ref(false)
const selectedMeal = ref(null)

// Function to search for meals based on the search query
const searchMeals = () => {
  if (searchQuery.value !== '') {
    store.searchMeals(searchQuery.value)
    showResults.value = true
    showSuggestion.value = true
  } else {
    showResults.value = false
  }
}

// Function to select a meal from the suggestion list and close the suggestions
const selectAndClose = (meal) => {
  mealSelected.value = true
  selectedMeal.value = meal
  searchQuery.value = meal.strMeal
  setTimeout(() => {
    showSuggestion.value = false
  }, 1)
}

// Watch for changes in the searchQuery and trigger searchMeals function
watch(searchQuery, () => {
  searchMeals()
})

// Function to clear the search input
const clearInput = () => {
  searchQuery.value = ''
}
</script>

<style lang="scss" scoped>
@import '../styles/pages/SearchingMeal.scss';
</style>
