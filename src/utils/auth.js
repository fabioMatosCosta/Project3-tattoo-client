import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
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
        data: qs.stringify(user),
        withCredentials: true
    })
    .then((response)=> {
        setUser(response.data)
    })
}

export const logout = () => {
    return axios({
        method:'GET',
        url: 'logout',
    })
    .then(()=> {
        remUser();
    })
}

export const profile = () => {
    return axios({
        method:'GET',
        url: 'user/profile',
    })
    .then((response)=>{
        setUser(response.data)
    })
}

export const addPic = () => {
    return axios({
        method:'POST',
        url: 'user/addPic',
    })
}

export const setUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
}


export const getUser = (user) => {
    return JSON.parse(window.localStorage.getItem('user'));
}

export const remUser = () => {
    window.localStorage.removeItem('user');
}

export const remTattoos = () => {
    window.localStorage.removeItem('tattoos');
}