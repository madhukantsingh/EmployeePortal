
// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import "./leavehistory.css";
// import SideBar from "./SideBar";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { unSetUserToken } from '../features/authSlice';
// import { getToken, removeToken } from '../services/LocalStorageService';
// import { useGetLoggedUserQuery } from '../services/userAuthApi';
//  //import { useEffect, useState } from 'react';
// import { setUserInfo, unsetUserInfo } from '../features/userSlice';
// //import appraisalsubpage from "./pages/subpage/appraisalsubpage"

// const Appraisal = () => {
//   const [user, setUser] = useState([]);
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { access_token } = getToken()
//   const { data, isSuccess } = useGetLoggedUserQuery(access_token)

//   const [userData, setUserData] = useState({
//     id:"",
//     email: "",
//     name: ""
//   })

//   // Store User Data in Local State
//   useEffect(() => {
//     // console.log(id, "in profile page")
//     if (data && isSuccess) {
//       setUserData({
//         id:data.id,
//         email: data.email,
//         name: data.name,
//       })
//     }
//   }, [data, isSuccess])

//   // Store User Data in Redux Store
//   useEffect(() => {
//     if (data && isSuccess) {
//       dispatch(setUserInfo({
//         id: data.id,
//         email: data.email,
//         name: data.name
//       }))
//     }
//   }, [data, isSuccess, dispatch])
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://127.0.0.1:8000/appraisal/${id}`);
//     setUser(res.data);
//   };
//   console.log(user,"this is user")
//   const link = `/subpage/appraisalsubpage/${user.emp_id}`
//   return (
//     // <div className="">
//     //     <SideBar/>
//     //    <center>
      
//     //   <div className="py-7">
     
//     //   <h1 style={{backgroundColor: ""}}>Appraisal</h1>
//     //   <div className="" style={{ display: 'block', padding: 30 }}>
//     //     <table class="table2">
        
//     //       <thead>
//     //         <tr>
//     //           <th scope="col">S.No</th>
//     //           <th scope="col">Employee name</th>
//     //           <th scope="col">year</th>
//     //           <th scope="col">Quarter</th>              
//     //         </tr>

//     //       </thead>
//     //       <tbody>
        
//     //           <tr>
//     //        <td>1</td>
//     //        {/* <td><a href="http://localhost:8000/appraisal/1">{user.id}</a></td> */}
//     //        <td>{user.employee_name}</td>
//     //        <td>{user.year}</td>
           
           
//     //        {/* <td> <a href="http://localhost:3000/appraisalsubpage">{user.quarter}</a></td> */}
//     //        <Link  to="/subpage/appraisalsubpage">{user.quarter}</Link>
//     //        </tr>
        
//     //       </tbody>
         
//     //     </table>
      
//     //   {/* <h4>How to use Pagination Component in ReactJS?</h4> */}
//     //   {/* <Pagination count={6} /> */}
//     //   </div>
//     //   </div>
//     //   </center>
//     // </div>
//     <div className="">
//        <SideBar/>
//        {/* <Link className="btn btn-primary" to="/dashboard">
//         back to Dashboard
//       </Link> */}
//        <center>
//       <div className="py-4">
      
//         <h1>Leave List</h1>
        
       
         
//         <table class="table2">
        
//           <thead class="thead-dark">
//             <tr>         
//               <th scope="col">S.No</th>
//               <th scope="col">Employee name</th>
//               <th scope="col">year</th>
//               <th scope="col">Quarter</th>
              
//             </tr>
//           </thead>
//           <tbody>
//           {user.map((user) => (
//               <tr>               
//                 <td>{user.id}</td>
//                 <td>{user.employee_name}</td>
//                 <td>{user.year}</td>
//                 <Link  to={link} >{user.quarter}</Link>

//               </tr>
//       ))}
         
//           </tbody>
         
//         </table>
        
//       </div>
//       </center>
//     </div>
     
//   );

// };

// export default Appraisal;

