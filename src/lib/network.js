// import axios from 'axios'
import { apiConfig } from './config.js'
import axios from 'axios'

export const getAllProjects = async () => {
  const slug = 'projects'

  try {
    const data = await axios.get(`${apiConfig.url}/${slug}`)
    if (!data || !data.length) {
      return data.data
    }
  } catch (err) {
    console.error('Error during fetching our Api ==> ')
    console.error(err)
  }
}

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

export const checkUserExist = async (email) => {
  console.log('email ===> ', email)
  try {
    return await axios({
      method: 'get',
      url: `${apiConfig.url}/get-user`,
      data: {
        email
      }
    })
  } catch (err) {
    console.error('err ===> ', err)
  }
}

export const logUser = async (form) => {
  const { email, password } = form

  try {
    return await axios({
      method: 'get',
      url: `${apiConfig.url}/log-user`,
      data: {
        email,
        password
      }
    })
  } catch (err) {
    console.error('err ===> ', err)
  }
}
