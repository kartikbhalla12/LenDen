import { setToken } from '../../services/authService';
import { loginFulfilled } from '../auth/login';

const postLogin = ({ dispatch, getState }) => next => action => {
	if (action.type !== loginFulfilled.type) return next(action);

	const { location } = action.payload;
	location.state
		? window.location.replace(location.state.from.pathname)
		: window.location.replace('/');

	next(action);
	setToken(action.payload.headers.authorization);
};

export default postLogin;
