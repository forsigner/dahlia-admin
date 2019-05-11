import { createStore } from 'dahlia/store'

export const basicLayoutStore = createStore({
  collapsed: false,
  toggle(collapsed: boolean) {
    basicLayoutStore.collapsed = collapsed
  },
})

export default basicLayoutStore
