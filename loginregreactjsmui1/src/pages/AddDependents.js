import { Link, useHistory } from "react-router-dom";
// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
// import SideBar from "./SideBar";
import moment from "moment";
import React, { useState, useEffect } from "react";
import axios, { HttpStatusCode } from "axios";
import { Form } from "react-bootstrap";
import {  useParams,useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import "./ApplyLeave.css";

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


const AddDependents  = () => {
    // let history = useHistory();
    const navigate = useNavigate()
    
    const [user, setUser] = useState([]);
  
    const {did,emp_id,employee_name,dependent_name,relation} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    // useEffect(() => {
    //   loadUser();
    // }, []);
    
  
    const onSubmit = async e => {
      console.log(user)
      e.preventDefault();
      await axios.post(`http://127.0.0.1:8000/postdependents/`, user)
      .then(res=>res.json())
      .then((result)=>{
          alert(result);
  
      },
      (error)=>{
          alert('Updated successfully');
      });
   //  history.push("/LeaveManagement/applyleave/approveleave");
  //  navigate('/LeaveManagement/applyleave/approveleave');
    };
  
    // const loadUser = async () => {
    //   const result = await axios.get(`http://127.0.0.1:8000/api/user/individualleave/${id}`);
    //   setUser(result.data);
    // };
    return (
      <div>
        <div className="sidebarA">
        <SideBar/></div>
        


      <div className="container">
{/* <Link className="btn btn-outline-warning mr-2" to="/dependents/approvaldependent">Add </Link> */}

        <div className="w-75 mx-auto shadow p-5">
        <div className="h2A">
 Add Dependents</div>
  
  
          
          <Form onSubmit={e => onSubmit(e)}>
          <div className="row">
           
        
          <Form.Group controlId="emp_id" className="col-md-6 form-group">
            <b>Emp id:</b>&nbsp;&nbsp;&nbsp;
           <Form.Control

                type="text"
                
                placeholder="Enter Emp Id"
                name="emp_id"
                value={emp_id}
                onChange={e => onInputChange(e)}
               
              />
           
            </Form.Group>
            <Form.Group controlId="first_name" className="col-md-6 form-group">

            <b>Employee Name:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="text"
                
                placeholder="Enter Employee Name"
                name="employee_name"
                value={employee_name}
                onChange={e => onInputChange(e)}
               
              />
            </Form.Group>
            <Form.Group controlId="dependent_name" className="col-md-6 form-group">

            <b>Dependent Name:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control 
                type="text"
                
                placeholder="Enter Dependent Name"
                name="dependent_name"
                value={dependent_name}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>
           <Form.Group controlId="relation" className="col-md-6 form-group">

            <b>Relation:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="text"
                
                placeholder="Enter Relation"
                name="relation"
                value={relation}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>  
         &nbsp;&nbsp;&nbsp; <button className=" btn btn-warning btn-block">Submit</button>
            </div>
          </Form>
        </div>
      </div>
      </div>
    );
  };
  
  export default AddDependents ;