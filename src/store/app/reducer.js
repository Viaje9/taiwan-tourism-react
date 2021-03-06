import { setItem, getItem } from '/src/utils/localStorage'
import { createReducer } from '@reduxjs/toolkit'
import {
  setSearchData,
  addFavorite,
  removeFavorite,
  addSchedule,
  updateScheduleName,
  updateSchedule,
  removeSchedule
} from './action'

const initialState = {
  searchData: [],
  favoriteList: getItem('favoriteList') || [],
  itineraryList: getItem('itineraryList') || []
}

export const AppReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchData, (state, action) => {
      state.searchData = action.payload
    })
    .addCase(addFavorite, (state, action) => {
      state.favoriteList = [...state.favoriteList, action.payload]
      setItem('favoriteList', state.favoriteList)
    })
    .addCase(removeFavorite, (state, action) => {
      const { id, category } = action.payload
      const list = state.favoriteList.filter((e) => !(e.id === id && e.category === category))
      state.favoriteList = [...list]
      setItem('favoriteList', list)
    })
    .addCase(addSchedule, (state, action) => {
      state.itineraryList = [...state.itineraryList, action.payload]
      setItem('itineraryList', state.itineraryList)
    })
    .addCase(removeSchedule, (state, action) => {
      const deleteIndex = action.payload
      const list = state.itineraryList.filter((e) => e.index !== deleteIndex)
      state.itineraryList = [...list]
      setItem('itineraryList', state.itineraryList)
    })
    .addCase(updateSchedule, (state, action) => {
      const { index, item } = action.payload
      const list = [...state.itineraryList]
      const itineraryItem = list.find((item) => item.index === index)
      itineraryItem.schedule = item
      state.itineraryList = list
      setItem('itineraryList', state.itineraryList)
    })
    .addCase(updateScheduleName, (state, action) => {
      const { index, name } = action.payload
      const list = [...state.itineraryList]
      const itineraryItem = list.find((item) => item.index === index)
      itineraryItem.name = name
      setItem('itineraryList', list)
    })
    .addDefaultCase((state, action) => ({ ...initialState }))
})
