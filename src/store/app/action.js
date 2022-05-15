import { createAction } from '@reduxjs/toolkit'

export const setSearchData = createAction('app/setSearchData', (list) => {
  return {
    payload: list
  }
})

export const addFavorite = createAction('app/addFavorite', ({ id, category }) => {
  return {
    payload: {
      id,
      category
    }
  }
})

export const removeFavorite = createAction('app/removeFavorite', ({ id, category }) => {
  return {
    payload: {
      id,
      category
    }
  }
})
