import React, { Component } from 'react';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import { Switch, Route } from 'react-router-dom';
import Home from './home';

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
				/>
				<MainNav onBarClick={this.handleBarClick} />
				<Switch>
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
}

export default Main;
