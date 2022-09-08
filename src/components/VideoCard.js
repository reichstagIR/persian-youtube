import React from 'react';
import {Card, CardContent, CardMedia, Typography } from "@mui/material"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {Link} from "react-router-dom";
const videoCard = ({video}) => {
    return (
        <Card sx={{backgroundColor : "#1e1e1e" , border : "1px solid #1e1e1e"}}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia component="img" src={video.snippet.thumbnails.medium.url} sx={{height : "15.7rem", backgroundColor : "#7c7c7c"}} alt="videoThumbnail"/>
            </Link>
            <CardContent sx={{height : "10rem"}}>
                <Typography variant="subtitle1">
                    <Link to={`/video/${video.id.videoId}`} style={{color : "#fff"}}>{video.snippet.title.split(1 , 60)}</Link>
                </Typography>

                <Link to={`/channel/${video?.snippet?.channelId}`} style={{color : "#7c7c7c"}}>
                    <Typography variant="subtitle2" mt="0.4rem" sx={{display : "flex" , alignItems : "center"}}>
                        {video?.snippet?.channelTitle}
                        <CheckCircleRoundedIcon  sx={{width : "1rem" , mr : "0.3rem"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default videoCard;
