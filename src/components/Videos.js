import React from 'react';
import {Grid} from "@mui/material"
import {VideoCard , ChannelCard} from "./index";
import {v4} from "uuid";

const Videos = ({videos , xs , md , sm , xl , lg , columnSpacing , rowSpacing}) => {
    return (
        <Grid container columnSpacing={columnSpacing || "1.7rem"} rowSpacing={rowSpacing || "1.7rem"}>
            {videos.map(item => <Grid item xs={xs || 12} sm={sm || 6} md={md || 6} lg={lg || 4} xl={xl || 3} key={v4()}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard channel={item}/>}
            </Grid>
            )}
        </Grid>
    );
};

export default Videos;
