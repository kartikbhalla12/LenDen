import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as authService from './../../services/authService';

class ProtectedRoute extends Component {
	state = {};
	render() {
		const { component: Component, render, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={(props) => {
					if (!authService.getCurrentUser())
						return (
							<Redirect
								to={{
									pathname: '/login',
									state: { from: props.location },
								}}
							/>
						);
					return Component ? <Component {...props} /> : render();
				}}
			/>
		);
	}
}

export default ProtectedRoute;
