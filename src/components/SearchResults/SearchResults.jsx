import './SearchResults.css'
import {useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router';


function SearchResults () {
    const searchlisting = useSelector((store) => store.searchlisting);
    const user = useSelector((store) => store.user.username);

//MODAL CODE
function getModalStyle() {
    const top = 45;
    const left = 45;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 200,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [tradeInfo, setTradeInfo] = useState('')
  const [saleInfo, setSaleInfo] = useState('')
  const [item, setItem] = useState('')
  const [gardener, setGardener]= useState('')
  const [itemforSale, setitemForSale]= useState('')
  const [price, setPrice] = useState('')
  const [trade, setTrade] = useState('')
  const [tradeItem, setTradeItem]  = useState('')
  const [info, setInfo] = useState('') 
  const [when, setWhen] = useState('')
  const [buttondisplay, setButtonDisplay] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//END MODAL CODE

const dispatch = useDispatch()
const history = useHistory()

const contactClick = (listingID) => {
    if(user.user === searchlisting[listingID].username){
        alert("You cannot message yourself!")
    } else{
        console.log('gardener', searchlisting[listingID].username)
        console.log('user', user)
        dispatch({type: 'FETCH_USERCHAT', payload: searchlisting[listingID].username, user: user})
        history.push('/fellowchat')
        handleClose()
    }

}

//display on Modal
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Information</h4>
      <p id="simple-modal-description">
        <h4>Item: {item}</h4>
        <p>Gardener: {gardener}</p>
        {saleInfo}
        {tradeInfo}
        <p>Extra Info: {info}</p>
        <p>When Posted: {when}</p>
        {buttondisplay}
      </p>
    </div>
  );

  const deleteListing = (listingID) => {
    if(confirm("Are you sure you would like to delete this listing?")){
        console.log(listingID)
        dispatch({type: 'DELETE_LISTING', payload: listingID})
        handleClose()
    }
  }

    const forSale = (listing) =>{
        if(listing.for_sale == true){
            return(
                <>
                <img src='/images/sale.png'/>
                </>
            )
            }else{
            return(
                <>
                <img src='/images/notsale.png'/>
                </>
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
                <>
                <img src='/images/nottrade.png'/>
                </>
            )
            } 
    }

    const resultClicked = (listingID) => {
        //grab values for clicked item for modal
        setItem(searchlisting[listingID].vegetable)
        setGardener(searchlisting[listingID].username)
        setitemForSale(searchlisting[listingID].for_sale)
        setPrice(searchlisting[listingID].price)
        setTrade(searchlisting[listingID].trade)
        setTradeItem(searchlisting[listingID].trade_item)
        setInfo(searchlisting[listingID].info)

        //set values for trade and for sale
        if(searchlisting[listingID].for_sale === true){
            setitemForSale('Yes')
            const formattedPrice = Number(searchlisting[listingID].price).toFixed(2)
            setSaleInfo(
                <>
                <p>For Sale: Yes</p>
                <p>Price: ${formattedPrice}</p>
                </>
            )
        }else{
            setitemForSale('No')
            setSaleInfo(
                <>
                <p>For Sale: No</p>
                </>
            )
        }
        if(searchlisting[listingID].trade === true){
            setTrade('Yes')
            setTradeInfo (
                <>
                <p>Trade: Yes</p>
                <p>Desired Trade Item: {searchlisting[listingID].trade_item}</p>
                </>
            )
        }else{
            setTrade('No')
            setTradeInfo (
                <>
                <p>Trade: No</p>
                </>
            )
        }

        if(searchlisting[listingID].username === user){
            setButtonDisplay( 
                <>
           <p>This is your listing. Would you like to delete?</p>
           <Button color="secondary" onClick={() => {deleteListing(searchlisting[listingID].id)}}>Delete</Button>
           </>
           )
       }else{
           setButtonDisplay(
         <Button color="primary" onClick={() => {contactClick(listingID)}}>Contact</Button>
           )
       }

        //format date
        let dbDate = searchlisting[listingID].when_posted
        setWhen(dbDate.slice(5,7) + "/" + dbDate.slice(8,10) + "/" + dbDate.slice(0,4))

        handleOpen()
    }

    const checkLoad = () =>{
        //checks if data is available. If not, it displays loading. Once data is available, the data is displayed. 
        //deals with data races in React.
        if(!Array.isArray(searchlisting)){
            return(<p>Loading...</p>)
        } else{
            return(
                <> 
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                <div className="searchResultsMain">
                    <div className="searchResults">
                    {searchlisting.map((listing, index) => {
                            return(
                                <div key={index} className="searchListingResult" onClick={() => {resultClicked(index)}}>
                                    <div className="itemInfo">
                                        <h4>{listing.vegetable}</h4>
                                    </div>

                                    <div className="itemSale">
                                        {forSale(listing)}          
                                    </div>
                                    <div className="itemTrade">
                                        {forTrade(listing)}          
                                    </div>
                                    <div><h5>Gardener: {listing.username}</h5><h5>When Posted:</h5></div>
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