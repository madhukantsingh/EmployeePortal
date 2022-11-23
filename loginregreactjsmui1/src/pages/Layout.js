import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from "react";
const Layout = () => {
  console.log("tharun in layout");
  return <>
    <CssBaseline />
    <Header />
    {/* <Navbar /> */}
    <Outlet />
  </>;
};

export default Layout;
