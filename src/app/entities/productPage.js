import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './../api';

const mapToViewModel = (data, userId) => {
	const images = data.images.map(img => img.image);

	return {
		id: data.productid,
		name: data.title,
		category: data.producttype,
		src: images,
		rating: data.rating,
		ldc: data.ldc,
		desc: data.description,
		wishlist: data.wishlist,
		canBarter: userId ? data.barternow : true,
	};
};

const slice = createSlice({
	name: 'productPage',
	initialState: {
		loadingPage: true,
		productFound: true,
		product: {
			id: '',
			name: '',
			category: '',
			src: [],
			rating: 0,
			ldc: 0,
			wishlist: true,
			desc: '',
		},
	},

	reducers: {
		productInitiated: (state, action) => {
			state.loadingPage = true;
		},
		productReceived: (state, action) => {
			state.product = mapToViewModel(
				action.payload.data,
				action.payload.userId
			);
			state.productFound = true;
			state.loadingPage = false;
		},
		productFailed: (state, action) => {
			state.productFound = false;
			state.loadingPage = false;
		},
		loadingPageChanged: (state, action) => {
			state.loadingPage = action.payload;
		},
	},
});

export default slice.reducer;

const {
	productReceived,
	productInitiated,
	productFailed,
	loadingPageChanged,
} = slice.actions;

export const setLoadingPage = status => loadingPageChanged(status);
export const getProduct = id => (dispatch, getState) => {
	const userId = getState().auth.user.userId ? getState().auth.user.userId : '';
	const { id: idInState } = getState().entities.productPage.product;
	if (idInState === id) return dispatch(setLoadingPage(false));

	dispatch(
		apiCallBegan({
			method: 'post',
			url: `products/product/${id}`,
			data: {
				userid: userId,
			},
			onStart: productInitiated.type,
			onSuccess: productReceived.type,
			onError: productFailed.type,
		})
	);
};
