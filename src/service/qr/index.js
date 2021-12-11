const { default: axios } = require('axios');

const GET_QR_LIST_MENU = async () => {
    const res = await axios.get('qr/menu');
    return res;
};
const GET_QR_CLAIM_POINT = async () => {
    const res = await axios.get('qr/claim_point');
    return res;
};

export { GET_QR_CLAIM_POINT, GET_QR_LIST_MENU };
