import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/users/login`;

export function login({ email, password }) {
	return http.post(apiEndPoint, {
		email,
		password,
	});
}

export function logout() {
	localStorage.removeItem('token');
	window.location = '/';
}
