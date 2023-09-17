<template>
  <button @click="handleButtonClick" :class="customClass">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['onClicked'])
const { customClass } = defineProps(['customClass'])
const handleButtonClick = () => {
  emit('onClicked')
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/AppButton.scss';
</style>
