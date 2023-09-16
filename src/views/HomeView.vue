<template>
  <div class="container">
    <div class="">
      <h1 class="">Random Meals</h1>
    </div>
    <MealList :meals="meals" />
    <AppButton @onClicked="getRandomMeal" customClass="mybtn" color="">Bring New Recipe</AppButton>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MealList from '../components/MealList.vue'
import AppButton from '../components/AppButton.vue'
import axiosClient from '../config/axiosClient.js'

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
  getRandomMeal()
})
</script>
<style lang="scss">
@import '../styles/pages/HomeView.scss';
</style>
