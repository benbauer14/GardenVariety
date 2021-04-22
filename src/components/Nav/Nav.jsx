import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChatIcon from '@material-ui/icons/Chat';
import {Link, Badge} from '@material-ui/core'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



 function Nav () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const toggleDrawer = () =>{
    dispatch({type: 'SET_DRAWER'})
  }

  const unread = useSelector((store) => store.unread);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={() => toggleDrawer()}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>

          <IconButton edge="start" className={classes.chatButton} color="inherit" aria-label="chat">
          <Badge badgeContent={unread} color="error" onClick={() => history.push('/chat')}>
            <ChatIcon />
          </Badge>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav