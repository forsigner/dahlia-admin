import React, { FC } from 'react'
import { Icon, Menu } from 'antd'
import { Link } from 'dahlia/router'
import { t } from 'dahlia/i18n'
import config from './menu.config'
import siderStore from './sidebarStore'
import handleConfig from './handleConfig'
import { MenuConfig, MenuItem } from './typings'

const SubMenu = Menu.SubMenu

const menuConfig = handleConfig(config)

const getMenuText = (item: MenuItem) => {
  if (!item.icon) return t(item.name)
  return (
    <span>
      <Icon type={item.icon} />
      <span>{t(item.name)}</span>
    </span>
  )
}

const getMenuItem = (item: MenuItem) => {
  const { key = '' } = item
  if (item.children) {
    return (
      <SubMenu title={getMenuText(item)} key={key}>
        {getMenu(item.children)}
      </SubMenu>
    )
  }
  return (
    <Menu.Item key={key}>
      <Link to={key}>{getMenuText(item)}</Link>
    </Menu.Item>
  )
}

const getMenu = (menuConfig: MenuConfig) => {
  return menuConfig.map(item => getMenuItem(item))
}

// TODO:
const getSelectedMenuKeys = (pathname: string) => {
  return [pathname]
}

// TODO:
const handleOpenChange = (openKeys: string[]) => {
  let keys: string[] = []
  if (openKeys.length > 0) {
    const key = openKeys.pop() as string
    keys = [key]
  }
  siderStore.updateOpenKeys(keys)
}

const SideMenu: FC<{ collapsed: boolean; openKeys?: any }> = ({
  collapsed,
}) => {
  const { pathname } = window.location
  const selectedKeys = getSelectedMenuKeys(pathname)
  const { openKeys } = siderStore

  let props = {}
  if (openKeys && !collapsed) {
    props = {
      openKeys: openKeys.length === 0 ? [...selectedKeys] : openKeys,
    }
  }

  return (
    <Menu
      selectedKeys={selectedKeys}
      onOpenChange={handleOpenChange}
      theme="dark"
      mode="inline"
      {...props}
    >
      {getMenu(menuConfig)}
    </Menu>
  )
}

export default SideMenu
