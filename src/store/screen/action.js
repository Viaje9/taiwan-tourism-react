import { createAction } from '@reduxjs/toolkit'

export const screenResize = createAction('screen/resize',
  (size) => {
    const { width, height } = size
    return {
      payload: {
        screenWidth: width,
        screenHeight: height
      },
    }
  })