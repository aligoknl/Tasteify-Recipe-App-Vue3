import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Sidebar from '@/components/Sidebar.vue'

async function toggleSidebar(wrapper) {
  await wrapper.find('.menu-toggle').trigger('click')
}

describe('Sidebar', () => {
  it('expands/collapses when the toggle button is clicked', async () => {
    const wrapper = mount(Sidebar)

    // Check if the sidebar is expanded
    const expectSidebarExpanded = () => {
      expect(wrapper.classes()).toContain('is-expanded')
    }

    // Check if the sidebar is collapsed
    const expectSidebarCollapsed = () => {
      expect(wrapper.classes()).not.toContain('is-expanded')
    }

    // Check if the sidebar starts as collapsed
    expectSidebarCollapsed()

    // Toggle the sidebar and check if it becomes expanded
    await toggleSidebar(wrapper)
    expectSidebarExpanded()

    // Toggle the sidebar again and check if it becomes collapsed
    await toggleSidebar(wrapper)
    expectSidebarCollapsed()
  })
})
