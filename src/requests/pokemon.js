import config from "../config"

const getById = async (id) => {
  try {
    const url = `${config.apiUrl}/pokemon/${id}`
    const request = await fetch(url)
    if(request.status !== 200) throw new Error('')

    return request.json()
  } catch(_) {
    return false
  }
}

export { getById }