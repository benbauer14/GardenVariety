import { useSelector } from "react-redux"

function ListingInfo () {

    const searchlisting = useSelector((store) => store.listing)
        const checkLoad = () =>{
            //checks if data is available. If not, it displays loading. Once data is available, the data is displayed. 
            //deals with data races in React.
            if(!Array.isArray(searchlisting)){
                return(<p>Loading...</p>)
            } else{
                return(
                    <> 
                    <div className="searchResultsMain">
                        <div className="searchResults">
                        {searchlisting.map(listing => {
                                return(
                                    <div className="searchListingResult" onClick={() => {resultClicked(listing.id)}}>
                                        <div className="itemInfo">
                                            <h4>{listing.vegetable}</h4>
                                        </div>
    
                                        <div className="itemSale">
         
                                        </div>
                                        <div className="itemTrade">
     
                                        </div>
                                        <div><></></div>
                                    </div>
                                )
                        
                    })}
                
                        </div>
                    </div>
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
export default ListingInfo