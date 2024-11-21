import React from "react";
import { PATHS } from "../Constant/pathnames";
import { NavLink } from "react-router-dom";

function Product () {
    return(
        <>
            <h1>
                Product Page
                <NavLink to={PATHS.PRODUCT_DETAIL}>
                        Product Detail
                </NavLink >
            </h1>
            
                
            
        </>        
    )
}

export default Product;