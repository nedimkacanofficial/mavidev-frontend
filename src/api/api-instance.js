import axios from "axios";

const mavidev = axios.create({
    baseURL: 'https://mavidev-backend-production.up.railway.app/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export default mavidev;
