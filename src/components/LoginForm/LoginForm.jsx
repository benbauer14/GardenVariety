import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles'
import './LoginForm.css'

const useStyles = makeStyles(theme => ({
  textField:{
    background: "white",
    opacity: "80%",
    border: "1px solid green",
    margin: "5px"
  }
}))

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const classes = useStyles();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
        <Box display="flex" justifyContent="center">
          <TextField 
            label="Username"
            margin="normal"
            className={classes.textField}
            variant="outlined"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <TextField 
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            name="password"
            className={classes.textField}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
      <Box display="flex" justifyContent="center">
        <Button color="primary" variant="contained" type="submit" name="submit" color="primary">Login</Button>
      </Box>
    </form>
  );
}

export default LoginForm;
