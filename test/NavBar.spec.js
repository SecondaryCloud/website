import { mount, shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(NavBar, {
      stubs: {
        NuxtLink: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('render properly', () => {
    const component = mount(NavBar)
    expect(component.html()).toMatchSnapshot()
  })
})
