import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import React from "react";

const Header = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
 
  const handleHome=()=>{
    navigate('/')

  }
  const handleDashboard=()=>{
    navigate('/dashboard')

  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"height="50vh" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>EMPLOYEE SELF SERVICE  PORTAL</Typography>

          {/* <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button> */}

          {/* <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button> */}
          {access_token ? <Button variant='contained' color='success' size='small' onClick={handleHome}  >Home</Button> : <Button component={NavLink} to='/' style={({ isActive }) => { return  }} ></Button> }&nbsp;&nbsp;
          {access_token ? <Button variant='contained' color='primary' size='small' onClick={handleDashboard}  >Dashboard</Button> : <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return  }} ></Button> }&nbsp;&nbsp;

          

          {/* <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button>  */}
          {access_token ? <Button variant='contained' color='warning' size='small' onClick={handleLogout} >Logout</Button> : <Button variant='contained' color='warning' size='large' component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login</Button> }
          {/* <Button variant='contained' color='warning' size='large' onClick={handleLogout} >Logout</Button> */}



        </Toolbar>
      </AppBar>
    </Box>
  </>;
};
export default Header