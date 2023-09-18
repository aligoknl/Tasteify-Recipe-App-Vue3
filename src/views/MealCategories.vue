<template>
  <div class="container">
    <HeroSection
      class="hero-section"
      heroTitle="Picking Your Food Mood"
      heroSubtitle="Dive into Deliciousness"
    />
    <AnimatedContainer :animatedContainer="'categories'">
      <div class="categories">
        <div class="category" v-for="category in flattenedCategories" :key="category.strCategory">
          <MealLink
            :customClass="'category-link'"
            :id="category.strCategory"
            :routeName="'byCategory'"
          >
            <h1 class="category-name">{{ category.strCategory }}</h1>
          </MealLink>
        </div>
      </div>
    </AnimatedContainer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '../config/axiosClient'
import MealLink from '../components/MealLink.vue'
import HeroSection from '../components/HeroSection.vue'
import AnimatedContainer from '../components/AnimatedContainer.vue'
import { useRecipeStore } from '../stores/recipeStore'

const store = useRecipeStore()

// Create a computed property for flattened categories
const flattenedCategories = ref([])

// Fetch and populate categories from the API
onMounted(async () => {
  try {
    const response = await axiosClient.get(`list.php?c=list`)
    const categoriesData = response.data.meals.flatMap((category) => category)
    flattenedCategories.value = categoriesData
    // Update the store's state with the fetched data
    store.setCategories(categoriesData)
  } catch (error) {
    console.error('An error occurred while fetching categories:', error)
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/pages/MealCategories.scss';
</style>
