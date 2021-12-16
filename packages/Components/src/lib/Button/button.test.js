/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button.vue', () => {
  const wrapper = mount(Button)
  it('click button', async () => {
    // 点击按钮
    await wrapper.find('#btn').trigger('click')
    expect(wrapper.vm.$data.count).toEqual(1)
  })
})
