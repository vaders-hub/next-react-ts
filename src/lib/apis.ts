import Axios from 'axios'
import { ResponseGenerator } from '../interface/common'
import https from 'https'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})

let acTkn = ''
const apis = Axios.create({
  timeout: 5000,
  withCredentials: true,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
apis.interceptors.request.use(
  (config: ResponseGenerator) => {
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
