import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import StartNewRestaurant from '../src/components/StartNewRestaurant.vue'

describe('StartNewRestaurant', () => {
  test('StartNewRestaurant default values set and useful', async () => {
    expect(StartNewRestaurant).toBeTruthy()

    const wrapper = mount(StartNewRestaurant)
    const inputName = wrapper.find('input#name')
    console.log(inputName)
/*     expect(inputName.element.value).toBe('Sushi Bar F+P')
    const inputAmountOfSeats = wrapper.find('input#amountOfSeats')
    expect(inputAmountOfSeats.element.value).toBe(10) */
  })
})