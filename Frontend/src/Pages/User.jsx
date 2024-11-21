import React from "react";
import { PATHS } from "../Constant/pathnames";
import { NavLink } from "react-router-dom";

function User () {
    return(
        <>
            <h1>
                User Page
                <NavLink to={PATHS.USER_DETAIL}>
                        User Detail
                </NavLink >
            </h1>
            <p>

            </p>
        </>
    )
}

export default User;