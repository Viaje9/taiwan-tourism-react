import request from '/src/utils/request'

export function fetchScenicSpotAll({ $filter, $top }) {
  return request({
    url: '/v2/Tourism/ScenicSpot',
    method: 'get',
    params: {
      $filter,
      $top
    }
  })
}

export function fetchScenicSpot(city, params) {
  return request({
    url: `/v2/Tourism/ScenicSpot/${city}`,
    method: 'get',
    params
  })
}

export function fetchRestaurantAll({ $filter, $top }) {
  return request({
    url: '/v2/Tourism/Restaurant',
    method: 'get',
    params: {
      $filter,
      $top
    }
  })
}

export function fetchRestaurant(city, params) {
  return request({
    url: `/v2/Tourism/Restaurant/${city}`,
    method: 'get',
    params
  })
}

export function fetchHotelAll({ $filter, $top }) {
  return request({
    url: '/v2/Tourism/Hotel',
    method: 'get',
    params: {
      $filter,
      $top
    }
  })
}

export function fetchHotel(city, params) {
  return request({
    url: `/v2/Tourism/Hotel/${city}`,
    method: 'get',
    params
  })
}

export async function fetchAll(params) {
  const { scenicSpot, restaurant, hotel } = params
  const result = {}
  if (scenicSpot) {
    result.scenicSpot = await fetchScenicSpotAll({ $filter: scenicSpot }).then(({ data }) => data)
  }
  if (restaurant) {
    result.restaurant = await fetchRestaurantAll({ $filter: restaurant }).then(({ data }) => data)
  }
  if (hotel) {
    result.hotel = await fetchHotelAll({ $filter: hotel }).then(({ data }) => data)
  }
  return result
}
