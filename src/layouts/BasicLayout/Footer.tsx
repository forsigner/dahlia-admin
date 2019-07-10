import GlobalFooter from '@components/GlobalFooter'
import { Icon, Layout } from 'antd'
import React, { Fragment } from 'react'

const { Footer } = Layout

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 Dahlia
  </Fragment>
)

const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter links={[]} copyright={copyright} />
  </Footer>
)
export default FooterView
