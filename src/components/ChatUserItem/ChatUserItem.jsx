import { useEffect } from "react";
import { useSelector } from "react-redux";


function ChatUserItem () {
    const chatuser = useSelector((store) => store.chatuser);
    const user = useSelector((store => store.user))

    const checkLoad = () =>{
        if(!Array.isArray(chatuser)){
            return(<p>Loading...</p>)
        } else{
            return(
                <> 
                    {chatuser.map(message => {
                        if(message.toUser == user.username){
                            return(
                                <div className="chatItemToUser">
                                    <div className="userAvatar">
                                        {/* <FaceIcon /> */}
                                    </div>
                                    <div className="chatMessage">
                                        <p>date!: {message.whenSent}</p>
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
                                        <p>date: {message.whenSent}</p>
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