import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function RefreshReducers () {

    const dispatch = useDispatch()
    const user = useSelector((store) => store.user);

    useEffect(() => {getMessages();}, []);

    const getMessages = () =>{
        dispatch({type:'FETCH_MESSAGES', payload: user.username})
        dispatch({type:'FETCH_UNREAD', payload: user.username})
    }

    return(
        <>
        {getMessages()}
        </>
    )
}


export default RefreshReducers