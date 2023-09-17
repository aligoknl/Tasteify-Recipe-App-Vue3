<template>
  <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <router-link to="/">
        <img :src="logoURL" alt="Tasteify" />
      </router-link>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle btn" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3 class="menu-title">Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/searchMeal" class="button" data-cy="search-icon">
        <span class="material-icons">search</span>
        <span class="text">Search</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '/logo.png'

const isExpanded = ref(false)

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/SideBar.scss';
</style>
