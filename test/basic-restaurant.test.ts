import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Restaurant from '../src/components/Restaurant.vue'

describe('Restaurant', () => {
  test('Restaurant is given and is mounted with props', () => {
    expect(Restaurant).toBeTruthy()

    const wrapper = mount(Restaurant, {
        propsData: {
            seats: 20,
            name: 'Sushi Bar Vitest'
        }
    })

    expect(wrapper.find('h1').text()).contain('Sushi Bar Vitest')
  })
})