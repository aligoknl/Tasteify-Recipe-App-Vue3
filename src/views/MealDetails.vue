<template>
  <div class="container">
    <h1 class="title" data-cy="meal-title">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="image" />
    <div class="subtitles">
      <div><strong class="">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="">Origin:</strong> {{ meal.strArea }}</div>
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
      <AppButton @onClicked="openLink(meal.strSource)"> View Original Source </AppButton>
      <AppButton @onClicked="openLink(meal.strYoutube)"> Watch on Youtube </AppButton>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../config/axiosClient'
import AppButton from '../components/AppButton.vue'
import { gsap } from 'gsap'

const route = useRoute()
const meal = ref({})

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

const openLink = (link) => {
  window.open(link, '_blank')
}

const animateContainer = () => {
  gsap.from('.container', {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: 'power2.out'
  })
}

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {}
  })
  animateContainer()
})
</script>
<style lang="scss" scoped>
@import '../assets/styles/pages/MealDetail.scss';
</style>
