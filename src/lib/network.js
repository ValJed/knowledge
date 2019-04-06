// import axios from 'axios'
import { apiConfig } from './config.js'
import axios from 'axios'

export const createAccount = async (form) => {
  const { pseudo, email, password } = form

  try {
    return await axios({
      method: 'put',
      url: `${apiConfig.url}/create-account`,
      data: {
        pseudo,
        email,
        password
      }
    })
  } catch (err) {
    console.error(
      `Error trying to create an account:
      ${err}`
    )
  }
}

export const get = async (route, params) => {
  const token = getToken()
  try {
    return await axios({
      method: 'get',
      url: `${apiConfig.url}/${route}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      ...params ? { params } : {}
    })
  } catch (err) {
    console.error(
      `Error during get request on API:
      ${err}`
    )
  }
}

export const post = async (route, data = {}) => {
  try {
    return await axios({
      method: 'post',
      url: `${apiConfig.url}/${route}`,
      data
    })
  } catch (err) {
    console.error(
      `Error during post request on API:
      ${err}`
    )
  }
}

const getToken = () => {
  const cookies = document.cookie.split(';')
  const token = cookies
    .find((token) => token.split('=')[0])

  return token.split('=').splice(1).join('=')
}
