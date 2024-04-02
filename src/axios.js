import axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3"
})

export default instance;

// http://api.themoviedb.org/3/trending/all/week?api_key=YOUR API KEY&language=en-US
