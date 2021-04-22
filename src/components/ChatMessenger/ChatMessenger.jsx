import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ChatMessengerItem from '../ChatMessengerItem/ChatMessengerItem';
import RefreshReducers from '../RefreshReducers/RefreshReducers';
import './ChatMessenger.css'

function ChatMessenger () {

    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch()
    
    useEffect(() => {getMessages();}, []);
    const getMessages = () =>{
        dispatch({type:'FETCH_MESSAGES', payload: user.username})
        dispatch({type:'FETCH_UNREAD', payload: user.username})
    }

    return (
        <>
        <div className="chatMain">
            <ChatMessengerItem />
        </div>
        </>
    )
}
export default ChatMessenger