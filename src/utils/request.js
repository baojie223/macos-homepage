import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 60000
})

service.interceptors.request.use(cfg => {
  return cfg
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(res => {
  return Promise.resolve(res.data)
}, err => {
  return Promise.reject(err)
})

export default service