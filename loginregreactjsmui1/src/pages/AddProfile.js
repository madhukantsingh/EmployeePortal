// // import { Link, useHistory } from "react-router-dom";
// // // import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
// // // import SideBar from "./SideBar";
// // import moment from "moment";
// // import React, { useState, useEffect } from "react";
// // import axios, { HttpStatusCode } from "axios";
// // import { Form } from "react-bootstrap";
// // import {  useParams,useNavigate } from "react-router-dom";
// // import SideBar from "./SideBar";
// // axios.interceptors.request.use(
// //   config => {
// //       const token = localStorage.getItem('access_token');
// //       if (token) {
// //           config.headers['Authorization'] = 'Bearer ' + token;
// //       }
// //       config.headers['Content-Type'] = 'application/json';
// //       return config;
// //   },
// //   error => {
// //       Promise.reject(error)
// // });

// // axios.interceptors.response.use((response) => { // block to handle success case
// //   return response
// // }, function (error) { // block to handle error case
// //   const originalRequest = error.config;

// //   if (error.response.status === 401 && originalRequest.url ===
// // 'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 

// //       // Redirect to any unauthorised route to avoid infinite loop...
// //       return Promise.reject(error);
// //   }

// //   if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token

// //       originalRequest._retry = true;
// //       const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
// //       return axios.post('/auth/token',
// //           {
// //               "refresh_token": refreshToken
// //           })
// //           .then(res => {
// //               if (res.status === 201) {
// //                   localStorage.setItem('auth_token',res.data);
// //                   axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
// //                   return axios(originalRequest);
// //               }
// //           })
// //   }
// //   return Promise.reject(error);
// // });


// // const Addprofile = () => {
// //     // let history = useHistory();
// //     const navigate = useNavigate()
    
// //     const [user, setUser] = useState([]);
  
// //     const {first_name,middle_name,last_name,dob,gender,marital_status,email_id,phone_no,emergency_no,blood_group,highest_qualification,pan_no,aadhar_no,present_address,permanent_address,designation,department_name,pf_account,emp_id} = user;
// //     const onInputChange = e => {
// //       setUser({ ...user, [e.target.name]: e.target.value });
// //     };
  
// //     // useEffect(() => {
// //     //   loadUser();
// //     // }, []);
    
  
// //     const onSubmit = async e => {
// //       console.log(user)
// //       e.preventDefault();
// //       await axios.post(`http://127.0.0.1:8000/api/user/postprofile/`, user)
// //       .then(res=>res.json())
// //       .then((result)=>{
// //           alert(result);
  
// //       },
// //       (error)=>{
// //           alert('Updated successfully');
// //       });
// //    //  history.push("/LeaveManagement/applyleave/approveleave");
// //   //  navigate('/LeaveManagement/applyleave/approveleave');
// //     };
  
// //     // const loadUser = async () => {
// //     //   const result = await axios.get(`http://127.0.0.1:8000/api/user/individualleave/${id}`);
// //     //   setUser(result.data);
// //     // };
// //     return (
// //       <div>
// //         <SideBar/>
// //       <div className="container">
// //         <div className="w-75 mx-auto shadow p-5">
// //           <h2 className="text-center mb-4">AddProfile</h2>
  
  
          
// //           <Form onSubmit={e => onSubmit(e)}>
// //           <div className="row">
           
        
// //           <Form.Group controlId="emp_id" className="col-md-6 form-group">
// //             <b>Emp id:</b>&nbsp;&nbsp;&nbsp;
// //            <Form.Control

// //                 type="text"
                
// //                 placeholder="Enter emp id"
// //                 name="emp_id"
// //                 value={emp_id}
// //                 onChange={e => onInputChange(e)}
               
// //               />
           
// //             </Form.Group>
// //             <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>First Name:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter first name"
// //                 name="first_name"
// //                 value={first_name}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Middle Name:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control 
// //                 type="text"
                
