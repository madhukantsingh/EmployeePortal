// import moment from "moment";
//  import {  useParams,useNavigate } from "react-router-dom";
// import React, { Component, useEffect, useState } from "react";
// import axios from 'axios'
//   import { Link, useHistory } from "react-router-dom";
// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
// import SideBar from "./SideBar";
// import "./ApplyLeave.css";

// axios.interceptors.request.use(
//   config => {
//       const token = localStorage.getItem('access_token');
//       if (token) {
//           config.headers['Authorization'] = 'Bearer ' + token;
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//   },
//   error => {
//       Promise.reject(error)
// });

// axios.interceptors.response.use((response) => { // block to handle success case
//   return response
// }, function (error) { // block to handle error case
//   const originalRequest = error.config;

//   if (error.response.status === 401 && originalRequest.url ===
// 'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 

//       // Redirect to any unauthorised route to avoid infinite loop...
//       return Promise.reject(error);
//   }

//   if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token

//       originalRequest._retry = true;
//       const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
//       return axios.post('/auth/token',
//           {
//               "refresh_token": refreshToken
//           })
//           .then(res => {
//               if (res.status === 201) {
//                   localStorage.setItem('auth_token',res.data);
//                   axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
//                   return axios(originalRequest);
//               }
//           })
//   }
//   return Promise.reject(error);
// });

// const ApplyLeave = () => {
//   // let history = useHistory();
//   const navigate = useNavigate()
//   const { id } = useParams();
//   const [user, setUser] = useState([]);
  

//   const { emp_id, lid,first_name,approver,document,leave_type,leave_reason,starting_date,end_date} = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // useEffect(() => {
//   //   loadUser();
//   // }, []);
  

//   const onSubmit = async e => {
//     console.log(user)
//     e.preventDefault();
//     await axios.post(`http://127.0.0.1:8000/postleave/${id}`, user)
//     .then(res=>res.json())
//     .then((result)=>{
//         alert(result); 
//     },
//     (error)=>{
//         alert('Updated successfully');
        
//     });
//     navigate(`/LeaveManagement/leavehistory/${id}`);
//  //  history.push("/LeaveManagement/applyleave/approveleave");
// //  navigate('/LeaveManagement/applyleave/approveleave');
//   };

//   // const loadUser = async () => {
//   //   const result = await axios.get(`http://127.0.0.1:8000/api/user/individualleave/${id}`);
//   //   setUser(result.data);
//   // };

// //   var permissions = localStorage.getItem("permissions")
// //  var permissionsdata = JSON.parse(permissions)

// //   const leave_management =  permissionsdata.leave_management.approve;
//   return (
//     <div>
//       <SideBar/>
//       {/* {leave_management ? (
//       <Link to="/LeaveManagement/applyleave/approveleave">
//       <button type="button">
//            Approve leaves
//       </button>
//  </Link>
//     ) : (
//       <h4></h4>
     
//     )} */}
  
//  <div className="container">
//   <div className="body">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Apply Leave</h2>
        
       

        
//         <Form onSubmit={e => onSubmit(e)}>
        
//         <div className="row">
        
//         <Form.Group controlId="eid" className="col-md-6 form-group">

//           <b>Employee Id:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="text"
              
//               placeholder="Enter Your Eid"
//               name="emp_id"
//               value={emp_id}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group>
         
//         {/* <Form.Group controlId="lid" className="col-md-6 form-group">

//           <b>Lid:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="text"
              
//               placeholder="Enter Your Lid"
//               name="lid"
//               value={lid}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group> */}
         
         
//           <Form.Group controlId="first_name" className="col-md-6 form-group">
//           <b>First Name:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="text"
              
//               placeholder="Enter Your First Name"
//               name="first_name"
//               value={first_name}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group>
         
         
//           <Form.Group controlId="approver" className="col-md-6 form-group">

//           <b>Approver:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="text"
              
//               placeholder="Approver"
//               name="approver"
//               value={approver}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group>
        
         
//           {/* <Form.Group controlId="document" className="col-md-6 form-group">

