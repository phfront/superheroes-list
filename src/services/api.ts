import axios from 'axios';

const { REACT_APP_API_TOKEN } = process.env;

const api = axios.create({
    baseURL: `https://superheroapi.com/api.php/${REACT_APP_API_TOKEN}`
})

export default api;