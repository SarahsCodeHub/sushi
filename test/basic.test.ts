import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'


test('HelloWorld', () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = mount(HelloWorld, {
    props: {
      msg: "Vitest of HelloWorld"
    }
  })

  expect(wrapper.text()).toContain('Vitest of HelloWorld')
})