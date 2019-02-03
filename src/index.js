const getData = async () => {
  const data = await fetch('/api/data')
  const json = await data.json()
  document.body.innerHTML = JSON.stringify(json)
  return data
}

getData()