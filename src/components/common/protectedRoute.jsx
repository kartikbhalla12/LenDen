import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as authService from './../../services/authService';

class ProtectedRoute extends Component {
	state = {};
	render() {
		const { path, component: Component, render } = this.props;
		return (
			<Route
				path={path}
				render={(props) => {
					if (!authService.getCurrentUser()) return <Redirect to='/login' />;
					return Component ? <Component {...props} /> : render();
				}}
			/>
		);
	}
}

export default ProtectedRoute;
