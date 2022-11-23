import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import Header from '../components/Header';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import React,{ useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import SideBar from './SideBar';
import './Dashboard.css'
//import Card from 'react-bootstrap/Card';
import { Navigate , Routes, Route, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import styles from 'bootstrap/dist/css/bootstrap.css';
import {Card,CardGroup} from 'react-bootstrap';
import axios from 'axios';


const Dashboard = () => {
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
    email:"",
    name:""
  })

  const[leavecount,setLeaveCount] = useState([])

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    
    const  result= await axios.get("http://127.0.0.1:8000/leavelistcount/");
    setLeaveCount(result.data[0].cnt);
    console.log(result.data[0].cnt,"tharun");
    


    // let popular = JSON.parse("http://127.0.0.1:8000/api/user/leavelistcount/");

    // const count = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    //   .filter(indicator => indicator.Nume === "Contabilitate").length, participant.INDICATORI
    //   .filter(indicator => indicator.Nume === "4S110").length), 0)
    
    //  console.log(count);
    
  };

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
  var permissions = localStorage.getItem("permissions")
  var permissionsdata = JSON.parse(permissions)
 
   const registration =  permissionsdata.registration.create;

   var permissions = localStorage.getItem("permissions")
   var permissionsdata = JSON.parse(permissions)
  
    const leave_management =  permissionsdata.leave_management.approve;


    var permissions = localStorage.getItem("permissions")
var permissionsdata = JSON.parse(permissions)

 const adddependents =  permissionsdata.adddependents.create;
  return <>
  <div className='sidebardash'>
  <SideBar/></div>
  <Card>
    
 
  <div className={styles.panelStyle} >
      <br></br>
      <marquee style={{ color: 'black',backgroundColor: "lightblue" ,fontSize: '1em',height:"30px",borderRadius: '50px' }}><h5> Employee Self-Service Portal</h5></marquee>
      <hr/>

        Welcome {userData.name}
        <CardGroup>
          
        <row>
       <Card style={{ width: '18rem',padding:"0.5rem" , height: "auto" }}>
       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      
       <Card.Body>
      <Card.Title>No. of people on leave today</Card.Title>
      <Card.Text>
      {leavecount}
      </Card.Text>
      {/* <Button onclick={} >See list </Button> */}
      <Link to="/LeaveManagement/leavelist">
       <button type="button">
          Click 
        </button>
        </Link>
        </Card.Body>
       </Card>
       </row>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       {registration ? (
       <row>
       <Card style={{ width: '18rem',padding:"0.7rem" , height: "auto" }} className='navbar'>
       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

       <Card.Body>
        <div className='row'>
      <Card.Title >Registration.........</Card.Title>
      <Card.Text>
        
      </Card.Text>
      
      {/* <Button onclick={} >See list </Button> */}
      <div>
    
      <Link to="/Registration"><br></br>
       <button type="button">
          Click 
        </button>
        </Link>
      
        </div>
        </div>
        </Card.Body>
       </Card>
       </row>
  ) : (
    <h4></h4>
   
  )}
 {leave_management ? (
<row>
       <Card style={{ width: '18rem',padding:"0.5rem" , height: "auto" }} className='navbar'>
       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

       <Card.Body>
        <div className='row'>
      <Card.Title >Approve List</Card.Title>
      <Card.Text>
        
      </Card.Text>
      {/* <Button onclick={} >See list </Button> */}
      <div>
    
      <Link to="/LeaveManagement/applyleave/approveleave"><br></br>
      <button type="button">
           Approve leaves
      </button>
 </Link>
        </div>
        </div>
        </Card.Body>
       </Card>
       </row>
 ) : (
  <h4></h4>
 
)}
 {registration ? (
<row>
       <Card style={{ width: '18rem',padding:"0.5rem" , height: "auto" }} className='navbar'>
       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

       <Card.Body>
        <div className='row'>
      <Card.Title >Approve Dependent</Card.Title>
      <Card.Text>
        
      </Card.Text>
      {/* <Button onclick={} >See list </Button> */}
      <div>
    
      <Link to="/dependents/approvaldependent"><br></br>
      <button type="button">
           Approve Dependents
      </button>
 </Link>
        </div>
        </div>
        </Card.Body>
       </Card>
       </row>
       ) : (
        <h4></h4>
       
      )}
