import { createSlice } from '@reduxjs/toolkit';
import { fetchSummaries, fetchSummariesPage, fetchSummariesWithPhoto } from './summariesOperations';

const summariesSlice = createSlice({
  name: 'summaries',
  initialState: { entities: [], isLoading: false, error: null, page: 1 },
  extraReducers: {
    [fetchSummaries.fulfilled]: (state, action) => {
      state.entities = action.payload; //используеться IMMER который меняет объект через прокси
    },
    [fetchSummaries.pending]: state => {
      state.isLoading = true;
    },
    [fetchSummaries.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchSummariesPage.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.page += 1;
    },
    [fetchSummariesPage.pending]: state => {
      state.isLoading = true;
    },
    [fetchSummariesPage.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchSummariesWithPhoto.fulfilled]: (state, action) => {
      state.entities = action.payload;
    },
    [fetchSummariesWithPhoto.pending]: state => {
      state.isLoading = true;
    },
    [fetchSummariesWithPhoto.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});

export default summariesSlice.reducer;
