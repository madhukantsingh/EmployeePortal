// const Documents = () => {
//     return <div className="title"> Documents</div>;
//   };
  
//   export default Documents;
  
// const Policy = () => {
//   return <div className="title"> Policy</div>;
// };

// export default Policy;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const Documents = () => {
//   const [user, setUser] = useState({
   
//     offerletter: "",
//     payslips: ""
   
   

//   });
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://127.0.0.1:8000/ess/2`);
//     setUser(res.data);
//   };
//   return (
//     <div className="container py-4">
//       {/* <Link className="btn btn-primary" to="/">
//         back to Home
//       </Link> */}
//       {/* <h1 className="display-4">User Id: {id}</h1> */}
//       {/* <hr /> */}
//       <h1>
//        Documents
//       </h1>
//       <hr/>
//       <ul className="list-group w-50">
//         {/* <li className="list-group-item">name: {user.id}</li> */}
//         <li className="list-group-item"><b>Offer Letter:</b> {user.offerletter}</li>
//         <li className="list-group-item"><b>Payslips:</b> {user.payslips}</li>
       
        
//       </ul>
//     </div>
//   );
// };

// export default Documents;

import React from "react";
import SideBar from "./SideBar";
import "./policy.css";

const  PermanentDocuments = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <>   
           
                {/* <h3>Offer Letter</h3> */}
                <div className="sidebarpolicy"><SideBar/></div> 
                <div className="content">
                <div className="row">
                    
                    <div className="ph2">
              PERMANENT DOCUMENTS
               </div>
               <hr/>
               <div className="col-md-4">
            <div class="card m-200 text-center ">
            <h4>Offer Letter</h4>
            <button className="buttonpo"> 
        <h5><a  className="anchor" href='/somefile.txt' download>
            Click me</a></h5></button> </div></div>

            <div className="col-md-4">
            <div class="card m-200 text-center ">
            <div  className="po"><h4> Pay-Slips </h4>
            <button className="buttonpo"> 
        <h5><a  className="anchor" href='/somefile.txt' download>
            Click me</a></h5></button> 
            </div>
              </div>
            </div>

                  </div>
              </div>
            

      
               
                {/* <button onClick={onButtonClick}>
                    Download 
                </button> */}
                {/* <h3>Payslips</h3> */}
               
               {/* <button onClick={onButtonClick}>
                   Download 
               </button>
             */}
             
        </>
    );
};
  
export default PermanentDocuments;
