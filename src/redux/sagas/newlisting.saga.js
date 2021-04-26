import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Posts a new message from chat.
function* newListing(action) {
  try {
    yield axios.post('/api/listing/newlisting', action)
  } catch (error) {
    console.log('Listing post request failed', error);
  }
}

function* newListingSaga() {
  yield takeLatest('POST_LISTING', newListing);
}

export default newListingSaga;
