import { headers } from 'service/config';

const { default: axios } = require('axios');

const GET_CHECK_POINT_CLAIM = async (exp, code, jumlah) => {
    const res = await axios.get(`point/check_claim/${exp}/${code}/${jumlah}`, {
        headers
    });
    return res;
};
const POST_CLAIM_POINT = async (code) => {
    const res = await axios.post(
        `point/claim_point`,
        {
            id: code
        },
        {
            headers
        }
    );
    return res;
};

export { GET_CHECK_POINT_CLAIM, POST_CLAIM_POINT };
