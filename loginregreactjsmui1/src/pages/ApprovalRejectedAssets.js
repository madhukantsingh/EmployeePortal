import React, { useState, useEffect } from "react";
import axios, { HttpStatusCode } from "axios";
import { Form } from "react-bootstrap";
import {  useParams,useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const ApprovedRejectedAssets = () => {
  // let history = useHistory();
  const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState({
    emp_id:"",
    status: "",
    Approver:""
    
  });

  const { emp_id, lid,first_name,asset,status} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);
  

  const onSubmit = async e => {
    console.log(user)
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/putassets/${id}`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Updated successfully');
    });
 //  history.push("/LeaveManagement/applyleave/approveleave");
 navigate('/assets/approvalassets');
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/individualAssets/${id}`);
    setUser(result.data);
  };
  return (
    <div>
      <SideBar/>
  
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Approved/Rejected</h2>


        
        <Form onSubmit={e => onSubmit(e)}>
        
         <div className="row">
        <Form.Group controlId="emp_id" className="col-md-6 form-group">

          <b>Eid:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control 
              type="text"
              
              placeholder="Enter Your name"
              name="emp_id"
              value={emp_id}
             />
            </Form.Group> 
            {/* <Form.Group controlId="lid" className="col-md-6 form-group">

          <b>Lid:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Your name"
              name="lid"
              value={lid}
             
            />
         </Form.Group> */}
         <Form.Group controlId="first_name" className="col-md-6 form-group">

          <b>First Name:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control
              type="text"
              
              placeholder="Enter Your name"
              name="first_name"
              value={first_name}
             
            />
          </Form.Group>
          <Form.Group controlId="asset" className="col-md-6 form-group">

          <b>asset:</b>&nbsp;&nbsp;&nbsp;
            <Form.Control

              type="text"
              
              placeholder="Enter Your name"
              name="asset"
              value={asset}
             
            />
          </Form.Group>
         
       

         
         <Form.Group controlId="status" className="col-md-6 form-group">
          
                  <b>Status:</b>
                  <Form.Control
                  as="select"
                  // onChange={(e) => setUser(e.target.value)}
                  onChange={e => onInputChange(e)}
                  name = "status"
                  value = {status}
                >
                  
                  <option defaultChecked>---select---</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                  
                </Form.Control>
                </Form.Group>
                
              
           
       
          
         &nbsp; <button className="btn btn-warning btn-block">Update</button>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default ApprovedRejectedAssets;

