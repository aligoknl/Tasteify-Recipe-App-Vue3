<template>
  <div class="hero-content">
    <h1 ref="heroTitleRef" class="hero-title">{{ heroTitle }}</h1>
    <h2 ref="heroSubtitleRef" class="hero-subtitle">{{ heroSubtitle }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const { heroTitle, heroSubtitle } = defineProps({
  heroTitle: {
    required: true,
    type: String
  },
  heroSubtitle: {
    required: false,
    type: String
  }
})

const heroTitleRef = ref(null)
const heroSubtitleRef = ref(null)

const timeline = gsap.timeline()

const animateElements = () => {
  if (heroTitleRef.value || heroSubtitleRef.value) {
    timeline
      .from(heroTitleRef.value, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
      })
      .from(
        heroSubtitleRef.value,
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
