import { HOTEL, RESTAURANT, SCENIC_SPOT } from '/src/constant'
export function getItineraryListId(list) {
  return list.reduce(
    (acc, cur) => {
      if (cur.schedule.length) {
        const { id, category } = cur.schedule[0]
        if (!acc[category]) {
          acc[category] += `${getID(category)} eq '${id}'`
        }
        if (acc[category]) {
          acc[category] += ` or ${getID(category)} eq '${id}'`
        }
      }

      return acc
    },
    { scenicSpot: '', restaurant: '', hotel: '' }
  )
}

export function getItemsId(list) {
  return list.reduce(
    (acc, cur) => {
      const { id, category } = cur
      if (!acc[category]) {
        acc[category] += `${getID(category)} eq '${id}'`
      }
      if (acc[category]) {
        acc[category] += ` or ${getID(category)} eq '${id}'`
      }
      return acc
    },
    { scenicSpot: '', restaurant: '', hotel: '' }
  )
}

export function getID(category) {
  switch (category) {
    case HOTEL:
      return 'HotelID'
    case RESTAURANT:
      return 'RestaurantID'
    case SCENIC_SPOT:
      return 'ScenicSpotID'
    default:
      ''
  }
}

export function getName(category) {
  switch (category) {
    case HOTEL:
      return 'HotelName'
    case RESTAURANT:
      return 'RestaurantName'
    case SCENIC_SPOT:
      return 'ScenicSpotName'
    default:
      ''
  }
}