// // import React, { useState, useEffect } from 'react';
// // import { classNames } from 'primereact/utils';
// // import { FilterMatchMode, FilterOperator } from 'primereact/api';
// // import { DataTable } from 'primereact/datatable';
// // import { Column } from 'primereact/column';
// // import { InputText } from 'primereact/inputtext';
// // import { Dropdown } from 'primereact/dropdown';
// // import { InputNumber } from 'primereact/inputnumber';
// // import { Button } from 'primereact/button';
// // import { ProgressBar } from 'primereact/progressbar';
// // import { Calendar } from 'primereact/calendar';
// // import { MultiSelect } from 'primereact/multiselect';
// // import { Slider } from 'primereact/slider';
// // import { TriStateCheckbox } from 'primereact/tristatecheckbox';
// // import SideBar from './SideBar';
// // //import { CustomerService } from '../pages/CustomerService';
// // // import './Pagenation.css';
// // import axios from "axios";
// // import { Link, useParams } from "react-router-dom";
// // import { useNavigate } from 'react-router-dom';
// //  import { useDispatch } from 'react-redux';
// //  import { getToken, removeToken } from '../services/LocalStorageService';
// //  import { useGetLoggedUserQuery } from '../services/userAuthApi';
// // import { setUserInfo, unsetUserInfo } from '../features/userSlice';


// // const Appraisal = () => {
// //   const [user, setUser] = useState({
   
// //         employee_name: "",
// //         year: "",
// //         quarter: ""
    
// //       });
// //       const navigate = useNavigate()
// //   const dispatch = useDispatch()
// //   const { access_token } = getToken()
// //   const { data, isSuccess } = useGetLoggedUserQuery(access_token)

// //   const [userData, setUserData] = useState({
// //     id:"",
// //     email: "",
// //     name: ""
// //   })

// //   // Store User Data in Local State
// //   useEffect(() => {
// //     // console.log(id, "in profile page")
// //     if (data && isSuccess) {
// //       setUserData({
// //         id:data.id,
// //         email: data.email,
// //         name: data.name,
// //       })
// //     }
// //   }, [data, isSuccess])

// //   // Store User Data in Redux Store
// //   useEffect(() => {
// //     if (data && isSuccess) {
// //       dispatch(setUserInfo({
// //         id: data.id,
// //         email: data.email,
// //         name: data.name
// //       }))
// //     }
// //   }, [data, isSuccess, dispatch])
// //   const { id } = useParams();
// //   useEffect(() => {
// //     loadUser();
// //   }, []);
// //   const loadUser = async () => {
// //     const res = await axios.get(`http://127.0.0.1:8000/api/user/appraisal/${data.id}`);
// //     setUser(res.data);
// //   };
// //     const [customers1, setCustomers1] = useState(null);
// //     const [customers2, setCustomers2] = useState(null);
// //     const [filters1, setFilters1] = useState(null);
// //     const [filters2, setFilters2] = useState({
// //         'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
// //         'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
// //         'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
// //         'representative': { value: null, matchMode: FilterMatchMode.IN },
// //         'status': { value: null, matchMode: FilterMatchMode.EQUALS },
// //         'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
// //     });
// //     const [globalFilterValue1, setGlobalFilterValue1] = useState('');
// //     const [globalFilterValue2, setGlobalFilterValue2] = useState('');
// //     const [loading1, setLoading1] = useState(true);
// //     const [loading2, setLoading2] = useState(true);
   
// //     const statuses = [
// //         'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
// //     ];

    

// //     const getCustomers = (data) => {
// //         return [...data || []].map(d => {
// //             d.date = new Date(d.date);
// //             return d;
// //         });
// //     }

// //     const formatDate = (value) => {
// //         return value.toLocaleDateString('en-US', {
// //             day: '2-digit',
// //             month: '2-digit',
// //             year: 'numeric',
// //         });
// //     }

// //     const formatCurrency = (value) => {
// //         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// //     }

// //     const clearFilter1 = () => {
// //         initFilters1();
// //     }

// //     const onGlobalFilterChange1 = (e) => {
// //         const value = e.target.value;
// //         let _filters1 = { ...filters1 };
// //         _filters1['global'].value = value;

// //         setFilters1(_filters1);
// //         setGlobalFilterValue1(value);
// //     }

// //     const onGlobalFilterChange2 = (e) => {
// //         const value = e.target.value;
// //         let _filters2 = { ...filters2 };
// //         _filters2['global'].value = value;

// //         setFilters2(_filters2);
// //         setGlobalFilterValue2(value);
// //     }

// //     const initFilters1 = () => {
// //         setFilters1({
// //             'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
// //             'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
// //             'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
// //             'representative': { value: null, matchMode: FilterMatchMode.IN },
// //             'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
// //             'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
// //             'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
// //             'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
// //             'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
// //         });
// //         setGlobalFilterValue1('');
// //     }

// //     const renderHeader1 = () => {
// //         return (
// //             <div className="flex justify-content-between">
// //                 <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
// //                 <span className="p-input-icon-left">
// //                     <i className="pi pi-search" />
// //                     <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
// //                 </span>
// //             </div>
// //         )
// //     }

