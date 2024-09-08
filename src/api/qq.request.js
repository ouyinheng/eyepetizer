import axios from 'axios';

export const recommed = () => axios.get('/api/v2/music/recommend').then( res => res.data);