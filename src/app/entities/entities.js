import { combineReducers } from '@reduxjs/toolkit';
import { reducer as burgerMenu } from 'redux-burger-menu';
import newProduct from './newProduct';
import products from './products';
import common from './common';
import productPage from './productPage';

export default combineReducers({
	common,
	burgerMenu,
	newProduct,
	products,
	productPage,
});
