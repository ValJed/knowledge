// import axios from 'axios'
import { apiConfig } from './config.js'
import axios from 'axios'

console.log('=============> HERE <================')
console.log('apiConfig ===> ', apiConfig)

const getAllProjects = async () => {
  const slug = 'projects'

  try {
    const data = await axios.get(`${apiConfig.url}/${slug}`)
    console.log('res ===> ', data)
    if (!data || !data.length) {
      return data.data
    }
  } catch (err) {
    console.error('Error during fetching our Api ==> ')
    console.error(err)
  }
}

export {
  getAllProjects
}
