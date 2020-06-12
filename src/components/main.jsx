import React, { Component } from 'react';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';
import Me from './me';
import Books from './books';
import jwtDecode from 'jwt-decode';
import * as authService from '../services/authService';

class Main extends Component {
	state = {
		menuOpen: false,
	};

	componentDidMount = () => {
		const user = authService.getCurrentUser();
		this.setState({ user });
	};

	render() {
		return (
			<React.Fragment>
				<SideNav
					menuOpen={this.state.menuOpen}
					onStateChange={this.handleStateChange}
					onUserClick={this.handleUserClick}
					onNavLinkClick={this.handleNavLinkClick}
					user={this.state.user}
				/>
				<MainNav
					onBarClick={this.handleBarClick}
					onUserClick={this.handleUserClick}
					user={this.state.user}
				/>
				<Switch>
					<Route path='/books' component={Books} />
					<Route path='/me' component={Me} />
					{/* {this.state.user ? (
						<Route path='/me' component={Me} />
					) : (
						<Redirect from='/me' to='/login' />
					)} */}
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
