import axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3"
})

export default instance;

// http://api.themoviedb.org/3/trending/all/week?api_key=44648c87bee16eb91553f608c5a6ed48&language=en-US