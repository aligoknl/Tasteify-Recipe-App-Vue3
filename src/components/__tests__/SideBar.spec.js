import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar', () => {
  it('expands/collapses when the toggle button is clicked', async () => {
    const wrapper = mount(Sidebar)

    // Check if the sidebar starts as collapsed
    expect(wrapper.classes()).not.toContain('is-expanded')

    // Click the toggle button
    await wrapper.find('.menu-toggle.btn').trigger('click')

    // Check if the sidebar becomes expanded
    expect(wrapper.classes()).toContain('is-expanded')

    // Click the toggle button again
    await wrapper.find('.menu-toggle.btn').trigger('click')

    // Check if the sidebar becomes collapsed again
    expect(wrapper.classes()).not.toContain('is-expanded')
  })
})
