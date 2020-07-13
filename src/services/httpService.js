import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expectedError) {
		console.log('error is', error);
		// alert('unexpected error');
		toast.error('An unexpected error occurred!', {
			// position: 'bottom-center',
			autoClose: 10000,
			className: 'toasty',
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	return Promise.reject(error);
});

function setToken(jwt) {
	axios.defaults.headers.common['authorization'] = jwt;
}

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	setToken,
};