// //                 placeholder="Enter Middle name"
// //                 name="middle_name"
// //                 value={middle_name}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Last Name:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter last name"
// //                 name="last_name"
// //                 value={last_name}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Date of Birth:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter Date of Birth"
// //                 name="dob"
// //                 value={dob}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //          </Form.Group>
// //          <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Gender:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter Gender"
// //                 name="gender"
// //                 value={gender}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //           </Form.Group>
// //           <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Marital Status:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter Marital status"
// //                 name="marital_status"
// //                 value={marital_status}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Email Id:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter email id"
// //                 name="email_id"
// //                 value={email_id}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //           </Form.Group>
// //           <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Phone No:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter phone no"
// //                 name="phone_no"
// //                 value={phone_no}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Emergency No:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter emergency no"
// //                 name="emergency_no"
// //                 value={emergency_no}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Blood Group:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter blood group"
// //                 name="blood_group"
// //                 value={blood_group}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Highest Qualification:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter highest qualification"
// //                 name="highest_qualification"
// //                 value={highest_qualification}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //             </Form.Group>

// //             <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Pan No:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter pan no"
// //                 name="pan_no"
// //                 value={pan_no}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //           </Form.Group>
// //           <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Aadhar No:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter aadhar no"
// //                 name="aadhar_no"
// //                 value={aadhar_no}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Present Address:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter present address"
// //                 name="present_address"
// //                 value={present_address}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Permanent Address:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter permanent address"
// //                 name="permanent_address"
// //                 value={permanent_address}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>
// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Designation:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter designation"
// //                 name="designation"
// //                 value={designation}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>Department Name:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter Department name"
// //                 name="department_name"
// //                 value={department_name}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //            </Form.Group>

// //            <Form.Group controlId="first_name" className="col-md-6 form-group">

// //             <b>PF Account:</b>&nbsp;&nbsp;&nbsp;
// //               <Form.Control
// //                 type="text"
                
// //                 placeholder="Enter pf account"
// //                 name="pf_account"
// //                 value={pf_account}
// //                 onChange={e => onInputChange(e)}
               
// //               />
// //           </Form.Group>
            
          
            
// //          &nbsp;&nbsp;&nbsp; <button className=" btn btn-warning btn-block">Submit</button>
// //             </div>
// //           </Form>
// //         </div>
// //       </div>
// //       </div>
// //     );
// //   };
  
// //   export default Addprofile;


// import React,{ useState, useEffect } from "react";
// import { PageHeader, Form,Grid, Row, Col, Image } from 'react-bootstrap';
// import axios from "axios";
// import SideBar from "./SideBar";
// import { Link, useParams } from "react-router-dom";
// import { toast} from 'react-toastify';
// import { getToken, storeToken } from '../services/LocalStorageService';

// function AddProfile() {
//   const { access_token } = getToken()
//   const [ File, setFile ] = useState("");
//   const [ first_name, setFirst ] = useState("");
//   const [ middle_name, setMiddle ] = useState("");
//   const [ last_name, setLast ] = useState("");
//   const [ dob, setDob ] = useState("");
//   const [ gender, setGender ] = useState("");
//   const [ marital_status, setMarital ] = useState("");
//   const [ email_id, setEmail ] = useState("");
//   const [ phone_no, setPhone ] = useState("");
//   const [ emergency_no, setEmg ] = useState("");
//   const [ blood_group, setBlood ] = useState("");
//   const [ highest_qualification, setHighest ] = useState("");
//   const [ pan_no, setPan ] = useState("");
//   const [ aadhar_no, setAadhar ] = useState("");
//   const [ present_address, setPresent ] = useState("");
//   const [ permanent_address, setPermanent ] = useState("");
//   const [ designation, setDesignation ] = useState("");
//   const [ department_name, setDepartment ] = useState("");
//   const [ pf_account, setPf ] = useState("");
  



