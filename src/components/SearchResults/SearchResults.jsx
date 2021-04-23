import './SearchResults.css'
import { useSelector } from "react-redux";


function SearchResults () {
    const searchlisting = useSelector((store) => store.searchlisting);
    const user = useSelector((store => store.user))

    const forSale = (listing) =>{
        if(listing.for_sale == true){
            return(
                <>
                <p>For Sale: Yes</p>
                <p>Price: ${listing.price.toFixed(2)}</p>
                </>
            )
            }else{
            return(
                <p>For Sale: No</p>
            )
            } 
    }
    const forTrade = (listing) =>{
        if(listing.trade == true){
            return(
                <>
                <p>Trade: Yes</p>
                <p>Item: {listing.trade_item}</p>
                </>
            )
            }else{
            return(
                <p>Trade: No</p>
            )
            } 
    }


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
                                <div className="searchListingResult">
                                    <div className="itemInfo">
                                        <h4>{listing.vegetable}</h4>
                                    </div>
                                    <div></div>
                                    <div className="itemSale">
                                        {forSale(listing)}          
                                    </div>
                                    <div className="itemTrade">
                                        {forTrade(listing)}          
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
export default SearchResults