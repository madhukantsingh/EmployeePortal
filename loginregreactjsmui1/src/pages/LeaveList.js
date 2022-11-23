import React, { useState, useEffect } from "react";
//import SideBar from "../components/Sidebar/SideBar";
import axios from "axios";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import "./leavehistory.css";
import "./Leavelist.css";

const LeaveList = () => {
  const [users, setUser] = useState([]);
  const setdate = {
    starting_date : '2022-09-29'
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    console.log(setdate.starting_date)
    const result = await axios.get("http://127.0.0.1:8000/leavelist/");
    setUser(result.data);
    console.log(result,"tharun");
    
  };

  return (
    <div >
       <div className="sidebarlist"><SideBar/></div>
       {/* <Link className="btn btn-primary" to="/dashboard">
        back to Dashboard
      </Link> */}
       <center>
      <div className="py-4">
      <h1 className="lh2">Leave List</h1>
        <h1></h1>
        
       
         
        <table class="table2">
        
          <thead class="thead-dark">
            <tr>         
              {/* <th scope="col">Leave id</th> */}
              <th scope="col">Employee Id </th>
              <th scope="col">Name</th>
              <th scope="col">Approver</th>
              <th scope="col">Leave Type</th>                        
              <th scope="col">Leave Reason</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>               
                {/* <td>{user.lid}</td> */}
                <td>{user.emp_id}</td>
                <td>{user.first_name}</td>
                <td>{user.approver}</td>
                <td>{user.leave_type}</td>
                <td>{user.leave_reason}</td>
                <td>{user.starting_date}</td>
                <td>{user.end_date}</td>
                <td>{user.status}</td>
              </tr>
            ))}
         
          </tbody>
         
        </table>
        
      </div>
      </center>
    </div>
     
  );
};

export default LeaveList;



