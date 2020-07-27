import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './../api';

const mapToViewModel = (data, product) => ({
	mrp: data.mrp,
	title: data.title,
	binding: data.cover,
	description: data.description,
	conditionquestion1: data.ques1,
	conditionquestion2: data.ques2,
	conditionquestion3: data.ques3,
	conditionquestion4: data.ques4,
	conditionquestion5: data.ques5,
	productid: product.id,
	productimageentity: product.imageLinks.map(name => ({ imagelink: name })),
});

const slice = createSlice({
	name: 'newProduct',
	initialState: {
		error: '',
		success: '',
		loading: false,
		preparing: false,
		category: 0,
		product: {},
	},
	reducers: {
		categoryUpdated: (state, action) => {
			state.category = action.payload;
		},
		errorUpdated: (state, action) => {
			state.error = action.payload;
		},
		successUpdated: (state, action) => {
			state.success = action.payload;
		},
		preparingUpdated: (state, action) => {
			state.preparing = action.payload;
		},

		uploadInitiated: (state, action) => {
			state.loading = true;
			state.product = {};
		},
		uploadSuccess: (state, action) => {
			const { productid, imagelinks } = action.payload.data;
			state.loading = false;
			state.product.id = productid;
			state.product.imageLinks = imagelinks;
		},
		uploadFailed: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		postInitiated: (state, action) => {
			state.loading = true;
		},

		postSuccess: (state, action) => {
			state.success = 'Successfully posted your product!';
			state.loading = false;
		},
		postFailed: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default slice.reducer;

const {
	categoryUpdated,
	errorUpdated,
	preparingUpdated,
	uploadFailed,
	uploadInitiated,
	uploadSuccess,
	postInitiated,
	postSuccess,
	postFailed,
} = slice.actions;

export const updateError = error => errorUpdated(error);
export const updateCategory = category => categoryUpdated(category);
export const prepareUpload = value => preparingUpdated(value);

const uploadImages = images => {
	const formData = new FormData();
	images.forEach(image => formData.append('image', image));

	return apiCallBegan({
		method: 'post',
		url: 'products/upload/image',
		data: formData,
		onStart: uploadInitiated.type,
		onSuccess: uploadSuccess.type,
		onError: uploadFailed.type,
	});
};

export const postBook = (data, images) => async (dispatch, getState) => {
	await dispatch(uploadImages(images));
	const userId = getState().auth.user.userId;
	const product = getState().entities.newProduct.product;

	if (product) {
		const body = mapToViewModel(data, product);
		await dispatch(
			apiCallBegan({
				method: 'post',
				url: `products/book/${userId}`,
				data: body,
				onStart: postInitiated.type,
				onSuccess: postSuccess.type,
				onError: postFailed.type,
			})
		);
	}

	if (getState().entities.newProduct.success)
		setTimeout(() => {
			window.location.replace('/my-products');
		}, 2000);
};
