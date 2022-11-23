// // const KtTraining = () => {
// //     return <div className="title"> KtTraining</div>;
// //   };
  
// //   export default KtTraining;
  

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";
import "./kt.css";

const Kt = () => {
  const [user, setUser] = useState({
   
    trainingdocs: "",
    suggesteddocs: ""
   
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/ess/2`);
    setUser(res.data);
  };
  return (
    <div className=" content">
       <div className="sidebarkt"><SideBar/></div> 
      {/* <Link className="btn btn-primary" to="/">
        back to Home
      </Link> */}
      {/* <h1 className="display-4">User Id: {id}</h1> */}
      {/* <hr /> */}
      <div className="kthead">Knowledge Transfer</div>
      <div className="mar"><hr/></div>
      <div className="col-md-10">
      <ul className="list-group w-30">
        {/* <li className="list-group-item">name: {user.id}</li> */}
        <li className="list-group-item"><b>Training Documents:</b> {user.trainingdocs}</li>
        <li className="list-group-item"><b>Suggested Documents:</b> {user.suggesteddocs}</li>
       
        
      </ul></div>
    </div>
  );
};

export default Kt;

// import React from 'react'
// import {useState} from 'react';
// import Calendar from 'react-calendar';
// //import './App.css';

// const time = ['08:00','09:00','10:00','14:00','15:00']

// function KtTraining(props) {

//  const [event, setEvent] = useState(null)
//  const [info, setInfo] = useState(false)

//  function displayInfo(e) {
//    setInfo(true);
//    setEvent(e.target.innerText);
// }

// return (
 
//  <div className="times">
//    {time.map(times => {
//     return (
//     <div>
//       <button onClick={(e)=> displayInfo(e)}> {times} </button>
//     </div>
//         )
//      })}
//     <div>
//       {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
//     </div>
//  </div>
//   )
// }

// export default KtTraining;
