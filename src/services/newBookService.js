import http from './httpService';
import { getCurrentUser } from './authService';
import { api } from '../config.json';

const apiEndPoint = `${api}/image-upload`;

export default function uploadImages(body) {
	return http.post(apiEndPoint, body);
}
