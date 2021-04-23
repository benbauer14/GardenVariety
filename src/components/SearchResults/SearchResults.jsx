import { useEffect } from "react";
import { useSelector } from "react-redux";


function SearchResults () {
    const searchlisting = useSelector((store) => store.searchlisting);
    const user = useSelector((store => store.user))

    const checkLoad = () =>{
        //checks if data is available. If not, it displays loading. Once data is available, the data is displayed. 
        //deals with data races in React.
        if(!Array.isArray(searchlisting)){
            return(<p>Loading...</p>)
        } else{
            return(
                <> 
                    {searchlisting.map(listing => {
                            return(
                                <div className="searchListingResult">
                                    <div className="userAvatar">
                                        {/* <FaceIcon /> */}
                                    </div>
                                    <div className="itemInfo">
                                        <p>Gardener: {listing.username}</p>
                                        <p>Item: {listing.vegetable}</p>
                                        <p></p>
                                    </div>
                                    <div className="chatTrash">
                                        {/* <DeleteIcon fontSize="large"/> */}
                
                                    </div>
                                </div>
                            )
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
export default SearchResults