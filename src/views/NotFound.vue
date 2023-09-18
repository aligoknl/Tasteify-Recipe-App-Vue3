<template>
  <main class="container">
    <h1 class="title">4 <span class="material-icons">icecream</span> 4</h1>
    <div class="text">Page Not Found</div>
    <MealLink :customClass="'text'" :routeName="'home'">
      <span class="material-icons">home</span>
      <span>Back Home</span></MealLink
    >
  </main>
</template>

<script setup>
import MealLink from '../components/MealLink.vue'
</script>
<style lang="scss" scoped>
@import '../styles/pages/NotFound.scss';
</style>
