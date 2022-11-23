import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser , FaRupeeSign , FaHistory} from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import {FcReading ,} from "react-icons/fc"
import { GiStairsGoal,GiFlowerPot } from "react-icons/gi";
import { RiParentLine } from "react-icons/ri";
import {CgAwards} from "react-icons/cg"
import {FcLeave , FcDocument} from "react-icons/fc"
import {MdPolicy , MdLaptop} from "react-icons/md"
import { useState , useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { useDispatch } from 'react-redux';
import './Dashboard.css'

import React from "react";



import { useGetLoggedUserQuery } from '../services/userAuthApi';

import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';


const SideBar = ({ children }) => {

 
  // const { access_token } = getToken()



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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/profile",
      name: "View Profile",
      icon: <FaUser />,
      subRoutes: [
        {
          path: `/viewprofile/${userData.id}`,
          name: "Profile",
          icon: <FaUser />,
        },
        {
          path: `/dependents/${userData.id}`,
          name: "Dependents",
          icon: <RiParentLine />,
        },
        {
          path: `/assets/${userData.id}`,
          name: "Assets",
          icon: <MdLaptop />,
        },
      ]
    },
    
  
    {
      path: "/LeaveManagement",
      name: "Leave Managemant",
      icon: <FcLeave />,
      subRoutes: [
        {
          path: `/LeaveManagement/applyleave/${userData.id}`,
          name: "Apply Leave ",
          icon: <FcLeave />,
        },
        {
          path: `/LeaveManagement/leavehistory/${userData.id}`,
          name: "Leave history ",
          icon: <FaHistory />,
        },
      ],
    },
    {
      path: "/policy",
      name: "Policy",
      icon: <MdPolicy />,
    },
    {
        path: "/documents",
        name: "Permanent Documents",
        icon: <FcDocument />,
      },
      {
        path: "/awards",
        name: "Awards and Accolades",
        icon: <CgAwards />,
      },
    
      {
        path: "/kt",
        name: "Knowledge Transfer",
        icon: <FcReading />,
      },
      {
        path: "/training",
        name: "Training",
        icon: <MdModelTraining />,
      },
      {
        path: "/payroll",
        name: "Payroll",
        icon: <FaRupeeSign />,
       
      },
      {
        path: "/BOB/",
        name: "bob",
        icon: <GiFlowerPot />,
      },
      {
        path: "/appraisal",
        name: "Appraisal",
        icon: <GiStairsGoal />,
      },
    
  ];

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "70px",

            transition: {
              duration: 0.4,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="">
          <div className="top_section">
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.h1
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                  
                </motion.h1>
              )}
            </AnimatePresence><br></br>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                  
                );
                
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                       
                      </motion.div>
                      
                    )}
                     
                  </AnimatePresence>
                  
                </NavLink>
              );
              

            })}
            
          </section>

           
          </div>

        
        </motion.div>

        <main className="main">{children}</main>
        
      </div>

      
      
    </>
  );
};

export default SideBar;