<row>
{adddependents ? (

<row>
       <Card style={{ width: '18rem',padding:"0.5rem" , height: "auto" }} className='navbar'>
       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

       <Card.Body>
        <div className='row'>
      <Card.Title >Approve Assets</Card.Title>
      <Card.Text>
        
      </Card.Text>
      {/* <Button onclick={} >See list </Button> */}
      <div>
    
      <Link to="/assets/approvalassets"><br></br>
      <button type="button">
           Approve Assets
      </button>
 </Link>
        </div>
        </div>
        </Card.Body>
       </Card>
       </row>
       ) : (
        <h4></h4>
       
      )}
  {registration ? (
       <row>
       <Card style={{ width: '18rem',padding:"0.5rem" , height: "auto"}} className='navbar'>
       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

       <Card.Body>
        <div className='row'>
      <Card.Title >Add Employee Award</Card.Title>
      <Card.Text>
        
      </Card.Text>
      {/* <Button onclick={} >See list </Button> */}
      <div>
    
      <Link to="/AddAwards"><br></br>
       <button type="button">
          Click 
        </button>
        </Link>
      
        </div>
        </div>
        </Card.Body>
       </Card>
       </row>
  ) : (
    <h4></h4>
   
  )}
</row>
       </CardGroup>

  </div>

  </Card>

  </>;
};

export default Dashboard;



// import React, { useState, useEffect } from "react";
// // import {  useParams } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [user, setUser] = useState({
   
//     first_name: "",
//     middle_name: "",
//     last_name: "",
//     dob: "",
//     gender: "",
//     marital_status: "",
//     email_id: "",
//     phone_no: "",
//     emergency_no: "",
//     blood_group: "",
//     highest_qualification: "",
//     pan_no: "",
//     aadhar_no: "",
//     present_address: "",
//     permanent_address: "",
//     designation:"",
//     department_name:"",
//     pf_account:""

//   });
//   // const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://127.0.0.1:8000/essprofile/1`);
//     console.log(res.data)
//     setUser(res.data);
//   };
//   return (
//     <div className="container">

//       <div className="row">
//             <div className="col-md-6">
//               <div className="card">
//                   <div className="body">
//                   <h1>
//                   PROFILE
//                   </h1>
//                   </div>
//               </div>
//             </div>
//              <div className="row">
//             <div className="col-md-9">
//               <div className="card">
//                   <div className="body">
//                   <ul className="list-group w-50">
//         {/* <li className="list-group-item">name: {user.id}</li> */}
//         <li className="list-group-item"><b>first_name:</b> {user.first_name}</li>
//         <li className="list-group-item"><b>middle_name:</b> {user.middle_name}</li>
//         <li className="list-group-item"><b>last_name: </b>{user.last_name}</li>
//         <li className="list-group-item"><b>dob: </b>{user.dob}</li>
//         <li className="list-group-item"><b>gender:</b> {user.gender}</li>
//         <li className="list-group-item"><b>marital_status: </b>{user.marital_status}</li>
//         <li className="list-group-item"><b>email_id:</b> {user.email_id}</li>
//         <li className="list-group-item"><b>phone_no: </b>{user.phone_no}</li>
//         <li className="list-group-item"><b>emergency_no: </b>{user.emergency_no}</li>
//         <li className="list-group-item"><b>blood_group: </b>{user.blood_group}</li>
//         <li className="list-group-item"><b>highest_qualification: </b>{user.highest_qualification}</li>
//         <li className="list-group-item"><b>pan_no:</b> {user.pan_no}</li>
//         <li className="list-group-item"><b>aadhar_no:</b> {user.aadhar_no}</li>
//         <li className="list-group-item"><b>present_address:</b> {user.present_address}</li>
//         <li className="list-group-item"><b>permanent_address:</b> {user.permanent_address}</li>
//         <li className="list-group-item"><b>designation: </b>{user.designation}</li>
//         <li className="list-group-item"><b>department_name:</b> {user.department_name}</li>
//         <li className="list-group-item"><b>pf_account: </b>{user.pf_account}</li>
//       </ul>
//                   </div>
//               </div>
//             </div>
// </div>
//       </div>
//       {/* <Link className="btn btn-primary" to="/">
//         back to Home
//       </Link> */}
//       {/* <h1 className="display-4">User Id: {id}</h1> */}
//       {/* <hr /> */}
     
//     </div>
//   );
// };

// export default Dashboard;
