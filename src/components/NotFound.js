import React from 'react';
import {Box , Typography} from "@mui/material"

const NotFound = () => {
    return (
        <Box height="calc(100vh - 78px)" sx={{backgroundColor : "#000" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
            <Typography variant="h1">
                <span style={{color : "#FC1503"}}>Not</span>
                <span style={{color : "#fff"}}>Found</span>
            </Typography>
        </Box>
    );
};

export default NotFound;
