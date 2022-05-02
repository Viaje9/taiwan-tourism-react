export function getItineraryListId(list) {
  return list.reduce(
    (acc, cur) => {
      if (cur.schedule.length) {
        const { id, category } = cur.schedule[0]
        if (!acc[category]) {
          acc[category] += `ID eq '${id}'`
        }
        if (acc[category]) {
          acc[category] += ` or ID eq '${id}'`
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
        acc[category] += `ID eq '${id}'`
      }
      if (acc[category]) {
        acc[category] += ` or ID eq '${id}'`
      }
      return acc
    },
    { scenicSpot: '', restaurant: '', hotel: '' }
  )
}
