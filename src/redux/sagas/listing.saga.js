import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Posts a new message from chat.
function* listing(action) {
  try {
    const response = yield axios.get('/api/listing/?listingid=' + action.payload)
    yield put({type: "SET_LISTING", payload: response.data.rows})
  } catch (error) {
    console.log('Listing get request failed', error);
  }
}

function* listingSaga() {
  yield takeLatest('FETCH_LISTING', listing);
}

export default listingSaga;