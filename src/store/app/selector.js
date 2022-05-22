export const selectSearchData = (state) => state.app.searchData.filter((_, i) => i < 10)

export const selectIsFavorite = (category, ID) => (state) =>
  state.app.favoriteList.find((e) => e.id === ID && e.category === category)
