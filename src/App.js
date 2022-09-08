import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed, NotFound} from "./components";
import {createTheme, ThemeProvider} from "@material-ui/core";

const App = () => {
    const theme = createTheme({
        fontFamily: ["iranyekan", "sans-serif"].join(","),
    });
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/video/:id" element={<VideoDetails/>}/>
                    <Route path="/channel/:id" element={<ChannelDetails/>}/>
                    <Route path="/notfound" element={<NotFound/>}/>
                    <Route path="/search/:query" element={<SearchFeed/>}/>
                    <Route path="/*" element={<Navigate to="/notfound"/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
