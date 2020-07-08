import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/products/book`;

export function postBook(userId, body) {
	return http.post(`${apiEndPoint}/${userId}`, body);
}