//           <b>Document:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="text"
              
//               placeholder="Enter Document"
//               name="document"
//               value={document}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group> */}
          
         
//           <Form.Group controlId="leave_type" className="col-md-6 form-group">

//                <b>Leave Type:</b>
//                 <Form.Control
//                   as="select"
//                   // onChange={(e) => setUser(e.target.value)}
//                   onChange={e => onInputChange(e)}
//                   name = "leave_type"
//                   value = {leave_type}>

//                   <option defaultChecked>---select---</option>
//                   <option>Sick</option>
//                   <option>Casual</option>
//                   <option>Paid</option>
//                   </Form.Control>
//                 </Form.Group>
                
            
         
//           <Form.Group controlId="leave_reason" className="col-md-6 form-group">

//           <b>Leave Reason:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="text"
              
//               placeholder="Enter Leave Reason"
//               name="leave_reason"
//               value={leave_reason}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group>
          
         
//           <Form.Group controlId="starting_date" className="col-md-6 form-group">
//           <b>Starting Date:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="date"
              
//               placeholder="Starting Date"
//               name="starting_date"
//               value={starting_date}
//               onChange={e => onInputChange(e)}
             
//             />
//             </Form.Group>
         
          
         
//           <Form.Group controlId="end_date" className="col-md-6 form-group">
//           <b>End Date:</b>&nbsp;&nbsp;&nbsp;
//             <Form.Control
//               type="date"
              
//               placeholder="End Date"
//               name="end_date"
//               min = {starting_date}
//               value={end_date}
//               onChange={e => onInputChange(e)}

//             />
//         </Form.Group>
          

//           {starting_date && end_date && (
//         <div className="summary">
//           <p>
//             You are applying Leave from {moment(starting_date).format("LL")} to{" "}
//             {moment(end_date).format("LL")}.
//           </p>
//         </div>
//       )}

         
//           {/* <div className="form-group">
//                   <label>Status</label>
//                   <Form.Control
//                   as="select"
//                   // onChange={(e) => setUser(e.target.value)}
//                   onChange={e => onInputChange(e)}
//                   name = "status"
//                   value = {status}
//                 >
                  
                  
//                   <option>Apply</option>
                  
                  
//                 </Form.Control>
                
//               </div> */}
           
       
          
//           <button className="btn btn-warning btn-block">Apply</button>
//           </div>
//         </Form>
     
//       </div>
//    </div>
//     </div>
//     </div>
//   );
// };

// export default ApplyLeave;


// // import moment from "moment";
// // import React, { Component, useEffect, useState } from "react";
// // import axios from 'axios'
// // import { Link, useHistory } from "react-router-dom";
// // import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

// // // const myArray = ["Apply", "Approve", "Approved","Rejected"]
// // const status = [
// //   {
// //     label: "Apply",
// //     value: "Apply",
// //   },
// //   {
// //     label: "Approve",
// //     value: "Approve",
// //   },
// //   {
// //     label: "Approved",
// //     value: "Approved",
// //   },

// // ];

// // const type = [
// //   {
// //     label: "Sick",
// //     value: "Sick",
// //   },
// //   {
// //     label: "Casual",
// //     value: "Casual",
// //   },
// //   {
// //     label: "Paid",
// //     value: "Paid",
// //   },

// // ];




// // export class ApplyLeave extends Component{
  
// //   constructor(props) {
// //     super(props)
// //     this.state = {type,status};
      
// //       this.handleSubmit=this.handleSubmit.bind(this);

    
// //   };
  
// //   handleChange = (e) => {
// //     e.preventDefault();

// //     this.setState({ [e.target.name]: e.target.value });

// //     let starting_date = Date.parse(this.state.starting_date);
// //     let end_date = Date.parse(this.state.end_date);  

// //     // this.validateFormData();
// //   };
  



