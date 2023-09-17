<template>
  <div class="container">
    <div class="bar">
      <input
        v-model="searchQuery"
        @keyup.enter="searchMeals"
        placeholder="Search for a meal"
        list="meals"
        @click="clearInput"
      />
      <datalist id="meals">
        <option v-for="meal in store.searchedMeals" :key="meal.idMeal">{{ meal.strMeal }}</option>
      </datalist>
      <AppButton @click="searchMeals" class="search-button">
        <span class="material-icons">search</span>
      </AppButton>
    </div>
    <div v-if="showResults" class="results">
      <MealItem v-if="store.searchedMeals.length > 0" :meal="store.searchedMeals[0]" />
      <p class="no-matching" v-else>No matching meals found.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useRecipeStore } from '../stores/recipeStore'
import MealItem from '../components/MealItem.vue'
import AppButton from '../components/AppButton.vue'

export default {
  components: {
    MealItem,
    AppButton
  },
  setup() {
    const store = useRecipeStore()
    const searchQuery = ref('')
    const showResults = ref(false)

    const searchMeals = () => {
      if (searchQuery.value !== '') {
        store.searchMeals(searchQuery.value)
        showResults.value = true
      } else {
        showResults.value = false
      }
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

    const animateResult = () => {
      gsap.from('.results', {
        opacity: 0,
        y: -50,
        duration: 3,
        ease: 'power2.out',
        onComplete: () => {
          console.log('hello')
        }
      })
      console.log('sdgsdg')
    }

    onMounted(() => {
      animateSearchBar()
    })

    return {
      store,
      searchQuery,
      searchMeals,
      showResults,
      clearInput,
      animateSearchBar,
      animateResult
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/pages/SearchingMeal.scss';
</style>
