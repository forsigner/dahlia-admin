import less from 'dahlia-less'
import antd from 'dahlia-antd'
import styledJsx from 'dahlia-styled-jsx'

export default {
  title: 'Dahlia Admin',
  plugins: [
    less({
      modifyVars: {
        '@primary-color': '#40dc7e',
        // '@link-color': '#1DA57A',
        // '@border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    antd(),
    styledJsx()
  ],
}
