import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppButton from '../AppButton.vue'

describe('AppButton', () => {
  it('emits the "onClicked" event when the button is clicked', async () => {
    const wrapper = mount(AppButton)

    // Find the button element and trigger a click event
    const button = wrapper.find('button')
    await button.trigger('click')

    // Check that the "onClicked" event has been emitted
    expect(wrapper.emitted('onClicked')).toBeTruthy()
  })

  it('applies the custom class to the button', () => {
    const customClass = 'custom-button-class'
    const wrapper = mount(AppButton, {
      props: { customClass }
    })

    // Find the button element and check if the custom class is applied
    const button = wrapper.find('button')
    expect(button.classes()).toContain(customClass)
  })
})
