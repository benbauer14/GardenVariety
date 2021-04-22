import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMessages(action) {



  // console.log('in fetchMessages', action.payload)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return messages from 
    // to and from the user
    const response = yield axios.get('/api/chat/?user=' + action.payload, config);
    console.log(response)
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_MESSAGES', payload: response.data.rows });
  } catch (error) {
    console.log('Messages get request failed', error);
  }
}

//When dispatch FETCH_MESSAGES is received, function* fetchMessages
//is run which checks for credentials and receives all messages to and from
//the logged in user
function* messagesSaga() {
  yield takeLatest('FETCH_MESSAGES', fetchMessages);
}

export default messagesSaga;