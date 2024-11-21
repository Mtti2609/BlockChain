
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomeLayout from './Layout/HomeLayout'
import "../public/css/style.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import { PATHS } from './Constant/pathnames'
import Product from './Pages/Product'
import User from './Pages/User'
import Product_detail from './Pages/Product_detail';
import User_detail from './Pages/User_detail';

function App() {
  

  return (
    <Router>

        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
                <Route path={PATHS.PRODUCT} element={<Product />} />
                <Route path={PATHS.PRODUCT_DETAIL} element={<Product_detail/>}/>
                <Route path={PATHS.USER_DETAIL} element={<User_detail/>}/>
                <Route path={PATHS.USER} element={<User />} />
            </Route>
        </Routes>

    </Router>
  )
}

export default App
