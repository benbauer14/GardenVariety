import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Search.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import moment from 'moment'
import {makeStyles} from '@material-ui/core/styles'
import { Box } from '@material-ui/core';

const useStyles =makeStyles(theme => ({
  textField:{
    background: "white",
    opacity: "80%",
    border: "1px solid green",
    margin: "5px"
  }
}))

function Search() {
  const [veg, setVeg] = useState("")
  const [trade, setTrade] = useState("")
  const [buy, setBuy] = useState("")
  const [when, setWhen] = useState("")
  
  const classes = useStyles();


  const dispatch = useDispatch()
  const history = useHistory()

  const submitSearch = () => {
    dispatch({type: 'SEARCH_LISTINGS', veg: veg, trade: trade, buy: buy, when})
    history.push('/searchresults')
  }
  const dateSubtract = (numofdays) => {
    return(moment().subtract(numofdays, 'days').format('L'))
  }
  return (
    <div className="searchdiv">
      <h2>Search</h2>
      <Autocomplete
              freeSolo
              id="free-solo"
              disableClearable
              options={vegetables.map((option) => option.vegetable)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="medium"
                  label="Search"
                  margin="normal"
                  className={classes.textField}
                  background="primary"
                  color="primary"
                  variant="filled"
                  onBlur={(event) => setVeg(event.target.value)}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
            <p>
              <label>Wanna trade?:
              <select id="trade" onChange={(event) => setTrade(event.target.value)}>
                <option value=""></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              </label>
            </p>
            <p>
              <label>Wanna buy?:
              <select id="buy" onChange={(event) => setBuy(event.target.value)}>
                <option value=""></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              </label>
            </p>
            <p>
              <label>When Posted?:
              <select id="when" onChange={(event) => setWhen(event.target.value)}>
                <option value=""></option>
                <option value={dateSubtract(3)}>last 3 days</option>
                <option value={dateSubtract(7)}>last 7 days</option>
                <option value={dateSubtract(14)}>last 14 days</option>
              </select>
              </label>
            </p>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button variant="contained" color="primary" onClick={() => submitSearch()}>Search</Button>
            </Box>
    </div>
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

export default Search;
