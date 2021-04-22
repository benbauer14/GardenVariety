
import DeleteIcon from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function ChatMessengerItem(){
    const messages = useSelector((store) => store.messages);
    const user = useSelector((store) => store.user.username);

    const dispatch = useDispatch();
    const history = useHistory()

    const fellowGardener = (message) => {
        if(message.toUser === user){
            return message.fromUser
        }else{
            return message.toUser
        }
    }

    const gardenerList = (messageList) => {
        //create a list of all gardeners that the user has messaged in the past
        //list will contain no duplicates
        //list will be used to create a message list for each user


        let gardeners = []
        for( let i = 0; i < messageList.length; i++){
            if(messageList[i].toUser === user){
                gardeners = [...gardeners, messageList[i].fromUser]
            }else{
                gardeners = [...gardeners, messageList[i].toUser]
            }
        }
        
        return([...new Set(gardeners)] )
    }

    const newMessageList = (messageList) => {
        //To show the most recent message, the data returned from SQL will be sorted in descending order
        //by date. This will display the newest message first. This function will loop through the messages
        //until the first instance of a chat is found between the user and fellow gardener. When a chat is found
        //the message will be displayed and the loop will start over with the next gardener on the list. The new 
        //array will contain the newest messages from any gardener that the user has chatted with
        
        //list with fellow gardeners with no duplicates
        let fellowGardeners = gardenerList(messageList)
        //blank array for message list containing newest messages
        let newMessageArray = []
        //loop through gardeners until the first message is found add that message to newMessageArray and exit loop and move to next gardener
        for(let i = 0; i < fellowGardeners.length; i++){
            for(let j = 0; j < messageList.length; j++){
                if(messageList[j].toUser === fellowGardeners[i] || messageList[j].fromUser === fellowGardeners[i]  ){
                    newMessageArray = [...newMessageArray, messageList[j]]
                    break;
                }
            }
        }
        return newMessageArray
    }

    const messageClick = (message) =>{
        dispatch({type: 'FETCH_USERCHAT', payload: fellowGardener(message), user: {user}.user})
        history.push('/fellowchat')
    }

    return(
    <> 
        {newMessageList(messages).map(message => {
            return(
                <div className="chatMessageListItem" onClick={() => messageClick(message)}>
                    <div className="userAvatar">
                        <FaceIcon />
                    </div>
                    <div className="chatMessage">
                        <p>from: {fellowGardener(message)}</p> 
                        <p>date: {message.whenSent}</p>
                        <p>{message.message}</p>
                    </div>
                    <div className="chatTrash">
                        <DeleteIcon fontSize="large"/>

                    </div>
                </div>
            )
        })}

    
        </>
    )
}
export default ChatMessengerItem