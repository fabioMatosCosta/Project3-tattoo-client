import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
    // withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})

export const signup = (user) => {
        return axios({
            method:'POST',
            url: 'signup',
            data: qs.stringify(user)
        })
}

export const login = (user) => {
    return axios({
        method:'POST',
        url: 'login',
        // withCredentials: true,
        data: qs.stringify(user)
    })
}

export const logout = (user) => {
    return axios({
        method:'POST',
        url: 'logout',
    })
}

export const setUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
}

export const verifyRes = (res) => {
    if(res.data.hasOwnProperty("message")) {

        return res.data
    } else {
        setUser(res.data);
        return {message: ""}
    }
}

export const getUser = (user) => {
    return JSON.parse(window.localStorage.getItem('user'));
}

export const remUser = (user) => {
    window.localStorage.removeItem('user');
}