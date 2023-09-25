<template>
  <aside :class="{ 'is-expanded': isExpanded }">
    <div class="logo">
      <MealLink :routeName="'home'"> <img :src="logoURL" alt="Tasteify" /> </MealLink>
    </div>
    <div class="menu-toggle-wrap">
      <AppButton @onClicked="toggleMenu" customClass="menu-toggle">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </AppButton>
    </div>
    <h3 class="menu-title">Menu</h3>
    <div class="menu">
      <MealLink :customClass="'button'" :routeName="'home'">
        <span class="material-icons">home</span> <span class="text">Home</span></MealLink
      >
      <MealLink :customClass="'button'" :routeName="'searching'" data-cy="search-icon">
        <span class="material-icons">search</span>
        <span class="text">Search</span></MealLink
      >
      <MealLink :customClass="'button'" :routeName="'categories'" data-cy="category-icon">
        <span class="material-icons">category</span>
        <span class="text">Categories</span></MealLink
      >
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import MealLink from './MealLink.vue'
import AppButton from './AppButton.vue'
import logoURL from '/logo.png'

// A reactive variable to track whether the sidebar is expanded or collapsed
const isExpanded = ref(false)

// Function to toggle the menu's expanded state
const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style lang="scss" scoped>
@import '../styles/components/SideBar.scss';
</style>
