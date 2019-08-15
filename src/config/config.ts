import { Config } from 'dahlia'

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'

const config: Partial<Config> = {
  rest: {
    endpoint: isProd
      ? 'https://jsonplaceholder.typicode.com'
      : 'https://jsonplaceholder.typicode.com',
  },
  graphql: {
    endpoint: '',
  },
}

console.log('config:', config)

export default config
