import axios from 'axios';
import * as qs from 'query-string';
import {api_key} from "./api_key.js";

const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json',
    },
    params: params => {
        return qs.stringify( {...params,  api_key: api_key});
    },

    paramsSerializer: params => {
        return qs.stringify( {...params,  api_key: api_key});
    }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;
