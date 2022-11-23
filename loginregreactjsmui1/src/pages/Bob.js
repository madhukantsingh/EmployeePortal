// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {  useParams,useNavigate } from "react-router-dom";
// import SideBar from "./SideBar";

// const Bob = () => {
//   // let history = useHistory();
//   const navigate = useNavigate()
//   const { id } = useParams();
//   const [user, setUser] = useState({
    
//     status: "",
//     Approver:""
    
//   });

//   const {  status} = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`http://127.0.0.1:8000/api/user/putleave/${id}`, user)
//     .then(res=>res.json())
//     .then((result)=>{
//         alert(result);

//     },
//     (error)=>{
//         alert('Updated Sucessfully');
//     });
//  //  history.push("/LeaveManagement/applyleave/approveleave");
//  navigate('/LeaveManagement/applyleave/approveleave');
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://127.0.0.1:8000/api/user/individualleave/${id}`);
//     setUser(result.data);
//   };
//   return (
//     <div>
//       <SideBar/>
  
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit Heads</h2>
//         <form onSubmit={e => onSubmit(e)}>
        
         
//           <div className="form-group">
//           <b>Name:</b>&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter Your name"
//               name="status"
//               value={status}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
          
//           <button className="btn btn-warning btn-block">Update</button>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Bob;

import SideBar from "./SideBar";
import React from "react";
import "./bob.css";

const Bob = () => {
    return <div className="title">
        <div className="sidebarbob">
        <SideBar/></div>
        <div className="container"> 
          <div className="bobhead">Bouquet of Benefits</div>
          <div className="">
            <i><h5>Health Benefits: </h5></i>

            <p><b>Work from home
If your job doesn’t require you to be present at our premises, you can occasionally work from home (WFH). We normally allow [one day per week.] If you need to telecommute for more days per week, talk to your manager.

Please inform your manager that you want to work from home [using our HRIS] at least [two days] in advance. [You can also set a recurring WFH day per week.] If there’s a rare emergency, you may work from home without having received prior approval, but call or email your manager as soon as possible. If they are in a different time-zone, contact HR instead.

When you are working from home, please use an internet connection and devices that are fast and secure. Choose a place without loud noises or distractions. And, check in with your team frequently to make collaboration easier.

If there is inclement weather (e.g. a blizzard) please check your [email] to see if the office is officially closed. If you judge that your commute during inclement weather is dangerous, let us know. We will not force you to come to work if your safety is at stake or if there is an official travel warning.

Remote working
Remote working refers to working from a non-office location on a temporary or permanent basis.

If you’re an office-based employee, you may work remotely for a maximum of [two consecutive weeks] per year. You may arrange this if you [are a new parent or suffer from a short-term disability.] If you have another reason, talk to your manager. Submit your remote working requests [through our HRIS] at least [one week] in advance.

If you work remotely permanently, we ask that you adhere to our security, confidentiality and equal opportunity policies just like your office-based colleagues.</b></p>
          </div>
         </div>;
         </div>
  };
  
  export default Bob;