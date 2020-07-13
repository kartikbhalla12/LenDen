import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/products/product`;

export function getProductInfo(id) {
	return http.get(`${apiEndPoint}/${id}`);
}
