import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Posts a new message from chat.
function* newMessage(action) {
  try {
    yield axios.post('/api/chat/newmessage', action)
  } catch (error) {
    console.log('Messages post request failed', error);
  }
}

function* newMessageSaga() {
  yield takeLatest('POST_MESSAGE', newMessage);
}

export default newMessageSaga;
