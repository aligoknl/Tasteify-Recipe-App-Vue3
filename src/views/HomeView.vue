<template>
  <div class="container">
    <div class="hero-background">
      <HeroSection
        heroTitle="Exploring Taste, One Recipe at a Time"
        heroSubtitle="Delightful Recipes Await Your Culinary Magic"
      />
    </div>
    <div class="random-container">
      <div class="random-content">
        <h1 class="random-title">Discover Your Daily Delight</h1>
        <h2 class="random-subtitle">Let's Roll the Dice for Dinner!</h2>
        <div class="random-button">
          <AppButton @onClicked="getRandomMeal" customClass="random-button"
            >Bring New Recipe</AppButton
          >
        </div>
      </div>
      <div class="random-card">
        <MealList :meals="meals" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MealList from '../components/MealList.vue'
import HeroSection from '../components/HeroSection.vue'
import AppButton from '../components/AppButton.vue'
import axiosClient from '../config/axiosClient.js'
import { gsap } from 'gsap'

const timeline = gsap.timeline()
const meals = ref([])

const getRandomMeal = async () => {
  try {
    const { data } = await axiosClient.get('random.php')
    meals.value = [data.meals[0]]
  } catch (error) {
    console.error(error)
  }
}

const animateElements = () => {
  const randomContainer = document.querySelector('.random-container')
  if (randomContainer) {
    timeline.from(
      randomContainer,
      {
        opacity: 0,
        y: 50,
        duration: 3,
        ease: 'power0.in'
      },
      '-=0.5'
    )
    getRandomMeal()
  }
}

onMounted(() => {
  animateElements()
})
</script>

<style lang="scss" scoped>
@import '../styles/pages/HomeView.scss';
</style>
