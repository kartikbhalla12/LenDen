import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';

import _ from 'lodash';
import * as authService from '../services/authService';
import * as addressService from '../services/addressService';
import '../css/components/me.css';
import UserDetails from './userDetails';
import { Route } from 'react-router-dom';
import AddressForm from './addressForm';

class Me extends Component {
	state = {
		user: {},
	};

	componentDidMount = async () => {
		const user = await authService.getCurrentUser();
		this.setState({ user });

		try {
			const { data: address } = await addressService.getAddress(
				this.state.user.userId
			);
			this.setState({ address });
		} catch (ex) {}
	};

	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				<div className='container'>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							margin: '3vh 0',
							flexWrap: 'wrap',
						}}>
						<Image
							src='http://placekitten.com/g/300/300'
							roundedCircle
							style={{ display: 'block', maxWidth: 200 }}
						/>
						<div style={{ margin: '1rem', textAlign: 'center' }}>
							<h3 id='username'>Hey, {_.startCase(user.name)}</h3>
							<Button
								style={{ marginTop: '1vh' }}
								className='btn-log'
								variant='primary'
								onClick={authService.logout}>
								SIGN OUT
							</Button>
						</div>
					</div>
					<Route
						path='/me'
						exact
						render={(props) => (
							<UserDetails
								user={this.state.user}
								address={this.state.address}
								{...props}
							/>
						)}
					/>
					<Route
						path='/me/address'
						render={(props) => (
							<AddressForm user={this.state.user} {...props} />
						)}
					/>
				</div>

				{/* <Categories /> */}
			</React.Fragment>
		);
	}
}

export default Me;
