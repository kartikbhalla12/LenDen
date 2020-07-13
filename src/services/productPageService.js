import http from './httpService';
import { api } from '../config.json';
import { getCurrentUser } from './authService';

const apiEndPoint = `${api}/products/product`;
const user = getCurrentUser();

export function getProductInfo(id) {
	return http.post(`${apiEndPoint}/${id}`, {
		userId: user.userId,
	});
}
