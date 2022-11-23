import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import "./leavehistory.css";
import "./Dependents.css";
import SideBar from "./SideBar";

const Dependents = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
  loadUser();
}, []);
const { id } = useParams();
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/dependents/${id}`);
    console.log(res.data)
    setUsers(res.data);
    console.log(res,"tharun");
  };
  
console.log(users,"outside")

var permissions = localStorage.getItem("permissions")
var permissionsdata = JSON.parse(permissions)

 const adddependents =  permissionsdata.adddependents.create;


  return (
    // <div className="">
    //    <SideBar/>
    //   <div className="py-4">
    //   <center>
    //     <h1>Leavehistory</h1>
        
       
        
    //     <table class="table2">
        
    //       <thead class="thead-dark">
    //         <tr>         
    //           <th scope="col">Leave id</th>
    //           <th scope="col">employee id </th>
    //           <th scope="col">Name</th>
              
             
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {user.map((user) => (
    //           <tr>               
                
    //             <td>{user.eid}</td>
    //             <td>{user.dependent_name}</td>
    //             <td>{user.relation}</td>
                
    //           </tr>
    //         ))}
         
    //       </tbody>
         
    //     </table>
    //     </center>
    //   </div>
      
    // </div>

    <div className="sidebardep">
       <SideBar/><div>
       
        {/* <div class = "pull-right  "> */}
      
      {/* </div> */}
       <center>
      <div className="content">
      {adddependents ? (
      <Link to="/Dependents/AddDependents">
      <button class="buttondep" type="button">
           Add Dependents 
      </button>
      </Link>
      ) : (
        <h4></h4>
       
      )}
      <h1 className="lh2">DEPENDENTS</h1>
        
        
       
         
        <table class="table2">
        
          <thead class="thead-dark">
            <tr>         
              {/* <th scope="col">did</th> */}
              <th scope="col">Emp Id </th>
              <th scope="col">Employee Name</th>
              <th scope="col">Dependent Name</th>
              <th scope="col">Relation</th> 
              <th scope="col">Status</th>                        

              
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
              <tr>               
                {/* <td>{users.did}</td> */}
                <td>{user.emp_id}</td>
                <td>{user.employee_name}</td>
                <td>{user.dependent_name}</td>
                <td>{user.relation}</td>
                <td>{user.status}</td>

                
              </tr>
          
          ))}
          </tbody>
         
        </table>
        
      </div>
      </center>
    </div>
     
     </div>
  );
};

export default  Dependents;


// import React, { useState, useEffect } from "react";
// //import SideBar from "../components/Sidebar/SideBar";
// import axios from "axios";
// import SideBar from './SideBar';
// import { Link } from "react-router-dom";
// import "./leavehistory.css";
// import Pagination from '@material-ui/lab/Pagination';
// const Dependents = () => {
//   const [users, setUser] = useState(
//             lid :1,
//         eemp_name : "",
//       family_name :"",
//          relation :"",
//          updated_by :""
//     []);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get(`http://127.0.0.1:8000/api/user/dependents/${id}`);
//     console.log(id)
//     setUser(result.data);
   
//   };

//   return (
    
//     <div className="">
//        <SideBar/>
//       <div className="py-8">
//         <center>
//         <h1 style={{backgroundColor: "#483d8b"}}>Dependants</h1>
//         <div className="" style={{ display: 'block', padding: 30 }}>
         
//         <table class="table2">
        
//           <thead class="thead-dark">
//                         <tr>
//                 <th scope="col">Employee Name</th>
//                <th scope="col">Dependent Name</th>
//                 <th scope="col">Relation</th>
             
//              </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr>               
//                 <td>{user.employee_name}</td>
//                 <td>{user.dependent_name}</td>
//                 <td>{user.relation}</td>
                
                
//               </tr>
//             ))}
         
//           </tbody>
         
//         </table>
//         <Pagination count={6} />
//       </div>
//         </center>
//       </div>
      
//     </div>
     
//   );
// };

// export default Dependents;

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
// // import axios from "axios";
// // //import { CustomerService } from '../pages/CustomerService';
// // // import './Pagenation.css';

// // const Dependents = () => {
// //   const [users, setUser] = useState([]);

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
// //     useEffect(() => {
// //           loadUsers();
// //         }, []);
      
// //         const loadUsers = async () => {
// //           const result = await axios.get("http://127.0.0.1:8000/dependents/1");
// //           setUser(result.data);
         
// //         };

// //     return (
// //         <div className="datatable-filter-demo">
// //            <SideBar/>
           

// //             <div className="card">
// //                 <h1>Dependants</h1>
               
// //                 <DataTable value={customers2} paginator className="p-datatable-customers" rows={10}
// //                     dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
// //                     globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header2} emptyMessage="No customers found.">
// //                     <Column field="name" header="Employee Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
// //                     <Column header="Dependents Name" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by year" />
// //                     <Column header="Relation" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by Qulifier" />

// //                     <tbody>
// //              {users.map((user) => (
// //               <tr>               
// //                 <td>{user.employee_name}</td>
// //                 <td>{user.dependent_name}</td>
// //                 <td>{user.relation}</td>
                
                
// //               </tr>
// //             ))}
         
// //           </tbody>
                   
// //                 </DataTable>
// //             </div>
// //         </div>
// //     );
// // }
// // export default Dependents





// import React, { useState, useEffect } from "react";
// //import SideBar from "../components/Sidebar/SideBar";
// import axios from "axios";
// import SideBar from "./SideBar";
// // import "./leavehistory.css";
// import { useParams } from "react-router-dom";

// const Dependents = () => {
//   const [dependent, setDependent] = useState({});
// //   const seteid = {
// //     eid : 1
// //   }

//   useEffect(() => {
//     loadUsers();
//   }, []);

// const {id} = useParams()
//   const loadUsers = async () => {
//     const result = await axios.get(`http://127.0.0.1:8000/api/user/dependents/${id}`);
    
//     console.log(result.data)
//     setDependent(result.data);  
//     console.log(result,"tharun");
//     // console.log(seteid.eid)
//   };
// console.log(dependent,"this is dependent")
//   return (
//     <div className="">
//        <SideBar/>
//       <div className="py-4">
//       <center>
//         <h1>Dependants</h1>
        
       
        
//         <table class="table2">
        
//           <thead class="thead-dark">
//             <tr>         
//               <th scope="col">did</th>
//               <th scope="col">employee_name </th>
//               <th scope="col">dependent_name</th>
//               <th scope="col">relation</th>
//               <th scope="col">eid</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {dependent.map((user) => (
//               <tr>               
//                 <td>{user.did}</td>
//                 <td>{user.emp_id}</td>
//                 <td>{user.employee_name}</td>
//                 <td>{user.dependent_name}</td>
//                 <td>{user.relation}</td>
                
//               </tr>
//             ))}
         
//           </tbody>
         
//         </table>
//         </center>
//       </div>
      
//     </div>
     
//   );
// };

// export default Dependents;