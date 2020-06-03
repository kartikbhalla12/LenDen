import React, { Component } from 'react';
import Nav from './common/mainNav';
import SideNav from './common/sideNav';

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
