// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import CardGroup from 'react-bootstrap/CardGroup';
// import "./appraisalsubpage.css";



// function Appraisalsubpage() {
//   return (
//     <CardGroup>
//       <Card className='descrption'>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Job Description</Card.Title>
//           <Card.Text>
//           Job description is a broad, general, and written statement of a specific job, based on the findings of a job analysis. It generally includes duties, purpose, responsibilities, scope, and working conditions of a job along with the job’s title, and the name or designation of the person to whom the employee reports..
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>KD</Card.Title>
//           <Card.Text>
//             This card has supporting text below as a natural lead-in to
//             additional content.{' '}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>KPIS</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This card has even longer content than the
//             first to show that equal height action.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>GOALS</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This card has even longer content than the
//             first to show that equal height action.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <br />

//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>KD</Card.Title>
//           <Card.Text>
//             This card has supporting text below as a natural lead-in to
//             additional content.{' '} 
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <br />
//     </CardGroup>
    
    
//   );
// }

// export default Appraisalsubpage


import React, { Component , useState, useEffect} from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {Button} from 'react-bootstrap';
import SideBar from '../pages/SideBar';
// import "./appraisalsubpage.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';

   import "./appraisalsubpage.css";

//import "./policy.css";
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





const Appraisalsubpage = () => {
  const [user, setUser] = useState({
   
    goal: "",
    kpi: "",
    jd: "",
    kd:""

  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/appraisal/${data.id}`);
    setUser(res.data);
  };
 
 // console.log("permissionsXXXX", permissionsdata.appraisal.add)
return (

<div>
  <div className='sidebarsub'><SideBar/></div>

  

  {/* <button className="buttonpo"> 
        <h5><a  className="anchor" href='/somefile.txt' download>
            Click me</a></h5></button> */}
  {/* <div className="subh2">APPRAISAL LIST </div>
                        <hr/> */}


  
<div className="subh2">APPRAISAL LIST </div>
                        <hr/>
<div className="content">
                    <div className="row">
                      <div></div>

                    <div className="col-md-4app">
            <div class="card m-200 text-center ">
              <div className='subcolor'>
            <b>Job Description</b></div>
                 {user.jd} </div></div>

                 <div className="col-md-4app">
            <div class="card m-200 text-center ">
            <div className='subcolor'>
            <b>KPIS</b></div>
            {user.kpi} </div></div>

            <div className="col-md-4app">
            <div class="card m-200 text-center ">
            <div className='subcolor'>
            <b>KD</b></div>
            {user.kd} </div></div>

            <div className="col-md-4app">
            <div class="card m-200 text-center ">
            <div className='subcolor'>
            <b>Goals</b></div>
            {user.goal} </div></div>
{/* <CardGroup>
  <row> 
  <Card  border="success"  style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>Job Description</Card.Title>
    <Card.Text>
    {user.jd}
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link> */}
  {/* </Card.Body> */}
{/* </Card> */}
{/* </row>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
{/* <row> */} 
{/* <Card  border="success" style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>KD</Card.Title>
    <Card.Text>
    {user.kd}
    </Card.Text>
  </Card.Body>
</Card>
</row>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<row>
<Card  border="success" style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>KPIS</Card.Title>
    <Card.Text>
    {user.kpi}

    </Card.Text>
  </Card.Body>
</Card>
</row>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<row>

<Card  border="success" style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Goals</Card.Title>
    <Card.Text>
    {user.goal}
    </Card.Text>
  </Card.Body>
</Card>
</row>

    </CardGroup> */}
    </div>
    </div>
    </div>
    

    )
};

export default Appraisalsubpage;

// import React, { Component , useState, useEffect} from 'react';
// import {Card,CardGroup} from 'react-bootstrap';
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import {Button} from 'react-bootstrap';
// import SideBar from '../pages/SideBar';
// import "./appraisalsubpage.css";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { unSetUserToken } from '../features/authSlice';
// import { getToken, removeToken } from '../services/LocalStorageService';
// import { useGetLoggedUserQuery } from '../services/userAuthApi';



// const Appraisalsubpage = () => {
//   const [user, setUser] = useState({
   
//     goal: "",
//     kpi: "",
//     jd: "",
//     kd:""

//   });
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { access_token } = getToken()
//   const { data, isSuccess } = useGetLoggedUserQuery(access_token)
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://127.0.0.1:8000/appraisal/${data.id}`);
//     console.log("res venkat:",res)
//     console.log("kd",res.data.kd)
//     setUser(res.data);
  

//   };
//   //  var permissions = localStorage.getItem("permissions")
//   //  var permissionsdata = JSON.parse(permissions)

//   // const Appraisal =  permissionsdata.Appraisal.Add;
//   // console.log("permissionsXXXX", permissionsdata.Appraisal.add)
// return (

// <container>
//   <SideBar/>
//   {/* {Appraisal ? ( */}
// <Link className="btn btn-outline-warning mr-2" to="/subpage/addapraisal">Add </Link>
//  {/* ) : (
//   <h4></h4>
 
// )} */}
// <CardGroup>
//   <row>
//   <Card  border="success"  style={{ width: '18rem' }}>
//   <Card.Body>
//   <Card.Title>Job Description</Card.Title>
//     <Card.Text>
//     {user.jd}
//     </Card.Text>
//     {/* <Card.Link href="#">Card Link</Card.Link> */}
//   </Card.Body>
// </Card>

// <Card  border="success" style={{ width: '18rem' }}>

//   <Card.Body>
//     <Card.Title>KD</Card.Title>
//     <Card.Text>
//     {user.kd}
//     </Card.Text>
//   </Card.Body>
// </Card>
// </row>
// <row>
// <Card  border="success" style={{ width: '18rem' }}>

//   <Card.Body>
//     <Card.Title>KPIS</Card.Title>
//     <Card.Text>
//     {user.kpi}

//     </Card.Text>
//   </Card.Body>
// </Card>
// </row>
// <row>
// <Card  border="success" style={{ width: '18rem' }}>

//   <Card.Body>
//     <Card.Title>Goals</Card.Title>
//     <Card.Text>
//     {user.goal}
//     </Card.Text>
//   </Card.Body>
// </Card>
// </row>

//     </CardGroup>
//     </container>

//     )
// };

// export default Appraisalsubpage