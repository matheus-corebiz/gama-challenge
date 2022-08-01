const calculatePriceByBaseExperience = (baseExperience) => {
  if(!baseExperience || isNaN(baseExperience)) return
  return Math.ceil(baseExperience / 10) * 100
}
export default calculatePriceByBaseExperience