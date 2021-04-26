
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatUserItem from '../ChatUserItem/ChatUserItem'
import './ChatUser.css'

function ChatUser (){
    const user = useSelector((store) => store.user);
    const chatuser = useSelector((store) => store.chatuser);
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    useEffect(() => {getMessages();}, []);

    const getMessages = () =>{
        dispatch({type:'FETCH_MESSAGES', payload: user.username})
        dispatch({type:'FETCH_UNREAD', payload: user.username})
    }

    const fellowGardener = (message) => {
        if(!Array.isArray(chatuser)){
            return(<p>Loading...</p>)
        }
        if(message.toUser === user.username){
            console.log('fellowGardener touser', message.toUser)
            console.log('fellowGardener user', user)            
            return message.fromUser
        }else{
            console.log('fellowGardener touser', message.toUser)
            console.log('fellowGardener user', user)  
            return message.toUser
        }
    }

    const postReply = () => {
        dispatch({type: 'POST_MESSAGE', payload: fellowGardener(chatuser[0]), user: user.username, message: message})
        setMessage("")
    }

return(
    <div className="chatUserMain">
        <div className="chatuserHeader"><p>Chat with: <b>{fellowGardener(chatuser[0])}</b></p></div>
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