import { Box, Button, Checkbox, makeStyles, TextField } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"

const useStyles =makeStyles(theme => ({
    textField:{
      background: "white",
      opacity: "80%",
      border: "1px solid green",
      margin: "5px"
    }
  }))

function UpdateListing () {
const listinginfo = useSelector(store => store.updatelisting)
const [veg, setVeg] = useState(null)
const [quantity, setQuantity] = useState(null)
const [forsale, setForSale] = useState(true)
const [trade, setTrade] = useState(true)
const [tradeitem, setTradeItem] = useState(null)
const [price, setPrice] = useState(null)
const [info, setInfo] = useState(null)
const [isloaded, setIsLoaded] = useState(false)

const classes = useStyles();

const renderForSale = () =>{
    if(forsale === true){
        return(
            <Checkbox
            defaultChecked
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onChange={(event) => setForSale(event.target.checked)}
        /> 
        )
    }else{
        return(
            <Checkbox
            indeterminate={false}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onChange={(event) => setForSale(event.target.checked)}
        /> 
        )
    }
}

const renderForTrade= () =>{
    if(trade === true){
        return(
            <Checkbox
            defaultChecked
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onChange={(event) => setTrade(event.target.checked)}
        /> 
        )
    }else{
        return(
            <Checkbox
            indeterminate={false}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onChange={(event) => setTrade(event.target.checked)}
        /> 
        )
    }
}
const history = useHistory()
const updateListing = () => {

    axios.put('api/listing/update/', {
        id: listinginfo.data[0].id,
        forsale: forsale,
        veg: veg, 
        quantity: quantity,
        trade: trade,
        tradeitem: tradeitem,
        price: price,
        info: info,
    }).then((response) => {
        console.log(response)
        dispatch({type: 'UPDATE_LISTING', payload: listinginfo.data[0].id})
    }).catch((err) => {
        console.log(err)
    })
    history.push('/user')
}

let initialrun = () => {
        console.log(isloaded)
        setIsLoaded(true)
        setVeg(listinginfo.data[0].vegetable)
        setQuantity(listinginfo.data[0].quantity)
        setTradeItem(listinginfo.data[0].trade_item)
        setInfo(listinginfo.data[0].info)
        setPrice(listinginfo.data[0].price)
        setForSale(listinginfo.data[0].for_sale)
        setTrade(listinginfo.data[0].trade)
}

    if(!Array.isArray(listinginfo.data)){
        return(<div>Loading...</div>)

    }else{

        if(isloaded === false){initialrun()}
        
        return(

             <div>

             <div className="newListing">
             <h2>Edit Listing</h2>
             <Box classname="newListingBox">
                 <Box className="newItem" display="flex" justifyContent="center">
                     <TextField
                       label="Item"
                       margin="normal"
                       className={classes.textField}
                       variant="outlined"
                       size="small"
                       defaultValue={listinginfo.data[0].vegetable}
                       onBlur={(event) => setVeg(event.target.value)}
                     />
                 </Box>
                     <Box display="flex" justifyContent="center">
                     <TextField
                     label="Quantity"
                     margin="normal"
                     variant="outlined"
                     className={classes.textField}
                     defaultValue={listinginfo.data[0].quantity}
                     style={{ width: 100 }}
                     onBlur={(event) => setQuantity(event.target.value)}
                     type="number"
                     size="small"
                     />
                     </Box>
                 <Box className="forSale" display="flex" alignItems="center" justifyContent="center" >
                 {renderForSale(listinginfo.data[0].for_sale)} For Sale?  <TextField
                 label="Price"
                 margin="normal"
                 className={classes.textField}
                 defaultValue={listinginfo.data[0].price}
                 style={{ width: 100 }}
                 variant="outlined"
                 onBlur={(event) => setPrice(event.target.value)}
                 type="number"
                 size="small"
                 />
                 </Box>
                 <Box display="flex" alignItems="center" justifyContent="center">
                     <div className="forTradeCheckbox">
                     {renderForTrade(listinginfo.data[0].trade)} Trade?
                     </div>
                     <div className="tradeAutocomplete">
                         <TextField
                             label="Desired Trade Item"
                             margin="normal"
                             className={classes.textField}
                             defaultValue={listinginfo.data[0].trade_item}
                             style={{ width: 200}}
                             variant="outlined"
                             size="small"
                             onBlur={(event) => setTradeItem(event.target.value)}
                         />
                     </div>
                  </Box>
                 <div className="info">
                     <Box className="info" display="flex" alignItems="center" justifyContent="center">
                 <TextField
                     label="Other Info?"
                     margin="normal"
                     style={{ width: 300 }}
                     className={classes.textField}
                     defaultValue={listinginfo.data[0].info}
                     multiline="true"
                     rows="2"
                     variant="outlined"
                     onBlur={(event) => setInfo(event.target.value)}
                     type="number"
                     size="small"
                 />
                 </Box>
                 </div>
                 </Box>
                 <Box display="flex" alignItems="center" justifyContent="center">
                     <Button color="primary" variant="contained" onClick={() => updateListing()}>Update</Button>
                 </Box>
             </div>
                
             </div>
        )
    }
}

export default UpdateListing