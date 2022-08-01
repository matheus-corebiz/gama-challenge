import config from "../config"

const getIdFromUrl = (url) => {
  const id = url.replace(`${config.apiUrl}/pokemon/`, '')
  return parseInt(id)
} 

export default getIdFromUrl