import { combineReducers } from '@reduxjs/toolkit';
import entities from './entities/entities';
import auth from './auth/auth';

export default combineReducers({
	entities,
	auth,
});
