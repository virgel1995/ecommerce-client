import axios from "axios";
import API_URL from "./constants.js"
let api = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// api.interceptors.request.use(request => {
//     request.headers.common['Accept']       = 'application/json*';
//     request.headers.common['Content-Type'] = 'application/json';
//     // request.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//     // request.headers.common['Access-Control-Allow-Credentials'] = true;
//     return request;
// });

// api.interceptors.response.use(
//     response => { return response;},
//     error => { return Promise.reject(error); }
// );

export default api;