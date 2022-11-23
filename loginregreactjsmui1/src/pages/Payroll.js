// 

import React,{ useState, useEffect } from "react";
import { PageHeader, Form,Grid, Row, Col, Image } from 'react-bootstrap';
import axios from "axios";
import SideBar from "./SideBar";
import { Link, useParams } from "react-router-dom";
import { toast} from 'react-toastify';
import { getToken, storeToken } from '../services/LocalStorageService';
import "./payroll.css"

function Payroll() {
  const { access_token } = getToken()
  const [ File, setFile ] = useState("");
  const [ month, setMonth ] = useState("");
  const [ emp_id, setEmp ] = useState("");
  const [ Details, setDetails ] = useState();

  const fileSubmit = () => {
    const uploadData = new FormData();
    uploadData.append('File', File);
    uploadData.append('month', month);
    uploadData.append('emp_id', emp_id);
    uploadData.append('Details', Details, Details.name);
    
    fetch('http://127.0.0.1:8000/Fileupload/', {
      method: 'POST',
      body: uploadData,
      headers: {
        'authorization': `Bearer ${access_token}`,
      } 
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
  }
  const saveFile = () => {
    axios({
      url: 'http://127.0.0.1:8000/filelist/',
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf');
      document.body.appendChild(link);
      link.click();
    });
  }

  //  const isLoggedIn =1;
//  const payroll =  permissionsdata.payroll.upload;
 var permissions = localStorage.getItem("permissions")
 var permissionsdata = JSON.parse(permissions)

  const payroll =  permissionsdata.payroll.upload;
 //console.log("permissionsXXXX", permissionsdata.payroll.upload)
  return (
    <div>
    <div className="sidebarpay"><SideBar/></div>
<div className="content">

    {payroll ? (
  <div className="">

  
   <div className="pr" >Upload Payroll</div> 
  
  <div className="col-md-10">
             <div className="row">      
        <div className="col-md-6" >
        <b><label className="float-left"> File Name:
         </label></b>
          <input type="text" className="input" value={File} onChange={(evt) => setFile(evt.target.value)}/>
          </div>
               
        <div className="col-md-6" >
        <b><label className="float-left"> Month:
         </label></b>
          <input type="text" className="input" value={month} onChange={(evt) => setMonth(evt.target.value)}/>
          </div>

  <div className="col-md-6" >
        <b><label className="float-left"> Employee Id:
         </label></b>      
    <input type="text" className="input" value={emp_id} onChange={(evt) => setEmp(evt.target.value)}/>
  </div>
  
  <div className="col-md-6" >
        <b><label className="float-left"> Upload:
         </label></b>     
    <input type="file" className="input" onChange={(evt) => setDetails(evt.target.files[0])}/>
  </div>
  <div className="" >
      <button  className="rollbutton" onClick={() => fileSubmit()}>Submit</button>
  </div>
  
  
  
  
</div></div></div>


        ) : (
          
          <h4></h4>
          
         
        )}

        <div className="">
          <div  className="doc">DOCUMENTS TO DOWNLOAD</div>
          <div className="content">
            <div className="">

            <div className="col-md-2">
         <ul className="list-group w-50">
     {/* <button  className="rollbutton" onClick={() => saveFile()}>Click</button> */}
        <li className="list-group-item "><b>July_2022: </b> <a href='' onClick={() => saveFile()} download>Click to download</a></li>
        <li className="list-group-item"><b>Aug_2022: </b> <a href='http://127.0.0.1:8000/media/photo/91069d2137a5aaa21e065c930b20f9d8_GHHUc4g.jpg' download>Click to download</a></li>
        <li className="list-group-item"><b>Sep_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>
        <li className="list-group-item"><b>Oct_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>
        <li className="list-group-item"><b>Nov_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>
        <li className="list-group-item"><b>Dec_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>

       </ul></div>
              <div className="col-md-2">
                   <ul className="list-group w-50">
         {/* <li className="list-group-item">name: {user.id}</li> */}
         <li className="list-group-item"><b>Jan_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>
       <li className="list-group-item"><b>Feb_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>
         <li className="list-group-item"><b>Mar_2022: </b> <a href='/somefile.txt' download>Click to download</a></li>
        
        <li className="list-group-item"><b>April_2022:</b>  <a href='/somefile.txt' download>Click to download</a></li>
        <li className="list-group-item"><b>May_2022:</b> <a href='/somefile.txt' download>Click to download</a></li>
         <li className="list-group-item"><b>June_2022: </b> <a href='/somefile.txt' download>Click to download</a></li></ul></div>
         </div>
         <div className="">
          
                   </div>
                   </div>
                   </div>

    </div>
    </div>
    
  
  );
}

export default Payroll;