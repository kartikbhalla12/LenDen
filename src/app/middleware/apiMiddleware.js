import http from '../../services/httpService';
import { api } from '../../config.json';
import { apiCallBegan, apiCallFailed, apiCallSuccess } from '../api';

const apiMiddleware = ({ dispatch, getState }) => next => async action => {
	if (action.type !== apiCallBegan.type) return next(action);

	const userId = getState().auth.user.userId;
	const {
		method = 'get',
		url,
		data,
		onSuccess,
		onError,
		onStart,
		location,
	} = action.payload;

	if (onStart) dispatch({ type: onStart });
	next(action);

	try {
		const res = await http[method](`${api}/${url}`, data);
		dispatch(
			apiCallSuccess({ data: res.data, headers: res.headers, location, userId })
		);
		if (onSuccess)
			dispatch({
				type: onSuccess,
				payload: { data: res.data, headers: res.headers, location, userId },
			});
	} catch (ex) {
		if (ex.response) {
			dispatch(apiCallFailed(ex.response.status));
			if (onError) dispatch({ type: onError, payload: ex.response.status });
		} else {
			dispatch(apiCallFailed(ex.message));
			if (onError) dispatch({ type: onError, payload: ex.message });
		}
	}
};

export default apiMiddleware;
