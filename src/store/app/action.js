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

export const addSchedule = createAction('app/addSchedule', () => {
  return {
    payload: {
      index: Date.now(),
      name: '',
      schedule: []
    }
  }
})

export const removeSchedule = createAction('app/removeSchedule', (deleteIndex) => {
  return {
    payload: deleteIndex
  }
})

export const updateSchedule = createAction('app/updateSchedule', ({ index, item }) => {
  return {
    payload: {
      index,
      item
    }
  }
})

export const updateScheduleName = createAction('app/updateScheduleName', ({ index, name }) => {
  return {
    payload: {
      index,
      name
    }
  }
})
