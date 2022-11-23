import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,  useParams } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import SideBar from "../pages/SideBar";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';


const AddAssets = () => {
   
  const { id } = useParams();
  const [user, setUser] = useState({
     
    emp_id:"", 
    first_name: "", 
    asset: ""
 
  });
 
   const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const {  emp_id,first_name,asset} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://127.0.0.1:8000/assetspost/${user.emp_id}`, user);
   
      // history.push("/subpage/appraisalsubpage");
     navigate('/assets/:id');
   
    
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/assetsget/${user.emp_id}`);
    setUser(result.data);
    
  };
  return (
    <div className="">
        <center>
        <SideBar/>

      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Assets</h2>
        <Form onSubmit={e => onSubmit(e)}>
          <div className="row">
          
     <Form.Group controlId="emp_id" className="col-md-6 form-group">
       
       <b>emp_id </b>
        <Form.Control
          type="text"
         
          placeholder="employee_name"
          name="emp_id"
          value={emp_id}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>

     <Form.Group controlId="first_name" className="col-md-6 form-group">
       
       <b>first_name</b>
        <Form.Control
          type="text"
         
          placeholder="first_name"
          name="first_name"
          value={first_name}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>

     <Form.Group controlId="asset" className="col-md-6 form-group">
       
       <b>asset</b>
        <Form.Control
          type="text"
         
          placeholder="asset"
          name="asset"
          value={asset}
          onChange={e => onInputChange(e)}
        />
     </Form.Group>
      
       
          
          
          <button className="btn btn-warning btn-block">Submit</button>
          </div>
        </Form>
      </div>
      </center>
    </div>
  );
};

export default AddAssets;

