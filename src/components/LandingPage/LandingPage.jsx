import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Box, Button } from '@material-ui/core';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome!!!');
  const history = useHistory();

  return (
    <div className="container">
      <img width="200px" height="175px" src='/images/GardenVarietyLogo.png' alt="Garden Variety Logo"/>
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Garden Variety is designed to allow local gardeners the ability to trade or sell any extra fruits or veggies. 
            There is an integrated chat functionality that allowers gardeners to interact and determine meeting times and locations. 
            It is easy to browse the available listings and determine what is available. Listing items on the market is as simple as a few clicks. 
          </p>
        </div>
        <div className="grid-col grid-col_4">
            <Box>
            <h5>New Gardener?</h5>
            <div onClick={() => {history.push('/registration')}}><Button variant="contained" color="primary">Register</Button></div>
            </Box>
            <Box>
            <h5>Already a Member?</h5>
            <div onClick={() => {history.push('/login')}}><Button variant="contained" color="primary">Login</Button></div>
            </Box>
        </div>
    </div>
    </div>
  );
}

export default LandingPage;
