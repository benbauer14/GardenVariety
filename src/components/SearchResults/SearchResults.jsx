import './SearchResults.css'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';


function SearchResults () {
    const searchlisting = useSelector((store) => store.searchlisting);
    const user = useSelector((store => store.user))

    const forSale = (listing) =>{
        if(listing.for_sale == true){
            return(
                <>
                <img src='/images/sale.png'/>
                </>
            )
            }else{
            return(
                <img src='/images/notsale.png'/>
            )
            } 
    }
    const forTrade = (listing) =>{
        if(listing.trade == true){
            return(
                <>
                <img src='/images/trade.png'/>
                </>
            )
            }else{
            return(
                <img src='/images/nottrade.png'/>
            )
            } 
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const resultClicked = (listingID) => {
        dispatch({ type: 'FETCH_LISTING', payload: listingID})
        history.push('/listinginfo')
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
                                <div className="searchListingResult" onClick={() => {resultClicked(listing.id)}}>
                                    <div className="itemInfo">
                                        <h4>{listing.vegetable}</h4>
                                        <h4>{JSON.stringify(listing)}</h4>
                                    </div>

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