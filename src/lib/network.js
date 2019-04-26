// import axios from 'axios'
import { apiConfig } from './config.js'
import axios from 'axios'

export const get = async (route, params) => {
  const token = getToken()
  const headers = {
    ...token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  try {
    return await axios({
      method: 'get',
      url: `${apiConfig.url}/${route}`,
      headers,
      ...params ? { params } : {}
    })
  } catch (err) {
    console.error(
      `Error during get request on API:
      ${err}`
    )
  }
}

export const put = async (route, data) => {
  const token = getToken()
  const headers = {
    ...token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  try {
    return await axios({
      method: 'put',
      url: `${apiConfig.url}/${route}`,
      headers,
      data
    })
  } catch (err) {
    console.error(
      `Error trying to put request on API:
      ${err}`
    )
  }
}

export const post = async (route, data = {}) => {
  const token = getToken()
  const headers = {
    ...token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  console.log('headers ===> ', headers)

  try {
    return await axios({
      method: 'post',
      url: `${apiConfig.url}/${route}`,
      data,
      headers
    })
  } catch (err) {
    console.log('err ===> ', err)
    console.error(
      `Error during post request on API:
      ${err}`
    )
  }
}

const getToken = () => {
  const cookies = document.cookie.split(';')

  const token = cookies
    .find((token) => token.split('=')[0].trim() === 'knowledge-token')

  return token ? token.split('=').splice(1).join('=') : ''
}
