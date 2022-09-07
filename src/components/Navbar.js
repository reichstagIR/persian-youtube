import React from 'react';
import {logo} from "./utils/constants";
import {Link} from "react-router-dom"
import {Stack , Paper} from "@mui/material";
import {Search} from "@mui/icons-material";

const Navbar = () => {
    return (
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between" spacing="8" sx={{backgroundColor : "#000" , p : "1rem"}}>
            <Paper elevation={0} component="form" sx={{display : "flex" , alignItems : "center" , justifyContent : "center" , borderRadius : "1.25rem" , p : "0.4rem"}}>
                <Search sx={{pl : "0.4rem" , color : "#ff0000"}}/>
                <input placeholder="جستوجو..." value="" onChange={() => {}} className="search-bar"/>
            </Paper>

            <Link to="/" style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                <img src={logo} alt="logo" style={{width : "2.8rem"}}/>
            </Link>
        </Stack>
    );
};

export default Navbar;
