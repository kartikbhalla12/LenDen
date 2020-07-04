import http from './httpService';
import { api } from '../config.json';

const apiEndPoint = `${api}/products/upload/image`;

export default async function uploadImages(pictures) {
	const fd = new FormData();
	pictures.forEach(pic => fd.append('image', pic));

	try {
		const res = await http.post(apiEndPoint, fd, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		return res;
	} catch (ex) {
		console.log(ex);
	}
}
