import './ChatUserItem.css'
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';


function ChatUserItem () {
    const chatuser = useSelector((store) => store.chatuser);
    const user = useSelector((store => store.user))
    const fellow = useSelector((store => store.chatters.fellow))
    const [fellowIcon, setFellowIcon] = useState('')
    const [userIcon, setUserIcon] = useState('')


    const updateUnread = (id) => {
        axios.put('/api/chat/?unread=' + id).then((response) => {
            console.log("Unread updated", response)
        }).catch((err) => {
            console.log(err)
        });
    }

    const getIcon = () => {
        axios.get('/api/icons/usericon/?user='+ user.username ).then((response) => {
            setUserIcon(response.data[0].path)
        }).catch((err) => {
            console.log(err)
        })
        axios.get('/api/icons/usericon/?user='+ fellow ).then((response) => {
            setFellowIcon(response.data[0].path)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getUsersIcons = () => {
        setFellowIcon(getIcon(fellow))
        setUserIcon(getIcon(user.username))
    }

    useEffect(() => {getUsersIcons()}, []);

    const checkLoad = () =>{
        //checks if data is available. If not, it displays loading. Once data is available, the data is displayed. 
        //deals with data races in React.
        if(!Array.isArray(chatuser)){
            return(<p>Loading...</p>)
        } else{

            return(
                <> 
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
                                        <img src={userIcon} width="40px" alt="icon"/>
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

                                    </div>
                                    <div className="chatMessage">
                                        <p>date: {prettydate}</p>
                                        <p>{message.message}</p>
                                    </div>
                                    <div className="userAvatar">
                                        <img src={fellowIcon} width="40px" alt="icon"/>
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