import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/products/books`;

export function getBooks() {
	return http.get(apiEndPoint);
}
