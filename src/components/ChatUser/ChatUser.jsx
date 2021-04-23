
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatUserItem from '../ChatUserItem/ChatUserItem'
import './ChatUser.css'
import store from '../../../src/index'

function ChatUser (){
    const user = useSelector((store) => store.user);
    let chatuser = useSelector((store) => store.chatuser);
    const dispatch = useDispatch()
    useEffect(() => {getMessages();}, []);
    const [message, setMessage] = useState("")
    const state = store.getState()



    const getMessages = () =>{
        dispatch({type:'FETCH_MESSAGES', payload: user.username})
        dispatch({type:'FETCH_UNREAD', payload: user.username})
    }

    const fellowGardener = (message) => {
        if(message.toUser === user){
            return message.fromUser
        }else{
            return message.toUser
        }
    }

    const postReply = () => {
        dispatch({type: 'POST_MESSAGE', fellow: fellowGardener(chatuser[0]), user: user.username, message: message})
        setMessage("")
        console.log(state.messages)
    }

return(
    <div className="chatUserMain">
        <div className="messagesMain">
            <ChatUserItem />
        </div>
        <div className="messageReplyMain">
            <input className="chatInput" type="text" playholder="Reply" value={message} onChange={(event) => setMessage(event.target.value)}></input>
            <Button color="primary" size='small' onClick={()=>{postReply()}}>Send</Button>
        </div>
    </div>
)
}
export default ChatUser