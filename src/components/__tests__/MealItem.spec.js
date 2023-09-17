import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MealItem from '@/components/MealItem.vue'

describe('MealItem', () => {
  it('renders the meal details', async () => {
    const meal = {
      idMeal: '1',
      strMealThumb: 'test-image.jpg',
      strMeal: 'Test Meal',
      strCategory: 'Test Category',
      strArea: 'Test Area'
    }

    const wrapper = mount(MealItem, {
      props: {
        meal
      }
    })

    // Check if the meal details are rendered correctly
    expect(wrapper.find('.meal-title').text()).toBe(meal.strMeal)
    expect(wrapper.find('.meal-image').attributes('src')).toBe(meal.strMealThumb)
    expect(wrapper.find('.meal-category').text()).toBe(meal.strCategory)
    expect(wrapper.find('.meal-area').text()).toBe(meal.strArea)
  })
})
