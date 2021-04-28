import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [icons, setIcons] = useState([]);
  const errors = useSelector((store) => store.errors);
  const [selectIcon, setSelectIcon] = useState(1)
  const dispatch = useDispatch();


  useEffect(() => {getIcons()}, []);

  const registerUser = (event) => {

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email: email,
        bio: bio,
        avatar: selectIcon
      },
    });
  }; // end registerUser

  const getIcons = () =>{
    axios.get('/api/icons').then((response) => {
      setIcons(response.data.rows)
    }).catch((err) => {
      console.log("Error", err)
    })
  }
 
  return (
    <>
    <h3>Welcome! Please register.</h3>
    {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
    <div className="registrationForm">
        <div>
          <label htmlFor="username">
            Username:
          </label>
        </div>
        <div>
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
        </div>
        <div>
          <label htmlFor="password">
            Password:
          </label>
        </div>
        <div>
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
        </div>
        <div>
          <label htmlFor="email">
            Email:
          </label>
        </div>
        <div>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
        </div>
        <div>
          <label htmlFor="bio">
            Tell us about yourself:
          </label>
        </div>
        <div className="bioLabel">  
            <input
              className="bioInput"
              type="bio"
              name="bio"
              value={bio}
              required
              onChange={(event) => setBio(event.target.value)}
            />
        </div>
        <div>
          <label htmlFor="avatar">
            Icon:
          </label>
        </div>
        <div className="icons">
          {icons.map(icon =>{
            return(
              <>
            <div className="iconDiv">
            <img onClick={() => {setSelectIcon(icon.id)}} src={icon.path} alt={icon.avatar} />
            </div>
            </>
            )
          })} 
        </div>
      </div>
        <div>
          <Box display="flex" justifyContent="center" className="registerBox">
          <Button className="btn" type="submit" name="submit" onClick={() => registerUser()}>Register</Button>
          </Box>
          <hr></hr>
        </div>
    </>
  );
}

export default RegisterForm;