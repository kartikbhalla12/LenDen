import React, { Component } from 'react';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Me from './me';

class Main extends Component {
	state = {
		menuOpen: false,
	};
	render() {
		return (
			<React.Fragment>
				<SideNav
					menuOpen={this.state.menuOpen}
					onStateChange={this.handleStateChange}
					onUserClick={this.handleUserClick}
					onNavLinkClick={this.handleNavLinkClick}
				/>
				<MainNav
					onBarClick={this.handleBarClick}
					onUserClick={this.handleUserClick}
				/>
				<Switch>
					<Route path='/me' component={Me} />
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
