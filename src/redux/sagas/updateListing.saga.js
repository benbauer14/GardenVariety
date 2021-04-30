import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* updateListing(action) {

  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield put({type:'RESET_LISTINGINFO'})
    const response = yield axios.get('/api/listing/update/?listingid=' + action.payload, config);
    yield put({type: 'SET_LISTINGINFO', payload: response})
  } catch (error) {
    console.log('Messages get request failed', error);
  }
}

function* updateListingSaga() {
  yield takeLatest('UPDATE_LISTING', updateListing);
}

export default updateListingSaga;