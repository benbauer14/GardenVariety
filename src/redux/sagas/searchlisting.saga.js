import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//sends a GET request based on search data

function* searchListing(action) {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  try {
    const response = yield axios.get('/api/search/?veg=' + action.veg + '&trade=' + action.trade +'&buy=' + action.buy + '&when=' + action.when, config);
    yield put({ type: 'SET_SEARCH', payload: response.data.rows });
  } catch (error) {
    console.log('Messages get request failed', error);
  }
}

function* searchListingSaga() {
  yield takeLatest('SEARCH_LISTINGS', searchListing);
}

export default searchListingSaga;
