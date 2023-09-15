<template>
  <button
    @click="handleButtonClick"
    class="px-12 py-4 transition-all focus:outline-none active:outline-none shadow-card"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['onClicked'])

const handleButtonClick = () => {
  emit('onClicked')
}
</script>

<style lang="scss">
@import '../styles//components//AppButton.scss';
</style>
