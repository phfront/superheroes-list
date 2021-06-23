import axios from 'axios';

const api = axios.create({
    baseURL: 'https://superheroapi.com/api.php/4314669091887793'
})

export default api;