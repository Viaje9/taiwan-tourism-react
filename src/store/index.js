import { configureStore } from '@reduxjs/toolkit';
import { ScreenReducer } from './screen/reducer';

export const store = configureStore({
  reducer: {
    screen: ScreenReducer
  },
});