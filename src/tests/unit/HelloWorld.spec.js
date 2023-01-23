const { enableAutoDestroy, mount } = require('@vue/test-utils')
const HelloWorld = require('../../components/HelloWorld.vue').default
const HelloWorldDestroyBroken = require('../../components/HelloWorldBroken.vue').default

enableAutoDestroy(afterEach)

describe('HelloWord', () => {
  it('component destroy fails', async () => {
    const wrapper = mount(HelloWorldDestroyBroken)
    await wrapper.vm.$nextTick()
    expect(wrapper.contains('div.hello')).toBe(true)
    // Will fail at `wrapper.destroy()`
  })

  // The next two tests works individually. But if the broken test is executed before, they will fail.
  it('renders a div', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.contains('div.hello')).toBe(true)
  })

  it('Should totally work', () => {
    expect(1 + 1).toBe(2)
  })
})