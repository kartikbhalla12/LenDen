import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
class UserDetails extends Component {
	state = {};
	render() {
		const { user, address } = this.props;
		return (
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
							}}>
							ADDRESS :
						</div>
						<div
							style={{
								textAlign: 'left',
							}}>
							{address ? (
								`${_.startCase(address.housenumber)}, ${_.startCase(
									address.streetname
								)}, ${_.startCase(address.city)},  ${_.startCase(
									address.state
								)} -  ${_.startCase(address.postalcode)} `
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
					{address && (
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								alignItems: 'center',
								margin: '30px 0 10px 0',
							}}>
							<div
								style={{
									textAlign: 'center',

									fontSize: 20,

									flexBasis: '100%',
								}}>
								<Button
									className='btn-log'
									variant='primary'
									style={{ textAlign: 'center' }}
									onClick={() => this.props.history.push('/me/address')}>
									UPDATE ADDRESS
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default UserDetails;
