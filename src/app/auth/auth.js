import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import login from './login';
import signup from './signup';

export default combineReducers({
	user,
	login,
	signup,
});
