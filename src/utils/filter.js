import { cities } from '@/assets/json/taiwan-zip-code.json'

export function filterCity(zipCode) {
  if (zipCode) {
    const name = cities.find(({ region }) =>
      region.find(({ code }) => code === +zipCode)
    )?.name
    return name
  }
  return ''
}

export function filterArea(zipCode) {
  if (zipCode) {
    return cities.reduce((acc, { name, region }) => {
      const zip = region.find(({ code }) => code === +zipCode)?.name
      return zip ? `${name}${zip}` : acc
    }, '')
  }
  return ''
}
