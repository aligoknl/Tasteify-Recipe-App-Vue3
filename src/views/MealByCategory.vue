<template>
  <div class="container">
    <div class="hero-background">
      <HeroSection
        heroTitle="Exploring Taste, One Recipe at a Time"
        heroSubtitle="Delightful Recipes Await Your Culinary Magic"
      />
    </div>
    <AnimatedContainer :animatedContainer="'meal-cards'">
      <div class="meal-cards">
        <MealList class="meal-cards" :meals="meals" />
      </div>
    </AnimatedContainer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MealList from '../components/MealList.vue'
import HeroSection from '../components/HeroSection.vue'
import AnimatedContainer from '../components/AnimatedContainer.vue'
import { useRecipeStore } from '../stores/recipeStore'
import { useRoute } from 'vue-router'

const store = useRecipeStore()
const route = useRoute()

const meals = ref([])

// Fetch and populate meals based on the selected category using the store action
onMounted(async () => {
  try {
    await store.searchMealsByCategory(route.params.id)
    meals.value = store.mealsByCategory
  } catch (error) {
    console.error(error)
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/pages/MealByCategory.scss';
</style>
