export const selectSearchData = (state) => state.app.searchData.filter((_, i) => i < 10)

export const selectIsFavorite = (category, ID) => (state) =>
  state.app.favoriteList.find((e) => e.id === ID && e.category === category)

export const selectItineraryList = (state) => state.app.itineraryList

export const selectScheduleItems = (index) => (state) => state.app.itineraryList.find((item) => item.index === index)

export const selectFavoriteItems = (state) => state.app.favoriteList
