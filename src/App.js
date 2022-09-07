import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {Navbar , Feed , VideoDetails , ChannelDetails} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />}/>
                <Route path="/videoDetails/:id" element={<VideoDetails />}/>
                <Route path="/channelDetails/:id" element={<ChannelDetails />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
