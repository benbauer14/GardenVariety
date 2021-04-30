
import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { Box, Button, Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {makeStyles} from '@material-ui/core/styles'
import './NewListing.css'

const useStyles =makeStyles(theme => ({
    textField:{
      background: "white",
      opacity: "80%",
      border: "1px solid green",
      margin: "5px"
    }
  }))

function NewListing () {
const [veg, setVeg] = useState("")
const [quantity, setQuantity] = useState(0)
const [forsale, setForSale] = useState(true)
const [trade, setTrade] = useState(true)
const [tradeitem, setTradeItem] = useState("")
const [price, setPrice] = useState("")
const [info, setInfo] = useState("")

const classes = useStyles();

const userid = useSelector((store => store.user.id))

const dispatch = useDispatch()
const history = useHistory()

const submitNew = () => {
    dispatch({type: "POST_LISTING", veg: veg, quantity: quantity, forsale: forsale, trade: trade, tradeitem: tradeitem, price: price, info: info, userid: userid})
    history.push('/')
}

    return (
        <>
        <div className="newListing">
        <h2>List New Item</h2>
        <Box className="newListingBox">
            <div className="newItem">
            <Box className="newItem" display="flex" justifyContent="center">
            <Autocomplete
              freeSolo
              id="free-solo"
              freeSolo
              disableClearable
              style={{ width: 200 }}
              options={vegetables.map((option) => option.vegetable)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Item"
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                  size="small"
                  onBlur={(event) => setVeg(event.target.value)}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
            </Box>
            </div>
            <div className="newQuantity">
                <Box display="flex" justifyContent="center">
                <TextField
                label="Quantity"
                margin="normal"
                variant="outlined"
                className={classes.textField}
                style={{ width: 100 }}
                onBlur={(event) => setQuantity(event.target.value)}
                type="number"
                size="small"
                />
                </Box>
            </div>
            <div className="forSale">
            <Box className="forSale" display="flex" alignItems="center" justifyContent="center" >
            <Checkbox
                defaultChecked
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onChange={(event) => setForSale(event.target.checked)}
            /> For Sale?  <TextField
            label="Price"
            margin="normal"
            style={{ width: 100 }}
            className={classes.textField}
            variant="outlined"
            onBlur={(event) => setPrice(event.target.value)}
            type="number"
            size="small"
            />
            </Box>
            </div>
            <div className="forTrade">
            <Box display="flex" alignItems="center" justifyContent="center">
                <div className="forTradeCheckbox">

                <Checkbox
                    defaultChecked
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={(event) => setTrade(event.target.checked)}
                /> Trade?
                </div>
                <div className="tradeAutocomplete">
                <Autocomplete
                    id="free-solo"
                    freeSolo
                    disableClearable
                    options={vegetables.map((option) => option.vegetable)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Desired Trade Item"
                        margin="normal"
                        style={{ width: 185}}
                        className={classes.textField}
                        variant="outlined"
                        size="small"
                        onBlur={(event) => setTradeItem(event.target.value)}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                    )}
                />
                </div>
             </Box>
            </div>
            <div className="info">
                <Box className="info" display="flex" alignItems="center" justifyContent="center">
            <TextField
                label="Other Info?"
                margin="normal"
                style={{ width: 300 }}
                multiline={true}
                className={classes.textField}
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
                <Button color="primary" variant="contained" className="newListingButton" onClick={() => submitNew()}>Submit</Button>
            </Box>
        </div>
           
        </>            
      );
      
}
const vegetables = [
    { vegetable: 'Spinach'},
    { vegetable: 'Potato'},
    { vegetable: 'Tomato'},
    { vegetable: 'Celery'},
    { vegetable: 'Broccoli'},
    { vegetable: 'Asparagus'},
    { vegetable: 'Cabbage'},
    { vegetable: 'Carrot'},
    { vegetable: 'Garlic'},
    { vegetable: 'Basil'},
    { vegetable: 'Sweet potato'},
    { vegetable: 'Corn'},
    { vegetable: 'Cucumber'},
    { vegetable: 'Sweet peas'},
    { vegetable: 'Green beans'},
    { vegetable: 'Parsnip'},
    { vegetable: 'Radish'},
    { vegetable: 'Turnip'},
    { vegetable: 'Green onion'},
    { vegetable: 'Onion'},
    { vegetable: 'Zucchini'},
    { vegetable: 'Beet'},
    { vegetable: 'Morel mushroom'},
  
  
  ];

export default NewListing