//   const [ emp_id, setEmp ] = useState("");
//   const [ attacthment, setDetails ] = useState();

//   const fileSubmit = () => {
//     const uploadData = new FormData();
//     uploadData.append('File', File);
//     uploadData.append('emp_id', emp_id);
//     uploadData.append('first_name', first_name);
//     uploadData.append('middle_name', middle_name);
//     uploadData.append('last_name', last_name);
//     uploadData.append('dob', dob);
//     uploadData.append('gender', gender);
//     uploadData.append('marital_status', marital_status);
//     uploadData.append('email_id', email_id);
//     uploadData.append('phone_no', phone_no);
//     uploadData.append('emergency_no', emergency_no);
//     uploadData.append('blood_group', blood_group);
//     uploadData.append('highest_qualification', highest_qualification);
//     uploadData.append('pan_no', pan_no);
//     uploadData.append('aadhar_no', aadhar_no);
//     uploadData.append('present_address', present_address);
//     uploadData.append('permanent_address', permanent_address);
//     uploadData.append('designation', designation);
//     uploadData.append('department_name', department_name);
//     uploadData.append('pf_account', pf_account);

    
//     uploadData.append('attacthment', attacthment, attacthment.name);
    
//     fetch('http://127.0.0.1:8000/postprofile/', {
//       method: 'POST',
//       body: uploadData,
//       headers: {
//         'authorization': `Bearer ${access_token}`,
//       } 
//     })
//     .then( res => console.log(res))
//     .catch(error => console.log(error))
//   }

//   //  const isLoggedIn =1;
// //  const payroll =  permissionsdata.payroll.upload;
//  var permissions = localStorage.getItem("permissions")
//  var permissionsdata = JSON.parse(permissions)

//   const payroll =  permissionsdata.payroll.upload;
//  //console.log("permissionsXXXX", permissionsdata.payroll.upload)
//   return (
//     <div>
//     <SideBar/>

    
//   <div className="App">

//   <h3>Upload </h3>
//     <Form.Group controlId="emp_id" className="col-md-6 form-group">
//     <b>Emp Id</b>
//     <Form.Control type="text" value={emp_id} onChange={(evt) => setEmp(evt.target.value)}/>
//   </Form.Group>
//   <Form.Group controlId="first_name" className="col-md-6 form-group">
//     <b> first_name</b>
//     <Form.Control type="text" value={first_name} onChange={(evt) => setFirst(evt.target.value)}/>
//   </Form.Group>
//   <Form.Group controlId="middle_name" className="col-md-6 form-group">
//     <b> middle_name</b>
//     <Form.Control type="text" value={middle_name} onChange={(evt) => setMiddle(evt.target.value)}/>
//   </Form.Group>
//   <Form.Group controlId="last_name" className="col-md-6 form-group">
//     <b>last_name</b>
//     <Form.Control type="text" value={last_name} onChange={(evt) => setLast(evt.target.value)}/>
//   </Form.Group>
//   <Form.Group controlId="dob" className="col-md-6 form-group">
//     <b> dob</b>
//     <Form.Control type="text" value={dob} onChange={(evt) => setDob(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="gender" className="col-md-6 form-group">
//     <b> gender</b>
//     <Form.Control type="text" value={gender} onChange={(evt) => setGender(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="marital_status" className="col-md-6 form-group">
//     <b>marital_status</b>
//     <Form.Control type="text" value={marital_status} onChange={(evt) => setMarital(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="email_id" className="col-md-6 form-group">
//     <b>email_id</b>
//     <Form.Control type="text" value={email_id} onChange={(evt) => setEmail(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="phone_no" className="col-md-6 form-group">
//     <b> phone_no</b>
//     <Form.Control type="text" value={phone_no} onChange={(evt) => setPhone(evt.target.value)}/>
//   </Form.Group>
  
