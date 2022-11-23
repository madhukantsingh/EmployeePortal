import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import Viewprofile from "./pages/Viewprofile";
import ApplyLeave from "./pages/ApplyLeave";
import AddProfile from "./pages/AddProfile";
import Dependents from "./pages/Dependents";
import AddDependents from "./pages/AddDependents";
import Assets from "./pages/Assets";
import Kt from "./pages/Kt";
import Payroll from "./pages/Payroll";
import Policy  from "./pages/Policy";
import Appraisal from "./pages/Appraisal";
import Bob from "./pages/Bob";
import AwardsAccolades from "./pages/AwardsAccolades";
import ParmanentDocuments from "./pages/PermanentDocuments";
//import Leavehistory from "./pages/LeaveHistory";
import LeaveList from "./pages/LeaveList";
import Appraisalsubpage from "./subpage/Appraisalsubpage";
import AddAppraisal from "./subpage/AddAppraisal";

import LeaveHistory from "./pages/LeaveHistory";
import Approveleave from "./pages/Approveleave";
import ApprovedRejected from "./pages/ApprovedRejected";
import AddAssets from "./pages/AddAssets";
import AddAwards from "./pages/AddAwards";
import Training from "./pages/Training";
import ApprovalDependent from "./pages/ApprovalDependent";
import ApprovedRejectedDependent from "./pages/ApprovalRejectedDependent";
import ApprovalAssets from "./pages/ApprovalAssets";
import ApprovedRejectedAssets from "./pages/ApprovalRejectedAssets";

//import   UserList  from "./pages/Admin";
// import SideBar from "./pages/SideBar";
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <SideBar/> */}
         
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset/:id/:token" element={<ResetPassword />} />
            <Route path="/viewprofile/:id" element={access_token ? <Viewprofile /> : <Navigate to="/login" />} />
            <Route path="/viewprofile/Addprofile/" element={access_token ? <AddProfile /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/Registration" element={access_token ? <Registration /> : <Navigate to="/login" />} />
            <Route path="/dependents/:id" element={access_token ? <Dependents /> : <Navigate to="/login" />} />
            <Route path="/dependents/AddDependents" element={access_token ? <AddDependents /> : <Navigate to="/login" />} />
            <Route path="/assets/:id" element={access_token ? <Assets /> : <Navigate to="/login" />} />
            <Route path="/kt" element={access_token ? <Kt /> : <Navigate to="/login" />} />
            <Route path="/payroll" element={access_token ? <Payroll /> : <Navigate to="/login" />} />
            <Route path="/policy" element={access_token ? <Policy /> : <Navigate to="/login" />} />
            <Route path="/appraisal" element={access_token ? <Appraisal /> : <Navigate to="/login" />} />
            <Route path="/subpage/addapraisal:id" element={access_token ? <AddAppraisal /> : <Navigate to="/login" />} />
            <Route path="/assets" element={access_token ? <AddAssets /> : <Navigate to="/login" />} />
            <Route path="/AddAwards" element={access_token ? <AddAwards /> : <Navigate to="/login" />} />
            <Route path="/training" element={access_token ? <Training /> : <Navigate to="/login" />} />
            <Route path="/dependents/approvaldependent" element={access_token ? <ApprovalDependent /> : <Navigate to="/login" />} />
            <Route path="/dependents/approvaldependent/approvedrejecteddependent:id" element={access_token ? <ApprovedRejectedDependent /> : <Navigate to="/login" />} />
            <Route path="/assets/approvalassets" element={access_token ? <ApprovalAssets /> : <Navigate to="/login" />} />
            <Route path="/assets/approvalassets/approvedrejectedassets:id" element={access_token ? <ApprovedRejectedAssets /> : <Navigate to="/login" />} />
            <Route path="/bob/" element={access_token ? <Bob /> : <Navigate to="/login" />} />
            <Route path="/awards" element={access_token ? <AwardsAccolades /> : <Navigate to="/login" />} />
            <Route path="/documents" element={access_token ? <ParmanentDocuments /> : <Navigate to="/login" />} />
            <Route path="/LeaveManagement/leavelist" element={access_token ? <LeaveList /> : <Navigate to="/login" />} />
            <Route path="/LeaveManagement/applyleave/approveleave" element={access_token ? <Approveleave /> : <Navigate to="/login" />} />
            <Route path="/LeaveManagement/applyleave/approveleave/approvedrejected:id" element={access_token ? <ApprovedRejected /> : <Navigate to="/login" />} />
            <Route path="/subpage/appraisalsubpage/:id" element={access_token ? <Appraisalsubpage /> : <Navigate to="/login" />} /> 
            <Route path="/LeaveManagement/leavehistory" element={access_token ? <LeaveHistory /> : <Navigate to="/login" />} />
            <Route path="/LeaveManagement/applyleave/:id" element={access_token ? <ApplyLeave /> : <Navigate to="/login" />} />
            <Route path="/LeaveManagement/leavehistory/:id" element={access_token ? <LeaveHistory /> : <Navigate to="/login" />} />
              

            {/* <Route exact path="/viewprofile/:id" element={Viewprofile} /> */}
           </Route>
           <Route path="/profile" element={access_token ? <Profile /> : <Navigate to="/login" />} />
           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 