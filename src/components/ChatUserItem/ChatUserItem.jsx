import './ChatUserItem.css'
import axios from "axios";
import { useSelector } from "react-redux";


function ChatUserItem () {
    const chatuser = useSelector((store) => store.chatuser);
    const user = useSelector((store => store.user))
    let unread = ""

    const updateUnread = (id) => {
        axios.put('/api/chat/?unread=' + id).then((response) => {
            console.log("Unread updated", response)
        }).catch((err) => {
            console.log(err)
        });
    }

    const checkLoad = () =>{
        //checks if data is available. If not, it displays loading. Once data is available, the data is displayed. 
        //deals with data races in React.
        if(!Array.isArray(chatuser)){
            return(<p>Loading...</p>)
        } else{

            return(
                <> 
                    <div className="chatuserHeader"><p>Chat with: <b>{chatuser[0].toUser}</b></p></div>
                    {chatuser.map(message => {
                        const uglymessagedate = message.whenSent
                        const prettydate = uglymessagedate.slice(5,7) + "/" + uglymessagedate.slice(8,10) + "/" + uglymessagedate.slice(0,4)
                        if(message.toUser == user.username){
                            if(message.read === false){
                                updateUnread(message.id)
                            }
                            return(
                                <div className="chatItemToUser">
                                    <div className="userAvatar">
                                        {/* <FaceIcon /> */}
                                    </div>
                                    <div className="chatMessage">
                                        <p>date: {prettydate}</p>
                                        <p>{message.message}</p>
                                    </div>
                                    <div className="chatTrash">
                                        {/* <DeleteIcon fontSize="large"/> */}
                
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div className="chatItemFromUser">
                                    <div className="userAvatar">
                                        {/* <FaceIcon /> */}
                                    </div>
                                    <div className="chatMessage">
                                        <p>date: {prettydate}</p>
                                        <p>{message.message}</p>
                                    </div>
                                    <div className="chatTrash">
                                        {/* <DeleteIcon fontSize="large"/> */}
                
                                    </div>
                                </div>
                            )
                        }
    })}
                </>
        )
        }
    }

    return(
        <>
        {checkLoad()}
        </>
    )
    

}
export default ChatUserItem