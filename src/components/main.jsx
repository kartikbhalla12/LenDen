import React, { Component } from 'react';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './common/protectedRoute';
import Home from './home';
import Me from './me';
import Books from './books';
import * as authService from '../services/authService';

class Main extends Component {
	state = {
		menuOpen: false,
	};

	componentDidMount = async () => {
		const user = await authService.getCurrentUser();
		this.setState({ user });
	};

	render() {
		const { user, menuOpen } = this.state;
		return (
			<React.Fragment>
				<SideNav
					menuOpen={menuOpen}
					onStateChange={this.handleStateChange}
					onUserClick={this.handleUserClick}
					onNavLinkClick={this.handleNavLinkClick}
					user={user}
				/>
				<MainNav
					onBarClick={this.handleBarClick}
					onUserClick={this.handleUserClick}
					user={user}
				/>
				<Switch>
					<Route path='/books' component={Books} />
					<ProtectedRoute path='/me' component={Me} />
					<Route path='/' component={Home} />
				</Switch>
			</React.Fragment>
		);
	}
	handleBarClick = () => {
		this.setState({
			menuOpen: true,
		});
	};

	handleStateChange = (state) => {
		this.setState({
			menuOpen: state.isOpen,
		});
	};

	handleUserClick = () => {
		this.setState({
			menuOpen: false,
		});
		this.props.history.push('/me');
	};
	handleNavLinkClick = () => {
		this.setState({
			menuOpen: false,
		});
	};
}

export default Main;
