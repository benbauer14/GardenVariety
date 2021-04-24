import './SearchResults.css'
import {useSelector } from "react-redux";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'


function SearchResults () {
    const searchlisting = useSelector((store) => store.searchlisting);
    const user = useSelector((store => store.user))

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

  const [item, setItem] = useState('')
  const [gardener, setGardener]= useState('')
  const [itemforSale, setitemForSale]= useState('')
  const [price, setPrice] = useState('')
  const [trade, setTrade] = useState('')
  const [tradeItem, setTradeItem]  = useState('')
  const [info, setInfo] = useState('') 
  const [when, setWhen] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//END MODAL CODE

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Information</h4>
      <p id="simple-modal-description">
        <h4>Item: {item}</h4>
        <p>Gardener: {gardener}</p>
        <p>For Sale: {itemforSale}</p>
        <p>Price: {price}</p>
        <p>Trade: {trade}</p>
        <p>Desired trade item: {tradeItem}</p>
        <p>Extra Info: {info}</p>
        <p>When Posted: {when}</p>
        <Button color="primary">Contact</Button>
      </p>
    </div>
  );


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
        setItem(searchlisting[listingID].vegetable)
        setGardener(searchlisting[listingID].username)
        setitemForSale(searchlisting[listingID].for_sale)
        setPrice(searchlisting[listingID].price)
        setTrade(searchlisting[listingID].trade)
        setTradeItem(searchlisting[listingID].trade_item)
        setInfo(searchlisting[listingID].info)
        setWhen(searchlisting[listingID].when_posted)
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