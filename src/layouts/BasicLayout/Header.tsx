import React from 'react'
import { Layout } from 'antd'
import { observe } from 'dahlia/store'

// import basicLayoutStore from './basicLayoutStore'

import SelectLang from '@components/SelectLang'
import UserMenu from './UserMenu'
// import styles from './Header.less'

const { Header } = Layout

// function onCollapse(collapsed: boolean) {
//   basicLayoutStore.toggle(!collapsed)
// }

const HeaderView = observe(() => {
  // const { collapsed } = basicLayoutStore
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      {/* <span className={styles.trigger}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => onCollapse(collapsed)}
        />
      </span> */}

      <div>
        <UserMenu />
        <span> </span>
        <SelectLang />
      </div>
      <style jsx={true}>{`
        div {
          padding: 0 20px;
          float: right;
        }
      `}</style>
    </Header>
  )
})

export default HeaderView
