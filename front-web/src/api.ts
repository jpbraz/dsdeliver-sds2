import axios from 'axios';

const API_URL = "https://dsdeliver-spring.herokuapp.com"

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}