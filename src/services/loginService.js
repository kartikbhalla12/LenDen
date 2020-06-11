import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/users/login`;

export function register({ email, password }) {
	console.log('called');
	http.post(apiEndPoint, {
		email,
		password,
	});
}
