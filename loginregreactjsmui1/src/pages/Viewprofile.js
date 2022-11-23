// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { unSetUserToken } from '../features/authSlice';
// import { getToken, removeToken } from '../services/LocalStorageService';
// import { useGetLoggedUserQuery } from '../services/userAuthApi';
// import { useGetViewprofileQuery } from "../services/userAuthApi";
// import { setUserInfo, unsetUserInfo } from '../features/userSlice';
// import { ContrastOutlined } from "@mui/icons-material";
// import SideBar from "./SideBar";
// import "./viewprofile.css";
// import { Card, Button } from 'react-bootstrap';



// axios.interceptors.request.use(
//   config => {
//       const token = localStorage.getItem('access_token');
//       if (token) {
//           config.headers['Authorization'] = 'Bearer ' + token;
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//   },
//   error => {
//       Promise.reject(error)
// });

// axios.interceptors.response.use((response) => { // block to handle success case
//   return response
// }, function (error) { // block to handle error case
//   const originalRequest = error.config;

//   if (error.response.status === 401 && originalRequest.url ===
// 'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 

//       // Redirect to any unauthorised route to avoid infinite loop...
//       return Promise.reject(error);
//   }

//   if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token

//       originalRequest._retry = true;
//       const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
//       return axios.post('/auth/token',
//           {
//               "refresh_token": refreshToken
//           })
//           .then(res => {
//               if (res.status === 201) {
//                   localStorage.setItem('auth_token',res.data);
//                   axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
//                   return axios(originalRequest);
//               }
//           })
//   }
//   return Promise.reject(error);
// });


// const Viewprofile = () => {
//   const [user, setUser] = useState({
//     id: "",
//     emp_id:"",
//     first_name: "",
//     middle_name: "",
//     last_name: "",
//     dob: "",
//     gender: "",
//     marital_status: "",
//     email_id: "",
//     phone_no: "",
//     emergency_no: "",
//     blood_group: "",
//     highest_qualification: "",
//     pan_no: "",
//     aadhar_no: "",
//     present_address: "",
//     permanent_address: "",
//     designation:"",
//     department_name:"",
//     pf_account:"",
//     attacthment:""

//   });
  

//   let response = [];
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://127.0.0.1:8000/userprofile/${id}`);
//     console.log("res venkat:",res)
//     console.log("first name",res.data.first_name)
//     response = res.data;
//     setUser(response);
//     const { data, isSuccess } =res
//   };

//  /* const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { access_token } = getToken()
//   const { data, isSuccess } = useGetViewprofileQuery(access_token)
  
 
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { data, isSuccess } = [];

//    */

//   // Store User Data in Local State
//   // useEffect(() => {
//   //  // if (data && isSuccess) {
//   //   setUser({
//   //       // id:data.id,
//   //       // email: data.email,
//   //       // name: data.name,
        
//   //   first_name: response.first_name,
    
//   //     })
//   //  // }
//   // }, [data, isSuccess])

//   var permissions = localStorage.getItem("permissions")
//   var permissionsdata = JSON.parse(permissions)
 
//    const profile =  permissionsdata.profile.create;
//   return (
//     <div >
//       {/* <Link className="btn btn-primary" to="/">
//         back to Home
//       </Link>
//       <h1 className="display-4">User Id: {id}</h1>
//       <hr /> */}
//       <SideBar/>
//       {profile ? (
//       <Link to="/viewprofile/Addprofile">
//         <div class = "pull-right  ">
//       <button class="btn btn-info" type="button">
//            Add Profile  
//       </button>
//       </div>
//       </Link>
//    ) : (
//     <h4></h4>
   
//   )}
    
//       <h1 style={{backgroundColor: ""}}>Profile</h1>
//       <h2 className="text-center mb-4"></h2>
//       <div className="col-md-7">
//         <div className="col-md-10">
//       <ul className="list-group ">
                
