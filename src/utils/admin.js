import axios from "axios";
// import { useSelector } from "react-redux";
import API_URL from "./constants.js"
// const token = useSelector((state) => state.auth.token);

let Api = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + token,
    },
    withCredentials: true
});




export default Api;