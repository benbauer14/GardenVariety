import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import './LoginPage.css'

function LoginPage() {
  const history = useHistory();

  return (
    <div className="loginDiv">
      <LoginForm />
      <Box display="flex" justifyContent="center">
        <Button 
        type="button"
        color="primary" 
        variant="contained" 
        opacity= "85%"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/registration');
        }}
        color="primary">Register</Button>
      </Box>
    </div>
  );
}

export default LoginPage;