//         <li className="list-group-item"><b>first_name:</b> {user.first_name}</li>
//         <li className="list-group-item"><b>last_name:</b> {user.last_name}</li>
//         <li className="list-group-item"><b>Date of Birth:</b> {user.dob}</li>
//         <li className="list-group-item"><b>gender:</b> {user.gender}</li>
//         <li className="list-group-item"><b>marital_status:</b> {user.marital_status}</li>
//         <li className="list-group-item"><b>email_id:</b> {user.email_id}</li>
//         <li className="list-group-item"><b>phone_no:</b> {user.phone_no}</li>
//         <li className="list-group-item"><b> blood_group:</b> {user.blood_group}</li>
//         <li className="list-group-item"><b> highest_qualification:</b> {user.highest_qualification}</li>
//         <li className="list-group-item"><b>pan_no:</b> {user.pan_no}</li>
//         <li className="list-group-item"><b>aadhar_no:</b> {user.aadhar_no}</li>
//         <li className="list-group-item"><b>present_address:</b> {user.present_address}</li>
//         <li className="list-group-item"><b> permanent_address:</b> {user.permanent_address}</li>
//         <li className="list-group-item"><b>designation:</b> {user.designation}</li>
//         <li className="list-group-item"><b>department_name:</b> {user.department_name}</li>
//         <li className="list-group-item"><b> pf_account:</b> {user.pf_account}</li>
//         {/* <li className="list-group-item"><b> attacthment:</b> <a href={user.attacthment}>{user.attacthment}</a></li> */}

//       </ul>
//       <div>
//       <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '11em', height: 150
//  }}>

//                     <Card.Img variant="top" src={user.attacthment} />
//                     </Card>
//                     </div>
//       </div>
//       </div>
     
//     </div>
//   );
// };

// export default Viewprofile;



import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useGetViewprofileQuery } from "../services/userAuthApi";
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { ContrastOutlined } from "@mui/icons-material";
import SideBar from "./SideBar";
import "./vprofile.css";
 import { Card, Button } from 'react-bootstrap';



axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem('access_token');
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
  },
  error => {
      Promise.reject(error)
});

axios.interceptors.response.use((response) => { // block to handle success case
  return response
}, function (error) { // block to handle error case
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url ===
'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 

      // Redirect to any unauthorised route to avoid infinite loop...
      return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token

      originalRequest._retry = true;
      const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
      return axios.post('/auth/token',
          {
              "refresh_token": refreshToken
          })
          .then(res => {
              if (res.status === 201) {
                  localStorage.setItem('auth_token',res.data);
                  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
                  return axios(originalRequest);
              }
          })
  }
  return Promise.reject(error);
});


