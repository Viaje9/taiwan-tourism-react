export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
  return
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function removeItem(key) {
  localStorage.removeItem(key)
  return
}
