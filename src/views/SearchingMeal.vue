<template>
  <div>
    <div>
      <input v-model="searchQuery" @keyup.enter="clearInput" placeholder="Search for a meal" />
      <button @click="searchMeals">Get Results</button>
    </div>
    <div v-if="showResults">
      <MealItem v-if="store.searchedMeals.length > 0" :meal="store.searchedMeals[0]" />
      <p v-else>No matching meals found.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'
import MealItem from '../components/MealItem.vue'

export default {
  components: {
    MealItem
  },
  setup() {
    const store = useRecipeStore()
    const searchQuery = ref('')
    const showResults = ref(false)

    const searchMeals = () => {
      if (searchQuery.value !== '') {
        store.searchMeals(searchQuery.value)
        showResults.value = true
        showResults.value - ''
      } else {
        showResults.value = false
      }
    }

    return {
      store,
      searchQuery,
      searchMeals,
      showResults
    }
  }
}
</script>
