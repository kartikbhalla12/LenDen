import React, { Component } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/scss/main.scss';
// import './App.css';
import './scss/main.scss';
import './css/components/common/inputs.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Signup from './components/signup';

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<ToastContainer
					// position='bottom-center'
					transition={Flip}
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					className='toastContainer'
				/>
				<div>
					<Switch>
						<Route path='/login' component={Login} />
						<Route path='/signup' component={Signup} />
						<Route path='/' component={Main} />
					</Switch>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
