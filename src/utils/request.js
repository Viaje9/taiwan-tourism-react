import axios from 'axios'
import jsSHA from 'jssha'

function getAuthorizationHeader() {
  const AppID = process.env.VITE_API_ID
  const AppKey = process.env.VITE_API_KEY

  const GMTString = new Date().toGMTString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
  return { Authorization: Authorization, 'X-Date': GMTString }
}

const request = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 30000,
  withCredentials: true,
  params: {
    $format: 'JSON'
  }
})

request.interceptors.request.use(
  function (config) {
    config.headers = getAuthorizationHeader()
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default request
