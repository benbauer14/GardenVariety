import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import './Search.css'


function Search() {
  const [veg, setVeg] = useState("")
  const [trade, setTrade] = useState("")
  const [when, setWhen] = useState("")
  return (
    <div className="searchdiv">
      <Autocomplete
              freeSolo
              id="free-solo"
              disableClearable
              options={vegetables.map((option) => option.vegetable)}
              renderInput={(params) => (
                <TextField
                  {...params}

                  label="Search"
                  margin="normal"
                  variant="outlined"
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
              <select id="buy" onChange={(event) => setWhen(event.target.value)}>
                <option value=""></option>
                <option value="3">last 3 days</option>
                <option value="7">last 7 days</option>
                <option value="14">last 14 days</option>
              </select>
              </label>
            </p>
      <Button onClick={() => alert(when)}>ASDF</Button>
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
