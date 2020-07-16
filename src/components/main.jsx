import React, { Component } from 'react';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './common/protectedRoute';
import Home from './home';
import Me from './me';
import * as authService from '../services/authService';
import ProductPage from './productPage/productPage';
import NotFound from './common/notFound';
import NewProduct from './newProduct/newProduct';
import Products from './product/products';

class Main extends Component {
	state = {
		menuOpen: false,
	};

	componentDidMount = async () => {
		const user = await authService.getCurrentUser();
		this.setState({ user });
	};

	handleBarter = id => {
		console.log('heh' + id);
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
					onSwipeLeft={this.handleSwipeLeft}
					user={user}
				/>
				<MainNav
					onBarClick={this.handleBarClick}
					onUserClick={this.handleUserClick}
					user={user}
				/>
				<Switch>
					<Route
						path='/books/:id'
						render={props => (
							<ProductPage
								category='books'
								onBarter={this.handleBarter}
								{...props}
							/>
						)}
					/>
					<Route
						path='/books'
						render={props => (
							<Products onBarter={this.handleBarter} {...props} />
						)}
					/>
					<ProtectedRoute path='/new' exact component={NewProduct} />
					<Route path='/not-found' component={NotFound} />
					<ProtectedRoute path='/me' component={Me} />
					<Route path='/' exact component={Home} />
					<Redirect to='/not-found' />
				</Switch>
			</React.Fragment>
		);
	}
	handleBarClick = () => {
		this.setState({
			menuOpen: true,
		});
	};

	handleStateChange = state => {
		this.setState({
			menuOpen: state.isOpen,
		});
	};

	handleSwipeLeft = () => {
		this.setState({
			menuOpen: false,
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
