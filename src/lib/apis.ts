import Axios from 'axios'
import { ResponseGenerator } from '../interface/common'

let acTkn = ''
const apis = Axios.create({
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': acTkn,
  },
})

apis.interceptors.request.use(
  (config: ResponseGenerator) => {
    config.headers['x-access-token'] = acTkn
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)
apis.interceptors.response.use(
  (config: ResponseGenerator) => {
    console.log('response config', config)
    if (config.data && config.data.accessToken) acTkn = config.data.accessToken
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default apis
