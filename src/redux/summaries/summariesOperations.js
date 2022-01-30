import * as summariesAPI from 'services/summaries-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as summariesActions  from './summariesAction';

export const fetchSummaries = createAsyncThunk('summaries/fetchSummaries', async () => {
  const summaries = await summariesAPI.fetchSummaries();
  return summaries;
});

export const fetchSummariesPage = createAsyncThunk('summaries/fetchSummariesPage', async page => {
  const summaries = await summariesAPI.fetchSummariesPage(page);
  return summaries;
});

export const fetchSummariesWithPhoto = createAsyncThunk('summaries/fetchSummariesWithPhoto', async param => {
  const summaries = await summariesAPI.fetchSummariesWithPhoto(param);
  return summaries;
});

// export const fetchSummaries = () => async dispatch => {
// 	dispatch(summariesActions.fetchSummariesRequest());
// 	try {
// 		const summaries = await summariesAPI.fetchSummaries();
// 		dispatch(summariesActions.fetchSummariesSuccess(summaries));
// 	} catch (error) {
// 		dispatch(summariesActions.fetchSummariesError(error));
// 	}
//};
