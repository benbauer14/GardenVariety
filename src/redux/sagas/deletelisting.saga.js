import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Delete a listing from the DB.
function* deletelisting(action) {

    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    console.log("indelete")
try {
    console.log(action.payload)
    yield axios.delete('/api/listing/?listingid=' + action.payload, config)
    } catch (error) {
    console.log('Listing delete request failed', error);
    }
}

function* deletelistingSaga() {
    yield takeLatest('DELETE_LISTING', deletelisting);
  }
  
  export default deletelistingSaga;