// //     const renderHeader2 = () => {
// //         return (
// //             <div className="flex justify-content-end">
             
// //                 <span className="p-input-icon-left">
// //                     <i className="pi pi-search" />
// //                     <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
// //                 </span>
// //             </div>
// //         )
// //     }

// //     const countryBodyTemplate = (rowData) => {
// //         return (
// //             <React.Fragment>
// //                 <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
// //                 <span className="image-text">{rowData.country.name}</span>
// //             </React.Fragment>
// //         );
// //     }

// //     const filterClearTemplate = (options) => {
// //         return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} className="p-button-secondary"></Button>;
// //     }

// //     const filterApplyTemplate = (options) => {
// //         return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} className="p-button-success"></Button>
// //     }

// //     const filterFooterTemplate = () => {
// //         return <div className="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>;
// //     }

// //     const representativeBodyTemplate = (rowData) => {
// //         const representative = rowData.representative;
// //         return (
// //             <React.Fragment>
// //                 <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
// //                 <span className="image-text">{representative.name}</span>
// //             </React.Fragment>
// //         );
// //     }

   

// //     const dateBodyTemplate = (rowData) => {
// //         return formatDate(rowData.date);
// //     }

// //     const dateFilterTemplate = (options) => {
// //         return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
// //     }

// //     const balanceBodyTemplate = (rowData) => {
// //         return formatCurrency(rowData.balance);
// //     }

// //     const balanceFilterTemplate = (options) => {
// //         return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
// //     }

// //     const statusBodyTemplate = (rowData) => {
// //         return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
// //     }

// //     const statusFilterTemplate = (options) => {
// //         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
// //     }

// //     const statusItemTemplate = (option) => {
// //         return <span className={`customer-badge status-${option}`}>{option}</span>;
// //     }

// //     const activityBodyTemplate = (rowData) => {
// //         return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
// //     }

// //     const activityFilterTemplate = (options) => {
// //         return (
// //             <React.Fragment>
// //                 <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
// //                 <div className="flex align-items-center justify-content-between px-2">
// //                     <span>{options.value ? options.value[0] : 0}</span>
// //                     <span>{options.value ? options.value[1] : 100}</span>
// //                 </div>
// //             </React.Fragment>
// //         )
// //     }

// //     const verifiedBodyTemplate = (rowData) => {
// //         return <i className={classNames('pi', {'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified})}></i>;
// //     }

// //     const verifiedFilterTemplate = (options) => {
// //         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterCallback(e.value)} />
// //     }

   
// //     const statusRowFilterTemplate = (options) => {
// //         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
// //     }

// //     const verifiedRowFilterTemplate = (options) => {
// //         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
// //     }

// //     const header1 = renderHeader1();
// //     const header2 = renderHeader2();

// //     return (
// //         <div className="datatable-filter-demo">
// //            <SideBar/>
           

// //             <div className="card">
// //                 <h1>Appraisal</h1>
               
// //                 <DataTable value={customers2} paginator className="p-datatable-customers" rows={10}
// //                     dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
// //                     globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header2} emptyMessage="No customers found.">
// //                     <Column field="name" header="Employee Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
// //                     <Column header="Year" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by year" />
// //                     <Column header="Qulifier" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by Qulifier" />

// //                     <tbody>
        
// //                <tr>
// //             <td>1</td>
// //             {/* <td><a href="http://localhost:8000/appraisal/1">{user.id}</a></td> */}
// //             <td>{user.employee_name}</td>
// //             <td>{user.year}</td>
           
           
// //             {/* <td> <a href="http://localhost:3000/appraisalsubpage">{user.quarter}</a></td> */}
// //             <Link  to="/subpage/appraisalsubpage">{user.quarter}</Link>
// //             </tr>
        
// //            </tbody>
                   
// //                 </DataTable>
// //             </div>
// //         </div>
// //     );
// // }
// // export default Appraisal



import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./leavehistory.css";
import SideBar from "./SideBar";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
 //import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
//import appraisalsubpage from "./pages/subpage/appraisalsubpage"
import "./Appraisal.css";

