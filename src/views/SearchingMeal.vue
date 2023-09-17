<template>
  <div class="container">
    <div class="bar">
      <div class="input-bar">
        <input
          v-model="searchQuery"
          @keyup.enter="searchMeals"
          placeholder="Search for a meal"
          list="meals"
          @dblclick="clearInput"
        />
        <AppButton @click="searchMeals" class="search-button">
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
      <MealItem v-if="store.searchedMeals.length > 0" :meal="store.searchedMeals[0]" />
      <p class="no-matching" v-else>No matching meals found.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { useRecipeStore } from '../stores/recipeStore'
import MealItem from '../components/MealItem.vue'
import AppButton from '../components/AppButton.vue'
import { debounce } from '../api/debounce'
export default {
  components: {
    MealItem,
    AppButton
  },
  setup() {
    const store = useRecipeStore()
    const searchQuery = ref('')
    const showResults = ref(false)
    const showSuggestion = ref(false)

    const searchMeals = () => {
      if (searchQuery.value !== '') {
        store.searchMeals(searchQuery.value)
        showResults.value = true
        showSuggestion.value = true
      } else {
        showResults.value = false
      }
    }

    const debouncedSearchMeals = debounce(searchMeals, 500)

    watch(searchQuery, () => {
      debouncedSearchMeals()
    })

    const selectAndClose = (meal) => {
      searchQuery.value = meal.strMeal
      showSuggestion.value = false
    }

    const selectMeal = (meal) => {
      searchQuery.value = meal.strMeal
      showResults.value = false
      showSuggestion.value = false
    }

    const clearInput = () => {
      searchQuery.value = ''
    }

    const animateSearchBar = () => {
      gsap.from('.bar', {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power2.out'
      })
    }

    onMounted(() => {
      animateSearchBar()
    })

    return {
      store,
      searchQuery,
      searchMeals,
      showResults,
      showSuggestion,
      clearInput,
      animateSearchBar,
      debounce,
      debouncedSearchMeals,
      selectMeal,
      selectAndClose
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/pages/SearchingMeal.scss';
</style>
