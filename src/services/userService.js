import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/users`;

export function register({ name, email, password }) {
	console.log('called');
	http.post(apiEndPoint, {
		name,
		email,
		password,
	});
}
