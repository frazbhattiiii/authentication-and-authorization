import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

const axiosInstance = axios.create({})

const get = (url, params = {}, headers = {}) => {
    return axiosInstance({
        method: 'GET',
        url: url,
        params: params,
        headers: headers
    })
}

const post = (url, data, params = {}, headers = {}) => {
    return axiosInstance({
        method: 'POST',
        url: url,
        data: data ? data : null,
        params: params,
        headers: headers
    })
}

const patch = (url, data, params = {}, headers = {}) => {
    return axiosInstance({
        method: 'PATCH',
        url: url,
        data: data ? data : null,
        params: params,
        headers: headers
    })
}

const del = (url, data, params = {}, headers = {}) => {
    return axiosInstance({
        method: 'DELETE',
        url: url,
        data: data ? data : null,
        params: params,
        headers: headers
    })
}

const put = (url, data, params = {}, headers = {}) => {
    return axiosInstance({
        method: 'PUT',
        url: url,
        data: data ? data : null,
        params: params,
        headers: headers
    })
}

export default {
    get,
    post,
    patch,
    del,
    put
}