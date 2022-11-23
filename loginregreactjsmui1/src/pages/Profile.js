
import React, { useState, useEffect } from "react";
// import {  useParams } from "react-router-dom";
import axios from "axios";
import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
// import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import Header from "../components/Header";
import SideBar from "./SideBar";
import "./viewprofilee.css";

const Profile = () => {
  // const [user, setUser] = useState({
   
  //   first_name: "",
  //   middle_name: "",
  //   last_name: "",
  //   dob: "",
  //   gender: "",
  //   marital_status: "",
  //   email_id: "",
  //   phone_no: "",
  //   emergency_no: "",
  //   blood_group: "",
  //   highest_qualification: "",
  //   pan_no: "",
  //   aadhar_no: "",
  //   present_address: "",
  //   permanent_address: "",
  //   designation:"",
  //   department_name:"",
  //   pf_account:""

  // });
  // // const { id } = useParams();
  // useEffect(() => {
  //   loadUser();
  // }, []);
  // const loadUser = async () => {
  //   const res = await axios.get(`http://127.0.0.1:8000/api/user/userprofile/1`);
  //   console.log(res.data)
  //   setUser(res.data);
  // };
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    id:"",
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    // console.log(id, "in profile page")
    if (data && isSuccess) {
      setUserData({
        id:data.id,
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        id: data.id,
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
  
  return (
    
    <div className="">
 <Header></Header>

 <div className="">

 <div className="">
 <SideBar/></div>
 <div className="h2V">PROFILE</div>
 

          
        <div className="Pcol-md-10">
             <div className="row">
            <div className="">
              <div className="card">
                  <div className="body">
                  <ul className="list-group">
        <li className="list-group-item"><b>ID:</b> {userData.id}</li>
        <li className="list-group-item"><b>first_name:</b> {userData.email}</li>
        <li className="list-group-item"><b>middle_name:</b> {userData.name}</li>

        {/* <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button> */}
        <Link class="btn btn-dark mr-2" to={`/viewprofile/${userData.id}`}>View</Link>
      </ul>
                  </div>
              </div>
            </div>
</div>
      </div>
      {/* <Link className="btn btn-primary" to="/">
        back to Home
      </Link> */}
      {/* <h1 className="display-4">User Id: {id}</h1> */}
      {/* <hr /> */}
     
    </div>
    </div>
  );
};

export default Profile;
