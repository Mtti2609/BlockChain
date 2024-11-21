import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../Constant/pathnames";

function Sidebar () {
    return(
        <aside className="sidebar">
            <ul>
                <li>
                    <NavLink to={PATHS.DASHBOARD}>
										Dashboard
					</NavLink >
                </li>
                <li>
                    <NavLink to={PATHS.PRODUCT}>
										Product
					</NavLink >
                </li>
                <li>
                <a href="#">Orders</a>
                </li>
                <li>
                <a href="#">Categories</a>
                </li>
                <li>
                    <NavLink to={PATHS.USER}>User</NavLink >
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;