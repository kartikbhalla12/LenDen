import React from 'react';
import Main from './components/main';
import Login from './components/sign/login';
import Signup from './components/sign/signup';
import { ToastContainer, Flip } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './app/auth/user';

function App() {
	const dispatch = useDispatch();
	dispatch(getUser());

	// useEffect(() => {
	// 	dispatch(getAddress());
	// }, [dispatch]);

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
			<React.Fragment>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
					<Route path='/' component={Main} />
				</Switch>
			</React.Fragment>
		</React.Fragment>
	);
}

export default App;