const Appraisal = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    id:"",
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    // console.log(id, "in profile page")
    if (data && isSuccess) {
      setUserData({
        id:data.id,
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        id: data.id,
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/appraisal/${data.id}`);
    console.log("mani", res.data)
    setUser(res.data);
  };
  console.log(user,"this is user")
  // const link = `/subpage/appraisalsubpage/${user.id}`
  var permissions = localStorage.getItem("permissions")
   var permissionsdata = JSON.parse(permissions)

  const appraisal =  permissionsdata.appraisal.create;
  return (
   
<div className="sidebarle">
<SideBar/>

   <center>
 <h1 className="lh2">APPRAISAL</h1>
 
 {appraisal ? (
    <button className="buttonapp"> 
<Link  className='apbutton' to="/subpage/addapraisal/:id"> Add </Link></button>
  ) : (
  <h4></h4>
 
)} 
 
 <table class="table2">
 
   <thead class="thead-dark">
     <tr>         
       <th scope="col">S.No</th>
       <th scope="col">Employee Name</th>
       <th scope="col">Year</th>
       <th scope="col">Quarter</th>
          
     </tr>
   </thead>
   <tbody>
     {user.map((user) => (
       <tr>               
         <td>{user.id}</td>
         <td>{user.employee_name}</td>
         <td>{user.year}</td>
         <Link  to='/subpage/appraisalsubpage/:id' >{user.quarter}</Link>
         
       </tr>
     ))}
  
   </tbody>
  
 </table>
 </center>
</div>


);
};

export default Appraisal;

// import React, { useState, useEffect } from 'react';
// import { classNames } from 'primereact/utils';
// import { FilterMatchMode, FilterOperator } from 'primereact/api';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { InputNumber } from 'primereact/inputnumber';
// import { Button } from 'primereact/button';
// import { ProgressBar } from 'primereact/progressbar';
// import { Calendar } from 'primereact/calendar';
// import { MultiSelect } from 'primereact/multiselect';
// import { Slider } from 'primereact/slider';
// import { TriStateCheckbox } from 'primereact/tristatecheckbox';
// import SideBar from './SideBar';
// //import { CustomerService } from '../pages/CustomerService';
// // import './Pagenation.css';
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
//  import { useDispatch } from 'react-redux';
//  import { getToken, removeToken } from '../services/LocalStorageService';
//  import { useGetLoggedUserQuery } from '../services/userAuthApi';
// import { setUserInfo, unsetUserInfo } from '../features/userSlice';


// const Appraisal = () => {
//   const [user, setUser] = useState({
   
//         employee_name: "",
//         year: "",
//         quarter: ""
    
//       });
//       const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { access_token } = getToken()
//   const { data, isSuccess } = useGetLoggedUserQuery(access_token)

//   const [userData, setUserData] = useState({
//     id:"",
//     email: "",
//     name: ""
//   })

//   // Store User Data in Local State
//   useEffect(() => {
//     // console.log(id, "in profile page")
//     if (data && isSuccess) {
//       setUserData({
//         id:data.id,
//         email: data.email,
//         name: data.name,
//       })
//     }
//   }, [data, isSuccess])

//   // Store User Data in Redux Store
//   useEffect(() => {
//     if (data && isSuccess) {
//       dispatch(setUserInfo({
//         id: data.id,
//         email: data.email,
//         name: data.name
//       }))
//     }
//   }, [data, isSuccess, dispatch])
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://127.0.0.1:8000/api/user/appraisal/${data.id}`);
//     setUser(res.data);
//   };
//     const [customers1, setCustomers1] = useState(null);
//     const [customers2, setCustomers2] = useState(null);
//     const [filters1, setFilters1] = useState(null);
//     const [filters2, setFilters2] = useState({
//         'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
//         'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//         'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//         'representative': { value: null, matchMode: FilterMatchMode.IN },
//         'status': { value: null, matchMode: FilterMatchMode.EQUALS },
//         'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
//     });
//     const [globalFilterValue1, setGlobalFilterValue1] = useState('');
//     const [globalFilterValue2, setGlobalFilterValue2] = useState('');
//     const [loading1, setLoading1] = useState(true);
//     const [loading2, setLoading2] = useState(true);
   
//     const statuses = [
//         'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
//     ];

    

//     const getCustomers = (data) => {
//         return [...data || []].map(d => {
//             d.date = new Date(d.date);
//             return d;
//         });
//     }

//     const formatDate = (value) => {
//         return value.toLocaleDateString('en-US', {
//             day: '2-digit',
//             month: '2-digit',
//             year: 'numeric',
//         });
//     }

//     const formatCurrency = (value) => {
//         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     }

//     const clearFilter1 = () => {
//         initFilters1();
//     }

//     const onGlobalFilterChange1 = (e) => {
//         const value = e.target.value;
//         let _filters1 = { ...filters1 };
//         _filters1['global'].value = value;

//         setFilters1(_filters1);
//         setGlobalFilterValue1(value);
//     }

//     const onGlobalFilterChange2 = (e) => {
//         const value = e.target.value;
//         let _filters2 = { ...filters2 };
//         _filters2['global'].value = value;

//         setFilters2(_filters2);
//         setGlobalFilterValue2(value);
//     }

//     const initFilters1 = () => {
//         setFilters1({
//             'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
//             'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//             'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//             'representative': { value: null, matchMode: FilterMatchMode.IN },
//             'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
//             'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//             'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//             'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
//             'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
//         });
//         setGlobalFilterValue1('');
//     }

//     const renderHeader1 = () => {
//         return (
//             <div className="flex justify-content-between">
//                 <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
//                 <span className="p-input-icon-left">
//                     <i className="pi pi-search" />
//                     <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
//                 </span>
//             </div>
//         )
//     }

//     const renderHeader2 = () => {
//         return (
//             <div className="flex justify-content-end">
             
//                 <span className="p-input-icon-left">
//                     <i className="pi pi-search" />
//                     <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
//                 </span>
//             </div>
//         )
//     }

//     const countryBodyTemplate = (rowData) => {
//         return (
//             <React.Fragment>
//                 <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
//                 <span className="image-text">{rowData.country.name}</span>
//             </React.Fragment>
//         );
//     }

//     const filterClearTemplate = (options) => {
//         return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} className="p-button-secondary"></Button>;
//     }

//     const filterApplyTemplate = (options) => {
//         return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} className="p-button-success"></Button>
//     }

//     const filterFooterTemplate = () => {
//         return <div className="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>;
//     }

//     const representativeBodyTemplate = (rowData) => {
//         const representative = rowData.representative;
//         return (
//             <React.Fragment>
//                 <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{representative.name}</span>
//             </React.Fragment>
//         );
//     }

   

//     const dateBodyTemplate = (rowData) => {
//         return formatDate(rowData.date);
//     }

//     const dateFilterTemplate = (options) => {
//         return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
//     }

//     const balanceBodyTemplate = (rowData) => {
//         return formatCurrency(rowData.balance);
//     }

//     const balanceFilterTemplate = (options) => {
//         return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
//     }

//     const statusBodyTemplate = (rowData) => {
//         return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
//     }

//     const statusFilterTemplate = (options) => {
//         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
//     }

//     const statusItemTemplate = (option) => {
//         return <span className={`customer-badge status-${option}`}>{option}</span>;
//     }

//     const activityBodyTemplate = (rowData) => {
//         return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
//     }

//     const activityFilterTemplate = (options) => {
//         return (
//             <React.Fragment>
//                 <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
//                 <div className="flex align-items-center justify-content-between px-2">
//                     <span>{options.value ? options.value[0] : 0}</span>
//                     <span>{options.value ? options.value[1] : 100}</span>
//                 </div>
//             </React.Fragment>
//         )
//     }

//     const verifiedBodyTemplate = (rowData) => {
//         return <i className={classNames('pi', {'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified})}></i>;
//     }

//     const verifiedFilterTemplate = (options) => {
//         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterCallback(e.value)} />
//     }

   
//     const statusRowFilterTemplate = (options) => {
//         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
//     }

//     const verifiedRowFilterTemplate = (options) => {
//         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
//     }

//     const header1 = renderHeader1();
//     const header2 = renderHeader2();

//     return (
//         <div className="datatable-filter-demo">
//            <SideBar/>
           

//             <div className="card">
//                 <h1>Appraisal</h1>
               
//                 <DataTable value={customers2} paginator className="p-datatable-customers" rows={10}
//                     dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
//                     globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header2} emptyMessage="No customers found.">
//                     <Column field="name" header="Employee Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
//                     <Column header="Year" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by year" />
//                     <Column header="Qulifier" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by Qulifier" />

//                     <tbody>
        
//                <tr>
//             <td>1</td>
//             {/* <td><a href="http://localhost:8000/appraisal/1">{user.id}</a></td> */}
//             <td>{user.employee_name}</td>
//             <td>{user.year}</td>
           
           
//             {/* <td> <a href="http://localhost:3000/appraisalsubpage">{user.quarter}</a></td> */}
//             <Link  to="/subpage/appraisalsubpage">{user.quarter}</Link>
//             </tr>
        
//            </tbody>
                   
//                 </DataTable>
//             </div>
//         </div>
//     );
// }
// export default Appraisal\