import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/users/address`;

export function getAddress(id) {
	return http.get(`${apiEndPoint}/${id}`);
}
