
  
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import SideBar from './SideBar';
import "./kt.css";
import "./Assests.css";



const Assets = () => {
  const [user, setUser] = useState({
    id: "",
    emp_id:"",
    first_name: "",
    asset: "",
  });
  

  let response = [];
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/assetsget/${id}`);
    console.log("res venkat:",res)
    console.log("Asset",res.data[0].asset)
    response = res.data[0];
    setUser(response);
    const { data, isSuccess } =res
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
    <div>
      <div className="sidebarkt"><SideBar/></div> 
      {/* <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr /> */}
      <div  className="content">
      {profile ? (
      <Link to="/assets">
      
      <button class="buttonasses" type="button">
           Add Assets 
      </button>
      
      </Link>
   ) : (
    <h4></h4>
   
  )}
    
    <div className="kthead">ASSESTS</div>
      <div className="mar"><hr/></div>
      
        <div className="col-md-10">
      <ul className="list-group ">
        <li className="list-group-item"><b>emp_id:</b> {user.emp_id}</li>       
        <li className="list-group-item"><b>first_name:</b> {user.first_name}</li>
        <li className="list-group-item"><b>asset:</b> {user.asset}</li>
        




      </ul>
      </div>
      </div>
      </div>
     
    
  );
};

export default Assets;
