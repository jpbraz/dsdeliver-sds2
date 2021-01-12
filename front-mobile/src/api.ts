import axios from "axios";

const API_URL = 'https://dsdeliver-spring.herokuapp.com';
/*const API_URL = 'http://198.168.0.12:19000';*/
export function fetchOrders(){
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}