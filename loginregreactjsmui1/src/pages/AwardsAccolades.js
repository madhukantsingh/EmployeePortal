// import SideBar from "./SideBar";
// import React from "react";
// const AwardsAccolades = () => {
//     return <div className="title">
        
//         <SideBar/>
//          Awards Accolades</div>;
//   };
  
//   export default AwardsAccolades;

import React, { useState, useEffect } from "react";
//import SideBar from "../components/Sidebar/SideBar";
import axios from "axios";
import SideBar from "./SideBar";
import "./AwardsAccolades.css";
import { useParams } from "react-router-dom";

const AwardsAccolades = () => {
  const [users, setUser] = useState([]);
//   const seteid = {
//     eid : 1
//   }

  useEffect(() => {
    loadUsers();
  }, []);

const {id} = useParams()
  const loadUsers = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/empmonth/`);
    console.log(result.type)
    setUser(result.data);
    console.log(result,"tharun");
    // console.log(seteid.eid)
  };
console.log(users,"this is users")
  return (
    <div className="sidebarle">
       <SideBar/>
          <center>
        <h1 className="lh2">Employee Award</h1>
        
       
        
        <table class="table2">
        
          <thead class="thead-dark">
            <tr>         
              <th scope="col">Employee Name</th>
              <th scope="col">Emp of Month</th>
              <th scope="col">Emp of Year</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>               
                <td>{user.first_name}</td>
                <td>{user.Empofmonth}</td>
                <td>{user.Empofyear}</td>

              </tr>
            ))}
         
          </tbody>
         
        </table>
        </center>
      </div>
     
     
  );
};

export default AwardsAccolades;