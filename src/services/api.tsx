import axios from 'axios';

const LastAPI = axios.create({
    baseURL: 'http://ws.audioscrobbler.com/2.0',
});

export default LastAPI;