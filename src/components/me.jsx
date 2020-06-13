import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';
import Categories from './common/categories';
import _ from 'lodash';
import * as authService from '../services/authService';
import * as addressService from '../services/addressService';
import '../css/components/me.css';

class Me extends Component {
	state = {
		user: {},
	};

	componentDidMount = async () => {
		const user = await authService.getCurrentUser();
		this.setState({ user });

		const { data: address } = await addressService.getAddress(
			this.state.user.userId
		);
		this.setState({ address });
	};

	render() {
		const { user, address } = this.state;
		console.log(user, address);
		return (
			<React.Fragment>
				<div className='container'>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							margin: '3vh 0',
							flexWrap: 'wrap',
						}}>
						<Image
							src='http://placekitten.com/g/300/300'
							roundedCircle
							style={{ display: 'block', maxWidth: 200 }}
						/>
						<div style={{ margin: '5vh 5vw', textAlign: 'center' }}>
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

					<div
						style={{
							backgroundColor: 'rgba(255,255,255,0.5',
							padding: '20px',
							maxWidth: 1200,
							margin: '0 auto',
							textAlign: 'center',
						}}>
						<h2 style={{ fontFamily: 'Balsamiq Sans', fontSize: 33 }}>
							USER DETAILS
						</h2>
						<div style={{ padding: '3vh 3vw' }}>
							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center',
									margin: '10px 0',
								}}>
								<div
									style={{
										textAlign: 'right',
										fontFamily: 'Balsamiq Sans',
										fontSize: 20,
										marginRight: '10px',
										flexBasis: '40%',
									}}>
									NAME :
								</div>
								<div
									style={{
										textAlign: 'left',
									}}>
									{_.startCase(user.name)}
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center',
									margin: '10px 0',
								}}>
								<div
									style={{
										textAlign: 'right',
										fontFamily: 'Balsamiq Sans',
										fontSize: 20,
										marginRight: '10px',
										flexBasis: '40%',
									}}>
									EMAIL :
								</div>
								<div
									style={{
										textAlign: 'left',
									}}>
									{user.sub}
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center',
									margin: '10px 0',
								}}>
								<div
									style={{
										textAlign: 'right',
										fontFamily: 'Balsamiq Sans',
										fontSize: 20,
										marginRight: '10px',
										flexBasis: '40%',
									}}>
									ADDRESS :
								</div>
								<div
									style={{
										textAlign: 'left',
									}}>
									{this.state.address ? (
										`${_.startCase(
											this.state.address.housenumber
										)}, ${_.startCase(
											this.state.address.streetname
										)}, ${_.startCase(this.state.address.city)},  ${_.startCase(
											this.state.address.state
										)} -  ${_.startCase(this.state.address.postalcode)} `
									) : (
										<Button
											className='btn-log'
											variant='primary'
											onClick={() => this.props.history.push('/me/address')}>
											ADD ADDRESS
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <Categories /> */}
			</React.Fragment>
		);
	}
}

export default Me;
