<template>
  <div :class="animatedContainer" ref="container">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const { animatedContainer } = defineProps({
  animatedContainer: String
})

const container = ref(null)

const animateElement = () => {
  const timeline = gsap.timeline()
  // Animate the container element's opacity and position
  timeline.from(container.value, {
    opacity: 0,
    y: -50,
    duration: 2,
    ease: 'power2.out'
  })
}

// Run the animation when the component is mounted
onMounted(animateElement)
</script>
