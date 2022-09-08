import React , {useState , useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataFromAPI} from "./utils/fetchDataFromAPI";
import {Box , Container , CircularProgress} from "@mui/material";
import {ChannelCard , Videos} from "./index";
import {ContentsLoader} from "./index";

const ChannelDetails = () => {

    const [channelDetails, setChannelDetails] = useState([]);
    const [channelVideos, setChannelVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = useParams();

    useEffect(() => {
        setChannelDetails([]);
        setChannelVideos([]);
        fetchDataFromAPI({id : id.id , part : "snippet"} , "channels").then(response => {

            setChannelDetails(response.data.items[0]);
            setLoading(false);

        });
        fetchDataFromAPI({channelId : id.id , part : "snippet,id" , order : "date" , maxResults : "50"} , "search").then(response => {

            setChannelVideos(response.data.items);
            setLoading(false);
        });
    } , [id.id]);

    return (
        <>
            <Box minHeight="calc(100vh - 78px)" sx={{background : "#000"}}>
                <Box width="100%" height="28rem" sx={{background : "linear-gradient(90deg, rgba(255,150,235,1) 0%, rgba(0,138,255,1) 100%)"}} />
                <Box display="flex" alignItems="center" justifyContent="center">
                    {channelDetails?.snippet?.thumbnails?.medium?.url ? <ChannelCard channel={channelDetails} marginTop="-10.4rem"/> : <Box mt="-14.4rem"><ContentsLoader textALign="center"/></Box>}
                </Box>
                {loading ?
                    <Box display="flex" alignItems="center" justifyContent="center" mt="2rem">
                        <CircularProgress sx={{color : "#fff"}}/>
                    </Box>
                :
                    <Box pb="1.4rem">
                        <Container maxWidth="xl">
                            <Videos videos={channelVideos}/>
                        </Container>
                    </Box>
                }
            </Box>
        </>
    );
};

export default ChannelDetails;
