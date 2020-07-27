import http from './httpService';
import jwtDecode from 'jwt-decode';

const tokenKey = 'token';
http.setToken(getToken());

export function logout() {
	localStorage.removeItem(tokenKey);
	window.location = '/';
}

export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem(tokenKey);
		return jwtDecode(jwt);
	} catch (ex) {
		return null;
	}
}

export function setToken(token) {
	localStorage.setItem(tokenKey, token);
}

export function getToken() {
	return localStorage.getItem(tokenKey);
}
