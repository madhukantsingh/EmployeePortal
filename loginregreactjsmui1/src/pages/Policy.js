// const Policy = () => {
//   return <div className="title"> Policy</div>;
// };

// export default Policy;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const Policy = () => {
//   const [user, setUser] = useState({
   
//     officepolicy: "",
//     employeepolicy: ""
   
   

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
//         Policy
//       </h1>
//       <hr/>
//       <ul className="list-group w-50">
//         {/* <li className="list-group-item">name: {user.id}</li> */}
//         <li className="list-group-item"><b>Office Policy:</b> {user.officepolicy}</li>
//         <li className="list-group-item"><b>Employee Policy:</b> {user.employeepolicy}</li>
       
        
//       </ul>
//     </div>
//   );
// };

// export default Policy;

// import React from "react";
// import SideBar from "./SideBar";
  
// const Policy = () => {
  
//     // Function will execute on click of button
//     const onButtonClick = () => {
//         // using Java Script method to get PDF file
//         fetch('SamplePDF.pdf').then(response => {
//             response.blob().then(blob => {
//                 // Creating new object of PDF file
//                 const fileURL = window.URL.createObjectURL(blob);
//                 // Setting various property values
//                 let alink = document.createElement('a');
//                 alink.href = fileURL;
//                 alink.download = 'SamplePDF.pdf';
//                 alink.click();
//             })
//         })
//     }
//     return (
//         <>    
           
//                 {/* <h3>Office Policy</h3> */}
//                 <div className="">
//                     <SideBar/>
//            <h1>
//               Policy
//                </h1>
//                <hr/>
//             <div className="col-md-3">
//               <div className="">
//                   <div className="body">
                 
//                   </div>
//               </div>
//             </div>
//              <div className="">
//             <div className="col-md-9">
//               <div className="card">
//                   <div className="body">
//                   <ul className="list-group w-50">
       
//         <li className="list-group-item"><b><h3>Office Policy</h3></b>  <a href='/somefile.txt' download>Click to download</a></li>
//         <li className="list-group-item"><b><h3>Employee Policy</h3> </b> <a href='/somefile.txt' download>Click to download</a></li>
//       </ul>
//                   </div>
//               </div>
//             </div>
// </div>
//       </div>
               
//                 {/* <button onClick={onButtonClick}>
//                     Download 
//                 </button> */}
//                 {/* <h3>Employee Policy</h3>
//                 */}
//                {/* <button onClick={onButtonClick}>
//                    Download 
//                </button> */}
            
//         </>
//     );
// };
  
// export default Policy;

import React from "react";
import SideBar from "./SideBar";
import "./policy.css";

  
const Policy = () => {
  
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
                
                   <div className="sidebarpolicy"><SideBar/></div> 
                <div className="content">
                    <div className="row">
                        <div className="ph2">POLICY</div>
                        <hr/>

            <div className="col-md-4">
            <div class="card m-200 text-center ">
            <h4>Office Policy</h4>
            <button className="buttonpo"> 
        <h5><a  className="anchor" href='/somefile.txt' download>
            Click me</a></h5></button> </div></div>


            <div className="col-md-4">
            <div class="card m-200 text-center ">
            <div  className="po"><h4> Employee Policy </h4>
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
                {/* <h3>Employee Policy</h3>
                */}
               {/* <button onClick={onButtonClick}>
                   Download 
               </button> */}

           
        </>
    );
};
  
export default Policy
