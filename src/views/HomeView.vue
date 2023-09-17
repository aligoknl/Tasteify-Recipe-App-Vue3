<template>
  <div class="container">
    <div class="hero-background">
      <div class="hero-content">
        <h1 class="hero-title">Exploring Taste, One Recipe at a Time</h1>
        <h2 class="hero-subtitle">Delightful Recipes Await Your Culinary Magic</h2>
      </div>
    </div>
    <div class="random-container">
      <div class="random-content">
        <h1 class="random-title">Discover Your Daily Delight</h1>
        <h2 class="random-subtitle">Let's Roll the Dice for Dinner!</h2>
        <div class="random-button">
          <AppButton @onClicked="getRandomMeal" customClass="mybtn">Bring New Recipe</AppButton>
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

onMounted(() => {
  const heroTitle = document.querySelector('.hero-title')
  const heroSubtitle = document.querySelector('.hero-subtitle')
  const randomContainer = document.querySelector('.random-container')
  if (heroTitle && heroSubtitle && randomContainer) {
    timeline
      .from(heroTitle, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
      })
      .from(
        heroSubtitle,
        {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: 'power2.out'
        },
        '-=0.5'
      )
      .from(
        randomContainer,
        {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: 'power0.in'
        },
        '-=0.5'
      )

    getRandomMeal()
  } else {
    console.error('Hero title or subtitle not found in the DOM.')
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/pages/HomeView.scss';
</style>
