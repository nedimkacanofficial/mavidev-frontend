import axios from "axios";

const mavidev = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export default mavidev;