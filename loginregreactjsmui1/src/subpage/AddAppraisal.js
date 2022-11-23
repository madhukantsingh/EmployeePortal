import React, { useState, useEffect } from "react";
import axios from "axios";
import {   useParams } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import SideBar from "../pages/SideBar";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';


const AddApraisal = () => {
   
  const { id } = useParams();
  const [user, setUser] = useState({
    emp_id:"",
    employee_name:"",
    year:"",
    quarter:"",
    jd: "",
    kd:"",
    goal:"",
    kpi:""
  });
 
   const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const {  emp_id,employee_name,year,quarter,jd,kd,goal,kpi} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.get(`http://127.0.0.1:8000/postappraisal/${user.emp_id}`, user);
   
      // history.push("/subpage/appraisalsubpage");
     navigate('/appraisal');
   
    
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/appraisal/${user.emp_id}`);
    setUser(result.data);
    
  };
  return (
    <div className="">
        <center>
        <SideBar/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Appraisal</h2>
        <Form onSubmit={e => onSubmit(e)}>
          <div className="row">
          <Form.Group controlId="emp_id" className="col-md-6 form-group">
       
       <b>Employee Id:</b>
        <Form.Control
          type="text"
         
          placeholder="Enter Emp Id"
          name="emp_id"
          value={emp_id}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>
     <Form.Group controlId="employee_name" className="col-md-6 form-group">
       
       <b>Employee Name</b>
        <Form.Control
          type="text"
         
          placeholder="Enter Employee Name"
          name="employeename"
          value={employee_name}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>

     <Form.Group controlId="year" className="col-md-6 form-group">
       
       <b>Year</b>
        <Form.Control
          type="text"
         
          placeholder="Enter year"
          name="year"
          value={year}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>

     <Form.Group controlId="quarter" className="col-md-6 form-group">
       
       <b>Quarter</b>
        <Form.Control
          type="text"
         
          placeholder="Enter Quarter"
          name="quarter"
          value={quarter}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>
      
        <Form.Group controlId="jd" className="col-md-6 form-group">
       
           <b>Job Descriptions:</b>
            <Form.Control
              type="text"
             
              placeholder="Enter Job Descriptions"
              name="jd"
              value={jd}
              onChange={e => onInputChange(e)}
            />
         </Form.Group>
         <Form.Group controlId="kd" className="col-md-6 form-group">
         
         <b>Key Deliverables</b>
            <Form.Control
              type="text"
             
              placeholder="Enter Key Deliverables"
              name="kd"
              value={kd}
              onChange={e => onInputChange(e)}
            />
            </Form.Group>
            <Form.Group controlId="goal" className="col-md-6 form-group">
               <b>GOALS:</b>
            <Form.Control
              type="text"
             
              placeholder="Enter GOALS"
              name="goal"
              value={goal}
              onChange={e => onInputChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="kpi" className="col-md-6 form-group">
          <b>Key Performance Indicators:</b>
            <Form.Control
              type="text"
             
              placeholder="Enter Key Performance Indicators"
              name="kpi"
              value={kpi}
              onChange={e => onInputChange(e)}
            />
           </Form.Group>
         
          &nbsp;
          
          
          <button className="btn btn-warning btn-block">Submit</button>
          </div>
        </Form>
      </div>
      </center>
    </div>
  );
};

export default AddApraisal;

