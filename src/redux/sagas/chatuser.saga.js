import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USERCHAT" actions
function* fetchUserChat(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return messages from 
    // to and from the user
    const response = yield axios.get('/api/gardenerchat/?user=' + action.user + '&fellow=' + action.payload, config);
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USERCHAT', payload: response.data.rows });

  } catch (error) {
    console.log('Messages get request failed', error);
  }
}

//When dispatch FETCH_MESSAGES is received, function* fetchMessages
//is run which checks for credentials and receives all messages to and from
//the logged in user
function* chatUserSaga() {
  yield takeLatest('FETCH_USERCHAT', fetchUserChat);
}

export default chatUserSaga;