//   <Form.Group controlId="emergency_no" className="col-md-6 form-group">
//     <b> emergency_no</b>
//     <Form.Control type="text" value={emergency_no} onChange={(evt) => setEmg(evt.target.value)}/>
//   </Form.Group>
  
//   <Form.Group controlId="blood_group" className="col-md-6 form-group">
//     <b> blood_group</b>
//     <Form.Control type="text" value={blood_group} onChange={(evt) => setBlood(evt.target.value)}/>
//   </Form.Group>
  
//   <Form.Group controlId="highest_qualification" className="col-md-6 form-group">
//     <b> highest_qualification</b>
//     <Form.Control type="text" value={highest_qualification} onChange={(evt) => setHighest(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="pan_no" className="col-md-6 form-group">
//     <b> pan_no</b>
//     <Form.Control type="text" value={pan_no} onChange={(evt) => setPan(evt.target.value)}/>
//   </Form.Group>

//  <Form.Group controlId="aadhar_no" className="col-md-6 form-group">
//     <b> aadhar_no</b>
//     <Form.Control type="text" value={aadhar_no} onChange={(evt) => setAadhar(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="present_address" className="col-md-6 form-group">
//     <b> present_address</b>
//     <Form.Control type="text" value={present_address} onChange={(evt) => setPresent(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="permanent_address" className="col-md-6 form-group">
//     <b> permanent_address</b>
//     <Form.Control type="text" value={permanent_address} onChange={(evt) => setPermanent(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="designation" className="col-md-6 form-group">
//     <b> designation</b>
//     <Form.Control type="text" value={designation} onChange={(evt) => setDesignation(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="department_name" className="col-md-6 form-group">
//     <b> department_name</b>
//     <Form.Control type="text" value={department_name} onChange={(evt) => setDepartment(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="pf_account" className="col-md-6 form-group">
//     <b> pf_account</b>
//     <Form.Control type="text" value={pf_account} onChange={(evt) => setPf(evt.target.value)}/>
//   </Form.Group>

//   <Form.Group controlId="Upload" className="col-md-6 form-group">
//     <b> attacthment</b>
//     <Form.Control type="file" onChange={(evt) => setDetails(evt.target.files[0])}/>
//   </Form.Group>
  
//   <button onClick={() => fileSubmit()}>Submit</button>
// </div>
       
   
//     </div>
//   );
// }

// export default AddProfile;



import React,{ useState, useEffect } from "react";
import { PageHeader, Form,Grid, Row, Col, Image } from 'react-bootstrap';

import axios from "axios";
import SideBar from "./SideBar";
import { Link, useParams } from "react-router-dom";
import { toast} from 'react-toastify';
import { getToken, storeToken } from '../services/LocalStorageService';
import "./viewprofilee.css";


