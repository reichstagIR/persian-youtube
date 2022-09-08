import axios from "axios";

export const fetchDataFromAPI = async (params , endPoint) => {
    const options = {
        method: "get",
        url: `https://youtube-v31.p.rapidapi.com/${endPoint}`,
        params: {
                ...params
            },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    const response = await axios.request(options);
    return response;
}