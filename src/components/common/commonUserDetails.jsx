import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommonUserDetails extends Component {
	state = {};

	renderDetail = (detailName, detailValue) => {
		return (
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
					{`${detailName} :`}
				</div>
				<div
					style={{
						textAlign: 'left',
						fontSize: 17,
					}}>
					{detailValue}
				</div>
			</div>
		);
	};

	renderButton = (btnName) => {
		return (
			<Button
				className='btn-log'
				variant='primary'
				onClick={() => this.props.history.push('/me/address')}>
				{btnName}
			</Button>
		);
	};

	renderTextAddress = (address) => {
		return `${_.startCase(address.housenumber)}, ${_.startCase(
			address.streetname
		)}, ${_.startCase(address.city)},  ${_.startCase(
			address.state
		)} -  ${_.startCase(address.postalcode)} `;
	};

	renderUserLinks = (ico, linkName, style) => {
		return (
			<div
				style={{
					backgroundColor: 'rgba(33,33,33,0.2)',
					padding: '0.75rem',
					fontSize: 20,
					textTransform: 'uppercase',
					fontFamily: 'Balsamiq Sans',
					...style,
				}}>
				<FontAwesomeIcon
					icon={ico}
					style={{ marginRight: '10px', color: 'rgba(33,33,33,0.8)' }}
				/>
				{linkName}
			</div>
		);
	};
}

export default CommonUserDetails;
