import Axios from 'axios';
const URL = process.env.REACT_APP_DOMAIN

const axios = Axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})

export const tattooList = () => {
    return axios({
        method:'GET',
        url: 'tattoos',
    })
    .then((response)=>{
        setTattoos(response.data)
    })
}

export const setTattoos = (tattoos) => {
    window.localStorage.setItem('tattoos', JSON.stringify(tattoos));
}

export const getTattoos = () => {
    tattooList();
    return JSON.parse(window.localStorage.getItem('tattoos'));
}
