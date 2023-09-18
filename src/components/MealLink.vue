<template>
  <router-link :to="to" :class="customClass">
    <slot></slot>
  </router-link>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  customClass: String,
  routeName: String
})

const to = ref({ name: props.routeName, params: { id: props.id } })
</script>

<style scoped></style>
