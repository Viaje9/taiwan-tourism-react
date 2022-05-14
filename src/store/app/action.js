import { createAction } from '@reduxjs/toolkit'

export const setSearchData = createAction('app/setSearchData',
  (list) => {
    return {
      payload: list,
    }
  })