<template>
  <button @click="handleButtonClick" :class="customClass">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

// Define an 'emit' function to emit custom events
const emit = defineEmits(['onClicked'])

const { customClass } = defineProps({
  customClass: String
})

// Function to handle button click and emit the custom event
const handleButtonClick = () => {
  emit('onClicked')
}
</script>

<style lang="scss" scoped>
@import '../styles/components/AppButton.scss';
</style>
