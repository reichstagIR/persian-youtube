import React , {useState , useEffect} from 'react';
import {CircularProgress, Container, Box, Stack} from "@mui/material";
import {fetchDataFromAPI} from "./utils/fetchDataFromAPI";
import {useParams} from "react-router-dom";
import {Videos} from "./index";

const SearchFeed = () => {

    const params = useParams();

    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setSearchResult([]);
        fetchDataFromAPI({q : params.query , maxResults : 50 , part : "snippet" , order : "date"} , "search")
            .then(response => {
                setSearchResult(response.data.items);
                setLoading(false);
            })
    } , [params.query])

    console.log(searchResult);

    return (
        <Box minHeight="100vh" sx={{backgroundColor : "#000"}}>
            {loading ?
                <Stack alignItems="center" justifyContent="center" height="calc(100vh - 78px)">
                    <CircularProgress sx={{color : "#fff"}}/>
                </Stack>
                :
                <Box>
                    <Container maxWidth="xl">
                        <Videos videos={searchResult}/>
                    </Container>
                </Box>
            }
        </Box>
    );
};

export default SearchFeed;
