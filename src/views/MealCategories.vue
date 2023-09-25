<template>
  <div class="container">
    <HeroSection
      class="hero-section"
      heroTitle="Picking Your Food Mood"
      heroSubtitle="Dive into Deliciousness"
    />
    <AnimatedContainer :animatedContainer="'categories'">
      <div class="categories">
        <div class="category" v-for="category in categories" :key="category.strCategory">
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
import MealLink from '../components/MealLink.vue'
import HeroSection from '../components/HeroSection.vue'
import AnimatedContainer from '../components/AnimatedContainer.vue'
import { useRecipeStore } from '../stores/recipeStore'

const store = useRecipeStore()

const categories = ref([])

// Fetch and populate all categories
const fetchCategories = async () => {
  await store.getCategories()
  categories.value = store.categories
}

onMounted(() => {
  fetchCategories()
})
</script>

<style lang="scss" scoped>
@import '../styles/pages/MealCategories.scss';
</style>
