<template>
  <button @click="handleButtonClick" :class="customClass">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['onClicked'])
const customClass = ref('')
const handleButtonClick = () => {
  emit('onClicked')
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/AppButton.scss';
</style>
