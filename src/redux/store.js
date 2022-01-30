import { configureStore } from '@reduxjs/toolkit';
import summariesReducer from './summaries/summariesReducer';

export const store = configureStore({
  reducer: {
    summaries: summariesReducer
  }
});
