import Axios from 'axios';
const URL = process.env.REACT_APP_DOMAIN

const axios = Axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})

export const artistList = () => {
    return axios({
        method:'GET',
        url: 'artist/list',
    })
    .then((response)=>{
        setArtistList(response.data)
    })
}

export const setArtistList = (artist) => {
    window.localStorage.setItem('artistList', JSON.stringify(artist));
}

export const getArtistList = () => {
    artistList();
    return JSON.parse(window.localStorage.getItem('artistList'));
}
