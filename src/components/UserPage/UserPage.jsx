import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import './UserPage.css'
import RefreshReducers from '../RefreshReducers/RefreshReducers';

function UserPage() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {getMessages();}, []);
  const getMessages = () =>{
      dispatch({type:'FETCH_MESSAGES', payload: user.username})
      dispatch({type:'FETCH_UNREAD', payload: user.username})
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div onClick={() => {history.push('/search')}}><Button color="primary">Search</Button></div>
      <div onClick={() => {history.push('/trade')}}><Button color="primary">Trade/Sell Items</Button></div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
