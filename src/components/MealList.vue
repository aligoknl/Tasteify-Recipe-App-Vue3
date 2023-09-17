<template>
  <div>
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import MealItem from './MealItem.vue'

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array
  }
})
</script>
