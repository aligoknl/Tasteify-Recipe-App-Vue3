<template>
  <div class="hero-content">
    <h1 class="hero-title">{{ heroTitle }}</h1>
    <h2 class="hero-subtitle">{{ heroSubtitle }}</h2>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const { heroTitle } = defineProps({
  heroTitle: {
    required: true,
    type: String
  },
  heroSubtitle: {
    required: false,
    type: String
  }
})

const timeline = gsap.timeline()

const animateElements = () => {
  const heroTitle = document.querySelector('.hero-title')
  const heroSubtitle = document.querySelector('.hero-subtitle')

  if (heroTitle || heroSubtitle) {
    timeline
      .from(heroTitle, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
      })
      .from(
        heroSubtitle,
        {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: 'power2.out'
        },
        '-=0.5'
      )
  }
}

onMounted(() => {
  animateElements()
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/HeroSection.scss';
</style>
