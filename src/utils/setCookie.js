const setCookie = (cname, cvalue, expirationMin) => {
  const d = new Date()
  d.setTime(d.getTime() + (expirationMin * 24 * 60 * 60 * 1000))
  let expires = "expires="+d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export default setCookie