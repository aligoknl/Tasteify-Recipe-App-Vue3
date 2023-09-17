<template>
  <div class="meal-card">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-image" />
    <div class="meal-details">
      <h3 class="meal-title">{{ meal.strMeal }}</h3>
      <h5 class="meal-category">{{ meal.strCategory }}</h5>
      <h6 class="meal-area">
        {{ meal.strArea }}
      </h6>
    </div>
    <router-link class="meal-link" :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
      >View Recipe</router-link
    >
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/MealItem.scss';
</style>
