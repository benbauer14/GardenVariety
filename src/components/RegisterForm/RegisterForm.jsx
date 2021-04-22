import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email: email,
        bio: bio,
        avatar: avatar
      },
    });
  }; // end registerUser

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
            Avatar:
          </label>
        </div>
        <div>
            <input
              type="avatar"
              name="avatar"
              value={avatar}
              required
              onChange={(event) => setAvatar(event.target.value)}
            />
        </div>
      </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" onClick={() => registerUser()}/>
        </div>
    </>
  );
}

export default RegisterForm;