// //   handleSubmit(event){
// //     console.log(event)
// //     event.preventDefault();
// //     axios(`http://127.0.0.1:8000/api/user/postleave/${id}`,{
// //         method:'POST',
// //         headers:{
// //             'Accept':'application/json',
// //             'Content-Type':'application/json'
// //         },
// //         body:JSON.stringify({
// //             eid:event.target.eid.value,
// //             lid:event.target.lid.value,
// //             first_name:event.target.first_name.value,
// //             approver:event.target.approver.value,
// //             document:event.target.document.value,
// //             status:event.target.status.value,
// //             leave_type:event.target.leave_type.value,
// //             leave_reason:event.target.leave_reason.value,
// //             starting_date:event.target.starting_date.value,
// //             end_date:event.target.end_date.value
// //           })
// //     })
// //     .then(res=>res.json())
// //     .then((result)=>{
// //         alert(result);

// //     },
// //     (error)=>{
// //         alert('Failed');
// //     })
// // }
// // render(){
// //   return (
// //     <div className="container">
// //       <div className="w-75 mx-auto shadow p-5">
// //         <h2 className="text-center mb-4">Apply Leave</h2>
// //         <div className="col-md-12">
       
           
// //         <Form onSubmit={this.handleSubmit}>
// //         <div className="row">
// //                     <Form.Group controlId="eid" className="col-md-6 form-group">
// //                         <b>Employee id</b>
// //                         <Form.Control type="text" name="eid"  
// //                         placeholder="eid"/>
// //                     </Form.Group>

		  

// // 		   <Form.Group controlId="lid" className="col-md-6 form-group">
// //                         <b>Leave id</b>
// //                         <Form.Control type="text" name="lid"  
// //                         placeholder="lid"/>
// //                     </Form.Group>
// // 		    <Form.Group controlId="first_name" className="col-md-6 form-group">
// //                         <b>First Name</b>
// //                         <Form.Control type="text" name="first_name"  
// //                         placeholder="first_name"/>
// //                     </Form.Group>
// //         <Form.Group controlId="approver" className="col-md-6 form-group">
// //                         <b>Approver :</b>
// //                         <Form.Control type="text" name="approver"  
// //                         placeholder="approver"/>
// //                     </Form.Group>
        
// //         <Form.Group controlId="document" className="col-md-6 form-group">
// //                         <b>document :</b>
// //                         <Form.Control type="text" name="document"  
// //                         placeholder="document"/>
// //                     </Form.Group>

// //         <Form.Group controlId="status" className="col-md-6 form-group">
// //                         <b>Status</b>
// //                         <Form.Control as="select">
// //                         {this.state.status.map(dep=> 
// //                             <option key={dep.label}>{dep.value}</option>)}
// //                         </Form.Control>
// //                     </Form.Group>
                    
// //         <Form.Group controlId="leave_type" className="col-md-6 form-group">
// //                         <b>Leave Type</b>
// //                         <Form.Control as="select">
// //                         {this.state.type.map(typ=>
// //                             <option key={typ.label}>{typ.value}</option>)}
// //                        </Form.Control>
// //                     </Form.Group>



// // 			 <Form.Group controlId="leave_reason" className="col-md-6 form-group">
// //                         <b>leave_reason</b>
// //                         <Form.Control type="text" name="leave_reason"  
// //                         placeholder="leave_reason"/>
// //                     </Form.Group>

// // <Form.Group className="form__group">
// // <Form.Label htmlFor="starting_date" className="form__label">
// //                   Start date
// //                 </Form.Label>
// //                 <input
// //                   name="starting_date"
// //                   type="date"
// //                   className="form__control"
// //                   required="required"
// //                   value={this.state.starting_date}
// //                   onChange={this.handleChange}
// //                 />

                
// //               </Form.Group>
// //               <Form.Group className="form__group">
// //                 <Form.Label htmlFor="end_date" className="form__label">
// //                   End Date
// //                 </Form.Label>

// //                 <input
// //                   name="end_date"
// //                   type="date"
// //                   className="form__control"
// //                   required="required"
// //                   min = {this.state.starting_date}
// //                   value={this.state.end_date}
// //                   onChange={this.handleChange}
// //                 />
                
