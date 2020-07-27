import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import apiMiddleware from './middleware/apiMiddleware';
import postLogin from './middleware/postLogin';
import logout from './middleware/logout';

export default configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), apiMiddleware, postLogin, logout],
});
