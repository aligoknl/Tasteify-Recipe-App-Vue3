<template>
  <div class="container">
    <h1 class="title">Random Meals</h1>
    <div class="card-container">
      <MealList :meals="meals" />
    </div>
    <AppButton @onClicked="getRandomMeal" customClass="mybtn">Bring New Recipe</AppButton>
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
    console.log(meals.value)
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getRandomMeal()
})
</script>
<style lang="scss" scoped>
@import '../assets/styles/pages/HomeView.scss';
</style>
