import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer as MUIDrawer} from '@material-ui/core/';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Drawer = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const closeDrawer = () => {
        dispatch({type: 'UNSET_DRAWER'})    
    }
    const logOutClick = () => {
        dispatch({ type: 'LOGOUT' })
        dispatch({type: 'UNSET_DRAWER'})    
        history.push('/')
    }
    const homeClick = () => {
        dispatch({type: 'UNSET_DRAWER'})    
        history.push('/')
    }
    const searchClick = () => {
        dispatch({type: 'UNSET_DRAWER'})    
        history.push('/search')
    }
    const tradeClick = () => {
        dispatch({type: 'UNSET_DRAWER'})    
        history.push('/trade')
    }
    const chatClick = () => {
        dispatch({type: 'UNSET_DRAWER'})    
        history.push('/chat')
    }
    const drawerState = useSelector((store) => store.drawer)
    const itemsList = [{text: 'Home', 
                            icon: <HomeIcon/>,
                            onClick: () => homeClick(),
                            color: 'primary'}, 
                        {text: 'Search', 
                            icon: <SearchIcon/>,
                            onClick: () => searchClick()}, 
                        {text: 'Trade/Sell Items',
                            icon: <SwapHorizIcon/>,
                            onClick: () => tradeClick()},
                        {text: 'Chat', 
                            icon: <ChatIcon />,
                            onClick: () => chatClick()}]

    const useStyles = makeStyles({
        MuiDrawer: {
            backgroundColor: "#639a67",
            color: "#FFF"
            }
    });
    const classes = useStyles();
    return(
        <MUIDrawer classes={{paper: classes.MuiDrawer}} onClose={() => closeDrawer()}  open={drawerState}>
            <List>
                {itemsList.map((item, index) => {
                const {text, icon, onClick} = item
                return(
                    <ListItem button key={text} onClick={onClick}>
                        {icon  && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={text} />
                    </ListItem>
                )})}
            </List>
            <Divider />
            <List>
            {['Logout'].map((text, index) => (
                <ListItem button key={text} onClick={() => logOutClick()}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}                   
            </List>
        </MUIDrawer>
    )
}

export default Drawer;
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
