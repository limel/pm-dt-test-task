import axios from 'axios';

axios.defaults.baseURL = 'http://135.181.30.244:27007/api';

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
}

export async function fetchSummaries() {
  const { data } = await axios.get(`/summaries/`, options);
  return data;
}

export async function fetchSummariesPage(page) {
  const { data } = await axios.get(`/summaries/?page=${page}`, options);
  return data;
}

export async function fetchSummariesWithPhoto(param) {
  const { data } = await axios.get(`/summaries/?photo=${param}`, options);
  return data;
}

// http://135.181.30.244:27007/api/summaries/ (get)

// http://135.181.30.244:27007/api/summaries/?photo=true
/* (Для примера:
?photo=true - только с фото
?photo=false - без фото
)
 */
