import React, { Component } from 'react';
import Nav from './common/mainNav';
import SideNav from './common/sideNav';
import { Switch, Route } from 'react-router-dom';
import Home from './home';

class Main extends Component {
	state = {
		menuOpen: false,
	};
	render() {
		return (
			<div>
				<SideNav
					menuOpen={this.state.menuOpen}
					onStateChange={this.handleStateChange}
				/>
				<Nav handleBarClick={this.onBarClick} />
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</div>
		);
	}
	onBarClick = () => {
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
