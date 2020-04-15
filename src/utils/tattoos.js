import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/',
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
