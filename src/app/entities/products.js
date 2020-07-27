import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './../api';

const mapToViewModel = (data, userId) => {
	return {
		id: data.productid,
		name: data.title,
		category: data.producttype.toLowerCase(),
		desc: data.description,
		ldc: data.ldc,
		rating: data.rating,
		src: data.image,
		wishlist: data.wishlist,
		canBarter: userId ? data.barternow : true,
	};
};

const slice = createSlice({
	name: 'products',
	initialState: {
		list: [],
		page: 0,
		limit: 5,
		showButton: false,
		loading: false,
		loadingPage: false,
		category: '',
	},
	reducers: {
		limitChanged: (products, action) => {
			products.limit = action.payload;
		},
		pageChanged: (products, action) => {
			products.page = action.payload;
		},
		productsInitiated: (products, action) => {
			if (products.list.length === 0) products.loadingPage = true;
			else products.loading = true;

			products.showButton = false;
		},
		productsReceived: (products, action) => {
			products.list = products.list.concat(
				action.payload.data.map(product =>
					mapToViewModel(product, action.payload.userId)
				)
			);

			// products.loading = false;
			// products.loadingPage = false;

			if (action.payload.data.length < products.limit)
				products.showButton = false;
			else products.showButton = true;
		},
		buttonStatusChanged: (products, action) => {
			products.showButton = action.payload;
		},
		loadingStatusChanged: (products, action) => {
			products.loading = action.payload;
			products.loadingPage = action.payload;
		},
	},
});

export default slice.reducer;

const {
	productsReceived,
	productsInitiated,
	pageChanged,
	buttonStatusChanged,
	loadingStatusChanged,
} = slice.actions;

export const getProducts = () => async (dispatch, getState) => {
	const userId = getState().auth.user.userId ? getState().auth.user.userId : '';
	let { list, page, limit, category } = getState().entities.products;

	const currPage = Math.ceil(list.length / limit) + 1;
	if (page !== currPage) await dispatch(pageChanged(currPage));

	await dispatch(
		apiCallBegan({
			method: 'post',
			url: `products/product/?page=${currPage}&limit=${limit}`,
			data: {
				userid: userId,
				categorytype: category,
			},
			onStart: productsInitiated.type,
			onSuccess: productsReceived.type,
		})
	);
	// setTimeout(() => dispatch(loadingStatusChanged(false)), 0);
	dispatch(loadingStatusChanged(false));
};

export const changeButtonStatus = value => buttonStatusChanged(value);
