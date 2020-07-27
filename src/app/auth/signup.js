import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './../api';

const slice = createSlice({
	name: 'signup',
	initialState: {
		error: '',
		success: '',
		loading: false,
		passType: 'password',
	},
	reducers: {
		errorUpdated: (state, action) => {
			state.error = action.payload;
		},
		successUpdated: (state, action) => {
			state.success = action.payload;
		},
		passTypeUpdated: (state, action) => {
			state.passType = action.payload;
		},

		signupInitiated: (state, action) => {
			state.loading = true;
		},
		signupFailed: (state, action) => {
			if (action.payload === 400) state.error = 'User already registered!';
			state.loading = false;
		},
		signupFulfilled: (state, action) => {
			state.loading = false;
			state.success = 'Successfully registered!';
		},
	},
});

export default slice.reducer;

export const {
	errorUpdated,
	successUpdated,
	passTypeUpdated,
	signupInitiated,
	signupFailed,
	signupFulfilled,
} = slice.actions;

export const signUpUser = ({ name, email, password }) =>
	apiCallBegan({
		method: 'post',
		url: 'users',
		onStart: signupInitiated.type,
		onSuccess: signupFulfilled.type,
		onError: signupFailed.type,
		data: { name, email, password },
	});

export const updateError = error => errorUpdated(error);
export const updateSuccess = error => successUpdated(error);
export const updatePassType = type => passTypeUpdated(type);
