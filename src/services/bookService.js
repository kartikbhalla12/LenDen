import http from './httpService';
import { api } from '../config.json';
import { getCurrentUser } from './authService';

const apiEndPoint = `${api}/products/product`;
const user = getCurrentUser();
let userId = user ? user.userId : null;

export function getBooks(page, limit) {
	return http.post(`${apiEndPoint}/?page=${page}&limit=${limit}`, {
		userid: userId,
	});
}
