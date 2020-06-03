import React, { Component } from 'react';
import './App.css';
import Nav from './components/mainNav';
import SideNav from './components/sideNav';

class App extends Component {
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

export default App;
