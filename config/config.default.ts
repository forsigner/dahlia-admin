import { Config } from 'dahlia'
const config: Partial<Config> = {
  rest: {
    endpoint: 'http://resourcecheck.testplus.cn/v1/api',
  },
  graphql: {
    endpoint: 'http://resourcecheck.testplus.cn/graphql',
  },
}

export default config
