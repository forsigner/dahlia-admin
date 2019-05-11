export interface MenuItem {
  path: string
  icon: string
  name: string
  children?: MenuItem[]
}

export type MenuConfig = MenuItem[]
