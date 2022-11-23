import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./Approveleave.css";
import { useParams } from "react-router-dom";



const ApprovalDependent = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/applyDependent/");
    setUser(result.data);
  };

  

  return (
    
    <div className="table">
 
      <SideBar/>

      <div>
    
    <div className="container">
    <h1>APPROVAL-DEPENDENT</h1>
   
    {/* <h2 className="text-center mb-2"> Approve Leave</h2> */}
      {/* <div className="py-4"> */}
        
        {/* <Link className="btn btn-success" to="/users1/add">Add Business</Link> */}
       
         
        <table >
        
          <thead class="thead-dark">
            <tr>
                 {/* <th scope="col">Lid</th> */}
                <th scope="col">Emp id</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Dependent Name</th>
                <th scope="col">Relation</th>                      
                <th scope="col">Status</th>
                <th scope="col">Action</th>          


             
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                
                
                {/* <td>{user.lid}</td> */}
                <td>{user.emp_id}</td>
                 <td>{user.employee_name}</td>
                 <td>{user.dependent_name}</td>
                 <td>{user.relation}</td>
                 <td>{user.status}</td>
                

                <td>
                <Link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></Link>

                  <Link class="btn btn-dark mr-2" to={`/dependents/approvaldependent/approvedrejecteddependent${user.did}`}>
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

export default ApprovalDependent;
