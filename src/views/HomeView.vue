<template>
  <div>
    <div class="p-8 pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <MealList :meals="meals" />
    <AppButton
      @onClicked="getRandomMeal"
      class="mt-12 mb-50 lg:mt-24"
      color="bg-clrRed text-clrWhite hover:bg-clrBlack transition transition-all"
      >Generate New Recipe</AppButton
    >
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
