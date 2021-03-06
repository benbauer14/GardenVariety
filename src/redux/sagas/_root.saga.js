import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import chatSaga from './chat.saga'
import unreadSaga from './unread.saga'
import chatUserSaga from './chatuser.saga';
import newmessageSaga from './newmessage.saga'
import searchListingSaga from './searchlisting.saga'
import listingSaga from './listing.saga'
import deletelistingSaga from './deletelisting.saga';
import newListingSaga from './newlisting.saga'
import updateListingSaga from './updateListing.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    chatSaga(),
    unreadSaga(),
    chatUserSaga(),
    newmessageSaga(),
    searchListingSaga(),
    listingSaga(),
    deletelistingSaga(),
    newListingSaga(),
    updateListingSaga(),
  ]);
}
