import React from "react";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";

function HomeLayout () {
    return(
        <div className="dashboard">
            <Header/>
            <Sidebar/>
            <Outlet/>
            <Footer/>    
        </div>
    )
}

export default HomeLayout;