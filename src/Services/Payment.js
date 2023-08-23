import axios from "axios";

const PayU = axios.create({
    baseURL: `https://test.payu.in/_payment/`,
    headers: {
        common: {
            Accept: 'text/plain',
            Authorization: 'Bearer 2|F9bGazComqI48dnP34cEMAXep0eUgiwnQiz1vlbsB67GIuYB'
        }
    }
})

PayU.defaults.headers.common['Content-Type'] = 'application/json';

export default PayU;