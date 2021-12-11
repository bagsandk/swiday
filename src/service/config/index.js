import { useAuth } from 'auth/authContext';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const accessToken = localStorage.getItem('accessToken');

const headers = {
    authorization: `Bearer ${accessToken}`
};
const header2 = {
    authorization: `Bearer ${accessToken}`
};

export { header2, headers };
