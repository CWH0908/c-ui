/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button.vue', () => {
  const wrapper = mount(Button)
  it('click button', async () => {
    // 点击按钮
    await wrapper.vm.$nextTick()
    const btn = wrapper.vm.$style.btn
    wrapper.find(`.${btn}`).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.count).toEqual(1)
  })
})
