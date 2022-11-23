import React, { useState, useEffect } from "react";
import axios, { HttpStatusCode } from "axios";
import { Form } from "react-bootstrap";
import {  useParams,useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
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


const Registration = () => {
    // let history = useHistory();
    const navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState([]);
  
    const {name,email,emp_id,password,password2,is_active=true,is_admin=true,is_staff=true} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    // useEffect(() => {
    //   loadUser();
    // }, []);
    
  
    const onSubmit = async e => {
      console.log(user)
      e.preventDefault();


      

      if(name===''){
         alert("Please fill Details");
         return false;
        }
         else if(email===''){
          alert("Please fill Email");
          return false;
         }
         else if(emp_id==='') {
          alert("Please fill Emp Id");
          return false;
         }

        if(password === ''){
         alert("Please enter password");
         return false;
        }
       if(name===password){
         alert("username and password not to be same");
         return false;
        }
         else if(password !== password2){
         alert("password and confirm password must be same");
         return false;
         }
      await axios.post(`http://127.0.0.1:8000/register/`, user)
      .then(res=>res.json())
      .then((result)=>{
          alert(result );
  
      },
      (error)=>{
           alert('Updated successfully');
      });
      navigate('/dashboard');
    };
    return (
      <div>
        <SideBar/>
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Registration</h2>
  
  
          
          <Form onSubmit={e => onSubmit(e)}>
          
           <div className="row">
          <Form.Group controlId="name" className="col-md-6 form-group">

            <b>Employee Name:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="text"
                
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
               
              />
          </Form.Group>
          <Form.Group controlId="email" className="col-md-6 form-group">

            <b>Email:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="text"
                
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>
              <Form.Group controlId="emp_id" className="col-md-6 form-group">

            <b>Employee id:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="text"
                
                placeholder="Enter Emp Id"
                name="emp_id"
                value={emp_id}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>
           <Form.Group controlId="password" className="col-md-6 form-group">

            <b>Password:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="password"
                
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>
           <Form.Group controlId="password2" className="col-md-6 form-group">

            <b>Confirm Password:</b>&nbsp;&nbsp;&nbsp;
              <Form.Control
                type="password"
                
                placeholder="Enter Confirm Password "
                name="password2"
                value={password2}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>&nbsp;&nbsp;&nbsp;
           {/* <Form.Group controlId="is_active" className="col-md-6 form-group">
            <b>is_active:</b>&nbsp;&nbsp;&nbsp;
              <input

                type="checkbox"
                
              
                name="is_active"
                value={true}
                onChange={e => onInputChange(e)}
               
              />
          </Form.Group> */}
          <Form.Group controlId="is_admin" className="col-md-6 form-group">
          &nbsp;&nbsp;&nbsp;<b>Admin:</b>&nbsp;&nbsp;
              <input
                type="checkbox"
                
               
                name="is_admin"
                value={true}
                onChange={e => onInputChange(e)}
               
              />
           </Form.Group>
           {/* <Form.Group controlId="is_staff" className="col-md-6 form-group">
            <b>is_staff:</b>&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
              
                name="is_staff" 
                value={true}
                onChange={e => onInputChange(e)}
               
              />
          </Form.Group> */}
             <button className="btn btn-warning btn-block">Submit</button>
             </div>
          </Form>
        </div>
      </div>
      </div>
    );
  };
  
  export default Registration;