const Viewprofile = () => {
  const [user, setUser] = useState({
    id: "",
    emp_id:"",
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    gender: "",
    marital_status: "",
    email_id: "",
    phone_no: "",
    emergency_no: "",
    blood_group: "",
    highest_qualification: "",
    pan_no: "",
    aadhar_no: "",
    present_address: "",
    permanent_address: "",
    designation:"",
    department_name:"",
    pf_account:""

  });
  const [ attacthments , setAttacthment ] = useState("");
  const { attacthment} = attacthments;
  const onInputChange = e => {
    setAttacthment({ ...attacthments, [e.target.name]: e.target.value });
  };


  let response = [];
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/userprofile/${id}`);
    console.log("res venkat:",res)
    console.log("first name",res.data.first_name)
    response = res.data;
    setUser(response);

    const { data, isSuccess } =res


    // const uploadData = new FormData();
    // uploadData.append('attacthment', attacthment);
   
  //   axios('http://127.0.0.1:8000/profilephoto/2', attacthments{
  //     method: 'GET',
  //     body: uploadData,
     
  //   })
  //   .then( res => console.log(res))
  //   .catch(error => console.log(error))
  // };
  await axios.get(`http://127.0.0.1:8000/profilephoto/2`, attacthments)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
       
    },
    (error)=>{
        // alert('Updated successfully');
        
    });
  };

 /* const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetViewprofileQuery(access_token)
  
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isSuccess } = [];

   */

  // Store User Data in Local State
  // useEffect(() => {
  //  // if (data && isSuccess) {
  //   setUser({
  //       // id:data.id,
  //       // email: data.email,
  //       // name: data.name,
        
  //   first_name: response.first_name,
    
  //     })
  //  // }
  // }, [data, isSuccess])

  var permissions = localStorage.getItem("permissions")
   var permissionsdata = JSON.parse(permissions)
 
    const profile =  permissionsdata.profile.create;


  return (
    <div >
      {/* <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr /> */}
      <div className="sidebarV"><SideBar/></div>
      <div className="container">
      {/* <div>
      <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '11em', height: 150
 }}>

                    <Card.Img variant="top" src={user.attacthment} />
                    </Card>
                    </div> */}
      
    <h2>PROFILE LIST</h2>
      <h2 className="h2V">PROFILE LIST</h2>
      {profile ? (
      <Link to="/viewprofile/Addprofile">
        
      <button className="buttonp" type="button">
           Add Profile  
      </button>
      
 </Link>
  ) : (
    <h4></h4>
   
  )}
      
      <div className="">
        <div className="Vcol-md-10">
      
          <div className="row">  
          <ul className="row">
          <ul className="col-md-6 form-group">   
          
        <div className="col-md-5 form-group"> 
        
                     
        <li className="list-group-item"><b  className="float-left">First Name:</b> {user.first_name}</li>
       
                   
        {/* <b><label className="float-left"> First Name:
         </label> </b>
         <input type="text" className="form-control" value={user.first_name} disabled/> */}
         </div>
         </ul>
         <ul className="col-md-4 form-group">      
        
        <div className="col-md-6 form-group">  
       <li className="list-group-item"><b className="float-left">Last Name:</b> {user.last_name}</li>

        {/* <b><label className="float-left">Last Name:</label></b>
           <input type="text" className="form-control" value={user.last_name} disabled/> */}
           </div>
           </ul>
        
           <ul className="col-md-6 form-group">  
        
        <div className="col-md-6 form-group">  
       <li className="list-group-item"><b className="float-left">Date of Birth:</b> {user.dob}</li>

        </div>
        </ul>
        <ul className="col-md-4 form-group">   

        <div className="col-md-6 form-group">  
        <li className="list-group-item"><b className="float-left">Gender:</b> {user.gender}</li>

        </div>
        </ul>

        <ul className="col-md-6 form-group">  

        <div className="col-md-5 form-group">  
        <li className="list-group-item"><b className="float-left">Marital Status:</b> {user.marital_status}</li>

        </div>
        </ul>
        <ul className="col-md-5 form-group">  

        <div className="col-md-7 form-group">  
        <li className="list-group-item"><b className="float-left">Email Id:</b> {user.email_id}</li>

        </div>
        </ul>
        <ul className="col-md-6 form-group">  

        <div className="col-md-5 form-group">  
         <li className="list-group-item"><b className="float-left">Phone No:</b> {user.phone_no}</li>

        </div>
        </ul>
        <ul className="col-md-4 form-group">   

         <div className="col-md-6 form-group">  
         <li className="list-group-item"><b className="float-left"> Blood Group:</b> {user.blood_group}</li>

        </div>
        </ul>
        <ul className="col-md-6 form-group">  

        <div className="col-md-6 form-group">  
       <li className="list-group-item"><b className="float-left"> Highest Qualification:</b> {user.highest_qualification}</li>
</div>
         </ul>
         <ul className="col-md-6 form-group">  

        <div className="col-md-4 form-group">  
        <li className="list-group-item"><b className="float-left">Pan No:</b> {user.pan_no}</li>

        </div>
        </ul>
        <ul className="col-md-6 form-group">  

        <div className="col-md-5 form-group">  
       <li className="list-group-item"><b className="float-left">Aadhar No:</b> {user.aadhar_no}</li>

         </div>
         </ul>
         <ul className="col-md-6 form-group">  

        <div className="col-md-6 form-group">  
      <li className="list-group-item"><b className="float-left">Present Address:</b> {user.present_address}</li>

        </div>
        </ul>
        <ul className="col-md-6 form-group">  
        
        <div className="col-md-6 form-group">  
      <li className="list-group-item"><b className="float-left"> Permanent Address:</b> {user.permanent_address}</li>
      </div>

         </ul>
         <ul className="col-md-6 form-group">    

        <div className="col-md-4 form-group">  
       <li className="list-group-item"><b className="float-left">Designation:</b> {user.designation}</li>

        </div>
        </ul>
        <ul className="col-md-6 form-group">    

        <div className="col-md-6 form-group">  
      <li className="list-group-item"><b className="float-left">Department Name:</b> {user.department_name}</li>

         </div>
         </ul>
         <ul className="col-md-6 form-group">   

        <div className="col-md-5 form-group">  
      <li className="list-group-item"><b className="float-left"> PF Account:</b> {user.pf_account}</li>

         </div>
         </ul>
         <ul className="col-md-6 form-group">    


         <div className="col-md-6 form-group">  
         <li className="list-group-item"><b className="float-left"> Attacthment:</b> <a href={attacthments.attacthment} value={attacthment}  onChange={e => onInputChange(e)}>{attacthments.attacthment}</a></li> 

         </div>
         </ul>
         </ul>
         </div>
         
         </div>
       
    </div>
    
      </div>
      </div>
     
   
  );
};

export default Viewprofile;
