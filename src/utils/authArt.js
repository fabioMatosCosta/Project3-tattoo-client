import Axios from 'axios';
import qs from 'qs';
const URL = process.env.REACT_APP_DOMAIN

const axios = Axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})

export const signupArt = (art) => {
        return axios({
            method:'POST',
            url: 'artist/signup',
            data: qs.stringify(art)
        })
}

export const loginArt = (art) => {
    return axios({
        method:'POST',
        url: 'artist/login',
        data: qs.stringify(art),
    })
    .then((response)=> {
        setArt(response.data)
    })
}

export const logoutArt = () => {
    return axios({
        method:'GET',
        url: 'logout',
    })
    .then(()=> {
        remArt();
    })
}

export const profileArt = () => {
    return axios({
        method:'GET',
        url: 'artist/profile',
    })
    .then((response)=>{
        setArt(response.data)
    })
}

export const addPicArt = () => {
    return axios({
        method:'POST',
        url: 'artist/addPic',
    })
}

export const setArt = (art) => {
    window.localStorage.setItem('artist', JSON.stringify(art));
}


export const getArt = () => {
    return JSON.parse(window.localStorage.getItem('artist'));
}

export const remArt = () => {
    window.localStorage.removeItem('artist');
}

export const deleteTattoo = (id) => {
    return axios({
        method:'GET',
        url: `artist/deleteTattoo/${id}`
    })
}