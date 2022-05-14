import { configureStore } from '@reduxjs/toolkit'
import { ScreenReducer } from './screen/reducer'
import { AppReducer } from './app/reducer'

export const store = configureStore({
  reducer: {
    screen: ScreenReducer,
    app: AppReducer
  }
})
