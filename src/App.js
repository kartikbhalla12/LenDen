import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Signup from './components/signup';

class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
					<Route path='/' component={Main} />
				</Switch>
			</div>
		);
	}
}

export default App;
