import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

const slice = createSlice({
	name: 'login',
	initialState: {
		error: '',
		success: '',
		loading: false,
		passType: 'password',
	},

	reducers: {
		errorUpdated: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		loginInitiated: (state, action) => {
			state.loading = true;
		},
		loginFulfilled: (state, action) => {
			// state.loading = false;
		},
		loginFailed: (state, action) => {
			if (action.payload === 403) state.error = 'Invalid email or password';
			else state.error = action.payload;
			state.loading = false;
		},
		passTypeUpdated: (state, action) => {
			state.passType = action.payload;
		},
		userLoggedOut: (state, action) => {},
	},
});

export default slice.reducer;

const {
	errorUpdated,
	loginInitiated,
	loginFailed,
	passTypeUpdated,
} = slice.actions;

export const { loginFulfilled, userLoggedOut } = slice.actions;

export const logInUser = ({ email, password }, location) =>
	apiCallBegan({
		method: 'post',
		url: `users/login`,
		data: { email, password },
		onStart: loginInitiated.type,
		onSuccess: loginFulfilled.type,
		onError: loginFailed.type,
		location,
	});

export const updateError = error => errorUpdated(error);
export const updatePassType = type => passTypeUpdated(type);
export const logOutUser = () => userLoggedOut();
