import { createReducer } from '@reduxjs/toolkit'
import { screenResize } from './action'

const initialState = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight
}

export const ScreenReducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(screenResize, (state, action) => {
        const { screenWidth, screenHeight } = action.payload;
        state.screenWidth = screenWidth
        state.screenHeight = screenHeight 
      })
      .addDefaultCase((state, action) => ({ ...initialState }))
  }
)