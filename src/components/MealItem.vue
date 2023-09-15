<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-48 object-cover"
    />
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ meal.strInstructions }}
      </p>
    </div>
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
