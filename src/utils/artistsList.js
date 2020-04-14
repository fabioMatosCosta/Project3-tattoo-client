import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
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

export const getArtistList= () => {
    artistList();
    return JSON.parse(window.localStorage.getItem('artistList'));
}
