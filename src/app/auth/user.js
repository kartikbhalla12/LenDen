import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';
import { getCurrentUser, getToken } from '../../services/authService';

const mapToViewModel = data => ({
	city: data.city,
	country: data.country,
	houseNumber: data.housenumber,
	streetName: data.streetname,
	state: data.state,
	landmark: data.landmark,
	postalCode: data.postalcode,
	mobileNumber: data.mobilenumber,
});

const slice = createSlice({
	name: 'user',
	initialState: {
		userId: '',
		name: '',
		token: '',
		email: '',
		address: {},
	},
	reducers: {
		userReceivedFromToken: (user, action) => {
			const { userId, name, token, email } = action.payload;
			user.userId = userId;
			user.name = name;
			user.token = token;
			user.email = email;
		},
		addressReceived: ({ address }, action) => {
			const {
				city,
				country,
				houseNumber,
				streetName,
				state,
				landmark,
				postalCode,
				mobileNumber,
			} = mapToViewModel(action.payload.data);
			address.city = city;
			address.country = country;
			address.houseNumber = houseNumber;
			address.streetName = streetName;
			address.state = state;
			address.landmark = landmark;
			address.postalCode = postalCode;
			address.mobileNumber = mobileNumber;
		},
	},
});

export default slice.reducer;

const { userReceivedFromToken, addressReceived } = slice.actions;

export const getUser = () => dispatch => {
	const user = getCurrentUser();
	const token = getToken();
	if (user)
		dispatch(
			userReceivedFromToken({
				userId: user.userId,
				name: user.name,
				email: user.sub,
				token,
			})
		);
};

export const getAddress = () => (dispatch, getState) => {
	const userId = getState().auth.user.userId;
	if (userId)
		dispatch(
			apiCallBegan({
				method: 'get',
				url: `users/address/${userId}`,
				onSuccess: addressReceived.type,
			})
		);
};
