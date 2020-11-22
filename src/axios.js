import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://tinder-backend-fun.herokuapp.com'
})

export default instance;