// //               </Form.Group>
              
// //       {this.state.starting_date && this.state.end_date && (
// //         <div className="summary">
// //           <p>
// //             You are applying Leave from {moment(this.state.starting_date).format("LL")} to{" "}
// //             {moment(this.state.end_date).format("LL")}.
// //           </p>
// //         </div>
// //       )}



                    
// //               <Form.Group>
// //                     <Button variant="primary" type="submit"
// //                           onClick={this.props.onHide}>
// //                             Submit
// //                         </Button>
// //                     </Form.Group>
// //                     </div>
// //                 </Form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// //         }
// // }

// // export default ApplyLeave




import moment from "moment";
import {  useParams,useNavigate } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import SideBar from "./SideBar";
import "./ApplyLeave.css";
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

const ApplyLeave = () => {
  // let history = useHistory();
  const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState([]);
  

  const { emp_id, lid, first_name,approver,document,leave_type,leave_reason,starting_date,end_date} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   loadUser();
  // }, []);
  

  const onSubmit = async e => {
    console.log(user)
    e.preventDefault();
    await axios.post(`http://127.0.0.1:8000/postleave/${id}`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
       
    },
    (error)=>{
        alert('Updated successfully');
        
    });
    navigate(`/LeaveManagement/leavehistory/${id}`);
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
                       APPLY LEAVE</div>

      <div className="shadow">
        
        <Form onSubmit={e => onSubmit(e)}>
        
        <div className="row">
        
        <Form.Group controlId="eid" className="col-md-6 form-group">

          <b>Employee Id:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Your Eid"
              name="emp_id"
              value={emp_id}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
         
        {/* <Form.Group controlId="lid" className="col-md-6 ">

          <b>Lid:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Your Lid"
              name="lid"
              value={lid}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group> */}
         
         
          <Form.Group controlId="first_name" className="col-md-6 form-group">
          <b>First Name:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Your First Name"
              name="first_name"
              value={first_name}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
         
         
          <Form.Group controlId="approver" className="col-md-6 form-group">

          <b>Approver:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Approver"
              name="approver"
              value={approver}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
        
         
          <Form.Group controlId="document" className="col-md-6 form-group">

          <b>Document:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Document"
              name="document"
              value={document}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
          
         
          <Form.Group controlId="leave_type" className="col-md-6 form-group">

               <b>Leave Type:</b>
                <Form.Control
                  as="select"
                  // onChange={(e) => setUser(e.target.value)}
                  onChange={e => onInputChange(e)}
                  name = "leave_type"
                  value = {leave_type}>

                  <option defaultChecked>---select---</option>
                  <option>Sick</option>
                  <option>Casual</option>
                  <option>Paid</option>
                  </Form.Control>
                </Form.Group>
                
            
         
          <Form.Group controlId="leave_reason" className="col-md-6 form-group">

          <b>Leave Reason:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Leave Reason"
              name="leave_reason"
              value={leave_reason}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
          
         
          <Form.Group controlId="starting_date" className="col-md-6 form-group">
          <b>Starting Date:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="date"
              
              placeholder="Starting Date"
              name="starting_date"
              value={starting_date}
              onChange={e => onInputChange(e)}
             
            />
            </Form.Group>
         
          
         
          <Form.Group controlId="end_date" className="col-md-6 form-group">
          <b>End Date:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="date"
              
              placeholder="End Date"
              name="end_date"
              min = {starting_date}
              value={end_date}
              onChange={e => onInputChange(e)}

            />
        </Form.Group>
          

          {starting_date && end_date && (
        <div className="summary">
          <p>
            You are applying Leave from {moment(starting_date).format("LL")} to{" "}
            {moment(end_date).format("LL")}.
          </p>
        </div>
      )}

         
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
           
       
          
          <button className="applybutton">Apply</button>
          </div>
        </Form>
     
      </div>
   
    </div>
    </div>
    </div>
  );
};

export default ApplyLeave;