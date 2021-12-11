import axios from 'axios';
import { headers } from 'service/config';

console.log(headers);
function GET_ME() {
    try {
        const res = axios.get('me', {
            headers
        });
        return res;
    } catch (e) {
        if (e.response.status === 401) {
            return null;
        }
    }
}
function GET_MEE() {
    try {
        const res = axios.get('me', {
            headers
        });
        return res;
    } catch (e) {
        if (e.response.status === 401) {
            return null;
        }
    }
}
export { GET_ME, GET_MEE };
