import React from 'react';
import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";
import {Navbar , Feed , VideoDetails , ChannelDetails , SearchFeed , NotFound} from "./components";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "iranyekan",
            "sans-serif",
        ].join(','),
    },});

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Feed />}/>
                        <Route path="/video/:id" element={<VideoDetails />}/>
                        <Route path="/channel/:id" element={<ChannelDetails />}/>
                        <Route path="/notfound" element={<NotFound />}/>
                        <Route path="/search/:query" element={<SearchFeed />}/>
                        <Route path="/*" element={<Navigate to="/notfound" />}/>
                    </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
