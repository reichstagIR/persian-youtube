import React , {useState , useEffect} from 'react';
import {Box , Stack , CircularProgress ,Container} from "@mui/material"
import {Sidebar , Videos} from "./index";
import {fetchDataFromAPI} from "./utils/fetchDataFromAPI";

const Feed = () => {

    const [data, setData] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState("تازه");
    const [loading, setLading] = useState(true);

    useEffect(() => {
        setData([]);
        setLading(true);
        fetchDataFromAPI({q : selectedCategory , part : "snippet" , maxResults: "50" , order : "date"} , "search")
            .then(response => {
                setData(response.data.items);
                setLading(false);
            });
    } , [selectedCategory]);

    return (
        <Box sx={{ backgroundColor : "#000" , fontFamily : "iranyekan"}}>
            <Stack direction={{xs : "column" , md : "row"}}>
                <Stack direction={{xs : "row" , md : "column"}} sx={{px : "0.5rem" , overflow : "auto" , width : {xs : "auto" , md : "20%"} , height : {xs : "auto" , md : "calc(100vh - 87px)"} , borderLeft : {md : "1px solid #383232"}, my : {md : "0.3rem"}}}>
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </Stack>
                {loading ?
                    <Stack alignItems="center" justifyContent="center" sx={{width : {xs : "auto" , md : "80%"} , height : "calc(100vh - 87px)"}}>
                        <CircularProgress sx={{color : "#fff"}}/>
                    </Stack>
                    :
                    <Box sx={{width : {xs : "auto" , md : "80%"} , overflow : "hidden auto" , height : "calc(100vh - 87px)"}}>
                        <Container maxWidth="xl">
                            <Videos videos={data}/>
                        </Container>
                    </Box>
                }
            </Stack>
        </Box>
    );
};

export default Feed;
