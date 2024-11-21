import { useState } from 'react'
import HomeLayout from './Layout/HomeLayout'
import "../public/css/style.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import { PATHS } from './Constant/pathnames'
import Product from './Pages/Product'
import User from './Pages/User'

function App() {
  

  return (
    <Router>

        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
                <Route path={PATHS.PRODUCT} element={<Product />} />
                <Route path={PATHS.USER} element={<User />} />
            </Route>
        </Routes>

    </Router>
  )
}

export default App
