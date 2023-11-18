import axios from "axios";

const mavidev = axios.create({
    baseURL: 'http://mavidev-backend-production.up.railway.app/',
})

export default mavidev;
