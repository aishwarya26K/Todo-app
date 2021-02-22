import axios from "axios"

//base url to make requests to the quotes db

const instance = axios.create({
    baseURL:"https://quotes.rest"
})

export default instance;