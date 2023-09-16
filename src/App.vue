<template>
  <div>
    <SideBar />
    <router-view />
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
