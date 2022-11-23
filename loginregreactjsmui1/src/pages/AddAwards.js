import moment from "moment";
 import {  useParams,useNavigate } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
  import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import SideBar from "./SideBar";
import "./AddAwards.css";
// import "./leavehistory.css"

axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem('access_token');
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
  },
  error => {
      Promise.reject(error)
});

axios.interceptors.response.use((response) => { // block to handle success case
  return response
}, function (error) { // block to handle error case
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url ===
'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 

      // Redirect to any unauthorised route to avoid infinite loop...
      return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token

      originalRequest._retry = true;
      const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
      return axios.post('/auth/token',
          {
              "refresh_token": refreshToken
          })
          .then(res => {
              if (res.status === 201) {
                  localStorage.setItem('auth_token',res.data);
                  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
                  return axios(originalRequest);
              }
          })
  }
  return Promise.reject(error);
});

const AddAwards = () => {
  // let history = useHistory();
  const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState([]);
  

  const { first_name, Empofmonth,Empofyear} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   loadUser();
  // }, []);
  

  const onSubmit = async e => {
    console.log(user)
    e.preventDefault();
    await axios.post(`http://127.0.0.1:8000/empmonthpost/`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
       
    },
    (error)=>{
        alert('Updated successfully');
        
    });
    navigate('/dashboard');
    // navigate(`/LeaveManagement/leavehistory/${id}`);
 //  history.push("/LeaveManagement/applyleave/approveleave");
//  navigate('/LeaveManagement/applyleave/approveleave');
  };

  // const loadUser = async () => {
  //   const result = await axios.get(`http://127.0.0.1:8000/api/user/individualleave/${id}`);
  //   setUser(result.data);
  // };
  return (
    <div className="sidebarA">
      <SideBar/><div>
      <div className="container">
      <div className="">

      <Link to="/LeaveManagement/applyleave/approveleave">
        
      {/* <button type="button" className="button">
           Approve leaves
           </button> */}
 </Link>
 </div>
 <div className="h2A">
 Add Awards</div>

      <div className="shadow">
        
        <Form onSubmit={e => onSubmit(e)}>
        
        <div className="row">
        
        <Form.Group controlId="eid" className="col-md-6 form-group">

          <b>Employee Name:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Emp Name"
              name="first_name"
              value={first_name}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
         
         
          <Form.Group controlId="first_name" className="col-md-6 form-group">
          <b>Emp of Month:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Emp of Month"
              name="Empofmonth"
              value={Empofmonth}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
         
         
          <Form.Group controlId="approver" className="col-md-6 form-group">

          <b>Emp of Year:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Emp of Year"
              name="Empofyear"
              value={Empofyear}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
        
  
          
         
         
          {/* <div className="form-group">
                  <label>Status</label>
                  <Form.Control
                  as="select"
                  // onChange={(e) => setUser(e.target.value)}
                  onChange={e => onInputChange(e)}
                  name = "status"
                  value = {status}
                >
                  
                  
                  <option>Apply</option>
                  
                  
                </Form.Control>
                
              </div> */}
           
       
          
          <button className="applybutton">Submit</button>
          </div>
        </Form>
     
      </div>
   
    </div>
    </div>
    </div>
  );
};

export default AddAwards;