function AddProfile() {
  const { access_token } = getToken()
  const [ File, setFile ] = useState("");
  const [ first_name, setFirst ] = useState("");
  const [ middle_name, setMiddle ] = useState("");
  const [ last_name, setLast ] = useState("");
  const [ dob, setDob ] = useState("");
  const [ gender, setGender ] = useState("");
  const [ marital_status, setMarital ] = useState("");
  const [ email_id, setEmail ] = useState("");
  const [ phone_no, setPhone ] = useState("");
  const [ emergency_no, setEmg ] = useState("");
  const [ blood_group, setBlood ] = useState("");
  const [ highest_qualification, setHighest ] = useState("");
  const [ pan_no, setPan ] = useState("");
  const [ aadhar_no, setAadhar ] = useState("");
  const [ present_address, setPresent ] = useState("");
  const [ permanent_address, setPermanent ] = useState("");
  const [ designation, setDesignation ] = useState("");
  const [ department_name, setDepartment ] = useState("");
  const [ pf_account, setPf ] = useState("");
  const [ emp_id, setEmp ] = useState("");
  const [ attacthment, setDetails ] = useState();
 // const history = useHistory();

  const fileSubmit = () => {
    const uploadData = new FormData();
    uploadData.append('File', File);
    uploadData.append('emp_id', emp_id);
    uploadData.append('first_name', first_name);
    uploadData.append('middle_name', middle_name);
    uploadData.append('last_name', last_name);
    uploadData.append('dob', dob);
    uploadData.append('gender', gender);
    uploadData.append('marital_status', marital_status);
    uploadData.append('email_id', email_id);
    uploadData.append('phone_no', phone_no);
    uploadData.append('emergency_no', emergency_no);
    uploadData.append('blood_group', blood_group);
    uploadData.append('highest_qualification', highest_qualification);
    uploadData.append('pan_no', pan_no);
    uploadData.append('aadhar_no', aadhar_no);
    uploadData.append('present_address', present_address);
    uploadData.append('permanent_address', permanent_address);
    uploadData.append('designation', designation);
    uploadData.append('department_name', department_name);
    uploadData.append('pf_account', pf_account);
    uploadData.append('attacthment', attacthment, attacthment.name);
    
    fetch('http://127.0.0.1:8000/postprofile/', {
      method: 'POST',
      body: uploadData,
      headers: {
        'authorization': `Bearer ${access_token}`,
      } 
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
    //history.push('/viewprofile/:id');

  }

  //  const isLoggedIn =1;
//  const payroll =  permissionsdata.payroll.upload;
 var permissions = localStorage.getItem("permissions")
 var permissionsdata = JSON.parse(permissions)

  const payroll =  permissionsdata.payroll.upload;
 //console.log("permissionsXXXX", permissionsdata.payroll.upload)
  return (
    <div>
    <div className="sidebarV"><SideBar/></div>

    
  <div className="container">
  <div className="h2V">Profile Upload</div>
  <div className="Pcol-md-10">
  <div className="row">

  <div className="col-md-4" >
  <b><label className="float-left"> Employee Id:
         </label> </b>
         <input type="text" id="emp_id" className="form-control"  placeholder="Enter Emp Id" value={emp_id}
          onChange={(evt) => setEmp(evt.target.value)}/></div>

    {/* <Form.Group controlId="emp_id" className="col-md-6 form-group">
    <b>Emp Id</b>
    <Form.Control type="text" value={emp_id} onChange={(evt) => setEmp(evt.target.value)}/>
  </Form.Group> */}
  <div className="col-md-4" >
  <b><label className="float-left"> First Name:
         </label> </b>
         <input type="text" id="first_name" className="form-control"  placeholder="Enter First Name"value={first_name}
          onChange={(evt) => setFirst(evt.target.value)}/></div>

  {/* <Form.Group controlId="first_name" className="col-md-6 form-group">
    <b> first_name</b>
    <Form.Control type="text" value={first_name} onChange={(evt) => setFirst(evt.target.value)}/>
  </Form.Group> */}

  <div className="col-md-4" >
  <b><label className="float-left"> Middle Name:
         </label> </b>
         <input type="text" id="middle_name" className="form-control"  placeholder="Enter Middle Name" value={middle_name}
          onChange={(evt) => setMiddle(evt.target.value)}/></div>
  {/* <Form.Group controlId="middle_name" className="col-md-6 form-group">
    <b> middle_name</b>
    <Form.Control type="text" value={middle_name} onChange={(evt) => setMiddle(evt.target.value)}/>
  </Form.Group> */}
  <div className="col-md-4">
  <b><label className="float-left"> Last Name:
         </label> </b>
         <input type="text" id="last_name" className="form-control"  placeholder="Enter Last Name" value={last_name}
          onChange={(evt) => setLast(evt.target.value)}/></div>
  {/* <Form.Group controlId="last_name" className="col-md-6 form-group">
    <b>last_name</b>
    <Form.Control type="text" value={last_name} onChange={(evt) => setLast(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> Date of Birth:
         </label> </b>
         <input type="text" id="dob" className="form-control"  placeholder="Enter Date of Birth" value={dob}
          onChange={(evt) => setDob(evt.target.value)}/></div>

  {/* <Form.Group controlId="dob" className="col-md-6 form-group">
    <b> dob</b>
    <Form.Control type="text" value={dob} onChange={(evt) => setDob(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left">Gender:
         </label> </b>
         <input type="text" id="gender" className="form-control"  placeholder="Enter Gender"value={gender}
          onChange={(evt) => setGender(evt.target.value)}/></div>

  {/* <Form.Group controlId="gender" className="col-md-6 form-group">
    <b> gender</b>
    <Form.Control type="text" value={gender} onChange={(evt) => setGender(evt.target.value)}/>
  </Form.Group> */}
<div className="col-md-4">
  <b><label className="float-left"> Marital Status:
         </label> </b>
         <input type="text" id="marital_status" className="form-control"  placeholder="Enter Marital Status" value={marital_status}
          onChange={(evt) => setMarital(evt.target.value)}/></div>

  {/* <Form.Group controlId="marital_status" className="col-md-6 form-group">
    <b>marital_status</b>
    <Form.Control type="text" value={marital_status} onChange={(evt) => setMarital(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> Email Id:
         </label> </b>
         <input type="text" id="email_id" className="form-control"  placeholder="Enter Email Id"value={email_id}
          onChange={(evt) => setEmail(evt.target.value)}/></div>

  {/* <Form.Group controlId="email_id" className="col-md-6 form-group">
    <b>email_id</b>
    <Form.Control type="text" value={email_id} onChange={(evt) => setEmail(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left">Phone No:
         </label> </b>
         <input type="text" id="phone_no" className="form-control"  placeholder="Enter Phone No" value={phone_no}
          onChange={(evt) => setPhone(evt.target.value)}/></div>

  {/* <Form.Group controlId="phone_no" className="col-md-6 form-group">
    <b> phone_no</b>
    <Form.Control type="text" value={phone_no} onChange={(evt) => setPhone(evt.target.value)}/>
  </Form.Group> */}
  
  <div className="col-md-4">
  <b><label className="float-left">Emergency No:
         </label> </b>
         <input type="text" id="emergency_no" className="form-control"  placeholder="Enter Emergency No" value={emergency_no}
          onChange={(evt) => setEmg(evt.target.value)}/></div>

  {/* <Form.Group controlId="emergency_no" className="col-md-6 form-group">
    <b> emergency_no</b>
    <Form.Control type="text" value={emergency_no} onChange={(evt) => setEmg(evt.target.value)}/>
  </Form.Group> */}
  <div className="col-md-4">
  <b><label className="float-left"> Blood Group:
         </label> </b>
         <input type="text" id="blood_group" className="form-control"  placeholder="Enter Blood Group" value={blood_group}
          onChange={(evt) => setBlood(evt.target.value)}/></div>

  {/* <Form.Group controlId="blood_group" className="col-md-6 form-group">
    <b> blood_group</b>
    <Form.Control type="text" value={blood_group} onChange={(evt) => setBlood(evt.target.value)}/>
  </Form.Group> */}
  <div className="col-md-4">
  <b><label className="float-left"> Highest Qualification:
         </label> </b>
         <input type="text" id="highest_qualification" className="form-control"  placeholder="Enter Highest Qualification"
         value={highest_qualification} 
         onChange={(evt) => setHighest(evt.target.value)}/></div>

  {/* <Form.Group controlId="highest_qualification" className="col-md-6 form-group">
    <b> highest_qualification</b>
    <Form.Control type="text" value={highest_qualification} onChange={(evt) => setHighest(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> PAN No:
         </label> </b>
         <input type="text" id="pan_no" className="form-control"  placeholder="Enter Pan No"
         value={pan_no}
          onChange={(evt) => setPan(evt.target.value)}/></div>


  {/* <Form.Group controlId="pan_no" className="col-md-6 form-group">
    <b> pan_no</b>
    <Form.Control type="text" value={pan_no} onChange={(evt) => setPan(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> Aadhar No.:
         </label> </b>
         <input type="text" id="aadhar_no" className="form-control"  placeholder="Enter Aadhar No"
         value={aadhar_no}
          onChange={(evt) => setAadhar(evt.target.value)}/></div>

 {/* <Form.Group controlId="aadhar_no" className="col-md-6 form-group">
    <b> aadhar_no</b>
    <Form.Control type="text" value={aadhar_no} onChange={(evt) => setAadhar(evt.target.value)}/>
  </Form.Group> */}

  <div className="col-md-4">
  <b><label className="float-left"> Present Address:
         </label> </b>
         <input type="text" id="present_address" className="form-control"  placeholder="Enter Present Address"
         value={present_address}
          onChange={(evt) => setPresent(evt.target.value)}/></div>


  {/* <Form.Group controlId="present_address" className="col-md-6 form-group">
    <b> present_address</b>
    <Form.Control type="text" value={present_address} onChange={(evt) => setPresent(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> Permanent Address:
         </label> </b>
         <input type="text" id="permanent_address" className="form-control"  placeholder="Enter Permanent Address"
         value={permanent_address}
          onChange={(evt) => setPermanent(evt.target.value)}/></div>

  {/* <Form.Group controlId="permanent_address" className="col-md-6 form-group">
    <b> permanent_address</b>
    <Form.Control type="text" value={permanent_address} onChange={(evt) => setPermanent(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> Designation:
         </label> </b>
         <input type="text" id="designation" className="form-control"  placeholder="Enter Designation"
         value={designation}
          onChange={(evt) => setDesignation(evt.target.value)}/></div>


  {/* <Form.Group controlId="designation" className="col-md-6 form-group">
    <b> designation</b>
    <Form.Control type="text" value={designation} onChange={(evt) => setDesignation(evt.target.value)}/>
  </Form.Group> */}
  <div className="col-md-4">
  <b><label className="float-left"> Department Name:
         </label> </b>
         <input type="text" id="department_name" className="form-control"  placeholder="Enter Department Name"
         value={department_name}
          onChange={(evt) => setDepartment(evt.target.value)}/></div>

  {/* <Form.Group controlId="department_name" className="col-md-6 form-group">
    <b> department_name</b>
    <Form.Control type="text" value={department_name} onChange={(evt) => setDepartment(evt.target.value)}/>
  </Form.Group> */}
  <div className="col-md-4">
  <b><label className="float-left"> PF Account:
         </label> </b>
         <input type="text" id="pf_account" className="form-control"  placeholder="Enter Pf Account"
         value={pf_account}
          onChange={(evt) => setPf(evt.target.value)}/></div>

  {/* <Form.Group controlId="pf_account" className="col-md-6 form-group">
    <b> pf_account</b>
    <Form.Control type="text" value={pf_account} onChange={(evt) => setPf(evt.target.value)}/>
  </Form.Group> */}

<div className="col-md-4">
  <b><label className="float-left"> Attacthment:
         </label> </b>
         <input type="file" id="Upload" className="form-control" 
        //  value={pf_account}
          onChange={(evt) =>  setDetails(evt.target.files[0])}/></div>

  {/* <Form.Group controlId="Upload" className="col-md-6 form-group">
    <b> attacthment</b>
    <Form.Control type="file" onChange={(evt) => setDetails(evt.target.files[0])}/>
  </Form.Group>
   */}
   <div className="col-md-4">
  {/* <b><label className="float-left"> submit:
         </label> </b> */}
  <button className="profilebutton"onClick={() => fileSubmit()}>Submit</button></div>
</div>
       
   </div>
    </div>
    </div>
  );
}

export default AddProfile;

