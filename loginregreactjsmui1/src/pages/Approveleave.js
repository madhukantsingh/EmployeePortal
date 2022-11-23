import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./Approveleave.css";


const Approveleave = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/applylist/");
    setUser(result.data);
  };

  

  return (
    
    <div className="table">
 
      <SideBar/>

      <div>
    
    <div className="container">
    <h1>APPROVAL-LEAVE LIST</h1>
   
    {/* <h2 className="text-center mb-2"> Approve Leave</h2> */}
      {/* <div className="py-4"> */}
        
        {/* <Link className="btn btn-success" to="/users1/add">Add Business</Link> */}
       
         
        <table >
        
          <thead class="thead-dark">
            <tr>
                 {/* <th scope="col">Lid</th> */}
                 <th scope="col">Emp Id </th>
               <th scope="col"> First Name</th>
               <th scope="col">Approver</th>
               <th scope="col">Document</th>                        
               <th scope="col">Leave Type</th>
               <th scope="col">Leave Reason</th>
               <th scope="col">Starting Date</th>
               <th scope="col">End Date</th>
               <th scope="col">Status</th>
               <th scope="col">Action</th>          


             
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                
                
                {/* <td>{user.lid}</td> */}
                <td>{user.emp_id}</td>
                 <td>{user.first_name}</td>
                 <td>{user.approver}</td>
                 <td>{user.document}</td>
                 <td>{user.leave_type}</td>
                 <td>{user.leave_reason}</td>
                 <td>{user.starting_date}</td>
                 <td>{user.end_date}</td>
                 <td>{user.status}</td>
                

                <td>
                <Link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></Link>

                  <Link class="btn btn-dark mr-2" to={`/LeaveManagement/applyleave/approveleave/approvedrejected${user.lid}`}>
                    Approved
                  </Link>
                  
                  
                 
                </td>
              </tr>
            ))}
         
          </tbody>
         
        </table>
       
      </div>
      </div>
    </div>
    // </div>
    

  );
};

export default Approveleave;
