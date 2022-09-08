import React, {useEffect, useState} from 'react';
import {Stack, Box, Typography, Container, CircularProgress} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {fetchDataFromAPI} from "./utils/fetchDataFromAPI";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import videos from "./Videos";
import ReactPlayer from 'react-player'
import {Videos} from "./index";


const VideoDetails = () => {

    const params = useParams();

    const [videoDetails, setVideoDetails] = useState([]);
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setVideoDetails([]);
        setSuggestedVideos([]);
        fetchDataFromAPI({id: params.id, part: "snippet", maxResults: "50"}, "videos")
            .then(response => {
                setVideoDetails(response.data.items[0]);
                setLoading(false);
            })
        fetchDataFromAPI({relatedToVideoId: params.id, part: "snippet", type: "video", maxResults: "50"}, "search")
            .then(response => {
                setSuggestedVideos(response.data.items);
                setLoading(false);
            })
    }, [params.id])

    const viewCount = videoDetails?.statistics?.viewCount;
    const likeCount = videoDetails?.statistics?.likeCount;


    return (
        <Box minHeight="calc(100vh - 78px)" sx={{backgroundColor: "#000", fontFamily: "iranyekan , sans-serif"}}>
            <Container maxWidth="xl">
                {loading ?
                    <Stack alignItems="center" justifyContent="center" sx={{height: "calc(100vh - 78px)"}}>
                        <CircularProgress sx={{color: "#fff"}}/>
                    </Stack>
                    :
                    <Stack direction={{md : "row" , sm : "column"}} gap="2rem">
                        <Box className="player-wrapper" width={{md : "78%" , sm : "100%"}}>
                            <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${params.id}`}
                                         controls/>
                            <Typography variant="h5" mt="1rem">
                                <span style={{color: "#fff"}}>{videoDetails?.snippet?.title}</span>
                            </Typography>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" mt="1rem">
                                <Typography variant="subtitle2">
                                    <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                                        <Stack direction="row" alignItems="center" justifyContent="center">
                                            <span
                                                style={{color: "#7c7c7c"}}>{videoDetails?.snippet?.channelTitle}</span>
                                            <CheckCircleRoundedIcon
                                                sx={{width: "1rem", mr: "0.3rem", color: "#7c7c7c"}}/>
                                        </Stack>
                                    </Link>
                                </Typography>
                                <Typography variant="subtitle2">
                                    <Stack direction="row" alignItems="center" justifyContent="center">
                                        <span style={{
                                            color: "#7c7c7c",
                                            marginLeft: "0.6rem"
                                        }}>{parseInt(viewCount).toLocaleString()} بازدید</span>
                                        <span
                                            style={{color: "#7c7c7c"}}>{parseInt(likeCount).toLocaleString()} لایک</span>
                                    </Stack>
                                </Typography>
                            </Stack>
                        </Box>
                        <Box width={{md : "28%" , sm : "100%"}} height="calc(100vh - 78px)" overflow="auto">
                            <Videos videos={suggestedVideos} xs={12} sm={12} md={12} lg={12} xl={12} columnSpacing="0"
                                    rowSpacing="1.5rem"/>
                        </Box>
                    </Stack>
                }
            </Container>
        </Box>
    );
};

export default VideoDetails;
