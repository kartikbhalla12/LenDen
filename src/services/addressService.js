import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/users/address`;

export function getAddress(id) {
	return http.get(`${apiEndPoint}/${id}`);
}

export function postAddress(id, data) {
	return http.post(`${apiEndPoint}/${id}`, data);
}

export function putAddress(id, data) {
	return http.put(`${apiEndPoint}/${id}`, data);
}
