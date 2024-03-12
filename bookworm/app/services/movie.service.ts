import axios from "axios";

// const API_KEY= "897bccc697de1f9b8bea79186029bef8"
// const API_BASE_URL= 'https://api.themoviedb.org/3/movie/550?api_key=897bccc697de1f9b8bea79186029bef8';

const API_KEY= "ADadada"
const API_BASE_URL= 'https://api.themoviedb.org/3';

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY}
});

export const searchMovies = async(query: string) => {
    try {
        const response = await client.get("/search/movie", {
            params: {query,},
        });

        if (response.data && response.data.results) {
            return response.data.results;
        } else {
            console.error("Couldn' get the data");
        }
    } catch(error) {
        console.error(error);
        return[];
    }
}