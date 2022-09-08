import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {Link} from "react-router-dom";

const ChannelCard = ({channel , marginTop}) => {
    return (
        <Card sx={{backgroundColor : "transparent" , marginTop , boxShadow : "0"}}>
            <CardContent sx={{height : "23.6rem" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}}>
                <CardMedia component="img" src={channel?.snippet?.thumbnails?.medium.url} sx={{height : "15.7rem" , width : "265px" , borderRadius : "50%"}} alt="channel" referrerPolicy="no-referrer"/>
                <Link to={`/channel/${channel?.snippet?.channelId}`} style={{color : "#fff"}}>
                    <Typography variant="subtitle1" mt="1rem" sx={{display : "flex" , alignItems : "center"}}>
                        {channel?.snippet?.title}
                        <CheckCircleRoundedIcon  sx={{width : "1rem" , mr : "0.3rem"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ChannelCard;
