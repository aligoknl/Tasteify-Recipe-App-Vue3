<template>
  <AnimatedContainer :animatedContainer="'container'">
    <div class="mainContainer">
      <div class="container">
        <h1 class="title" data-cy="meal-title">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="image" />
        <div class="subtitles">
          <div><strong class="subtitle">Category:</strong> {{ meal.strCategory }}</div>
          <div><strong class="subtitle">Origin:</strong> {{ meal.strArea }}</div>
        </div>
        <div class="recipe">
          {{ meal.strInstructions }}
        </div>
        <div class="ingredient-container">
          <h2 class="ingredient-title">Ingredients</h2>
          <ul class="ingredient">
            <li class="list-item" v-for="(ingredient, index) of filteredIngredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <div class="links">
          <AppButton v-if="meal.strSource" @onClicked="openLink(meal.strSource)">
            View Original Source
          </AppButton>
          <AppButton v-if="meal.strYoutube" @onClicked="openLink(meal.strYoutube)">
            Watch on Youtube
          </AppButton>
        </div>
      </div>
    </div>
  </AnimatedContainer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
//import axiosClient from '../config/axiosClient'
import AppButton from '../components/AppButton.vue'
import AnimatedContainer from '../components/AnimatedContainer.vue'
import { useRecipeStore } from '../stores/recipeStore'

const store = useRecipeStore()
const route = useRoute()
const meal = ref({})

// Computed property to filter and format ingredients
const filteredIngredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`]
    const measure = meal.value[`strMeasure${i}`]
    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`)
    }
  }
  return ingredients
})
// Function to open links in a new tab/window
const openLink = (link) => {
  window.open(link, '_blank')
}

const getMealDetail = async () => {
  await store.getMealDetail(route.params.id)
  meal.value = store.meal
}

// Fetch meal details from the API on component mount
onMounted(async () => {
  getMealDetail()
})
</script>
<style lang="scss" scoped>
@import '../styles/pages/MealDetail.scss';
</style>
