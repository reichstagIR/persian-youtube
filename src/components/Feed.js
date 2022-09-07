import React , {useState , useEffect} from 'react';
import {Box , Stack} from "@mui/material"
import {Sidebar , Videos} from "./index";
import {fetchDataFromAPI} from "./utils/fetchDataFromAPI";

const Feed = () => {

    const [data, setData] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState("تازه");

    useEffect(() => {
        fetchDataFromAPI({q : selectedCategory , part : "snippet" , maxResults: "50" , order : "date"} , "search")
            .then(response => setData(response.data.items));
    } , [selectedCategory]);

    return (
        <Box sx={{height : "calc(100vh - 78px)" , backgroundColor : "#000"}}>
            <Stack direction="row" sx={{height : {xs : "auto" , md : "calc(100vh - 78px)"}}}>
                <Stack direction={{xs : "row" , md : "column"}} flexGrow="1" sx={{px : "0.4rem" , overflow : "auto"}}>
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </Stack>
                <Stack direction="row" flexGrow="6">
                    <Videos videos={data}/>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Feed;
