import React, { Component } from 'react';
import CommonForm from './common/commonForm';
import Joi from 'joi-browser';
import { Image, Form, Button, Row, Col } from 'react-bootstrap';
import * as addressService from '../services/addressService';
import * as authService from '../services/authService';
import _ from 'lodash';
import '../css/components/addressForm.css';

class AddressForm extends CommonForm {
	state = {
		data: {
			houseNumber: '',
			streetName: '',
			state: '',
			city: '',
			postalCode: '',
			landmark: '',
			country: '',
			mobileNumber: '',
		},
		error: '',
		success: '',
		loading: false,
		addressExist: false,
	};

	componentDidMount = async () => {
		const user = await authService.getCurrentUser();
		this.setState({ user });
		try {
			const { data: address } = await addressService.getAddress(user.userId);
			if (address) {
				this.setState({ addressExist: true });
				this.populateData(address);
			}
		} catch (ex) {}
	};

	schema = {
		houseNumber: Joi.string().required().label('House Number'),
		streetName: Joi.string().required().label('Street'),
		state: Joi.string().required().label('State'),
		city: Joi.string().required().label('City'),
		postalCode: Joi.number().required().label('Postal Code'),
		landmark: Joi.string().optional().allow('').label('Landmark'),
		country: Joi.string().required().label('Country'),
		mobileNumber: Joi.number().required().label('Mobile Number'),
	};

	doSubmit = async () => {
		const { data, user } = this.state;
		this.setState({ loading: true });
		try {
			if (!this.state.addressExist) {
				await addressService.postAddress(
					user.userId,
					_.mapKeys(data, (value, key) => _.toLower(key))
				);
			} else {
				await addressService.putAddress(
					user.userId,
					_.mapKeys(data, (value, key) => _.toLower(key))
				);
			}

			window.location.replace('/me');
			this.resetForm();
		} catch (ex) {
			console.log(ex);
			this.setState({ loading: false });
		}
	};

	populateData = ({
		housenumber,
		streetname,
		postalcode,
		mobilenumber,
		...rest
	}) => {
		this.setState({
			data: {
				houseNumber: housenumber,
				streetName: streetname,
				postalCode: postalcode,
				mobileNumber: mobilenumber,
				...rest,
			},
		});
	};

	render() {
		return (
			<div
				style={{ width: '80vw', margin: '0 auto 5vh auto', maxWidth: '800px' }}>
				<h2
					style={{
						marginTop: '4vh',
						fontSize: '25px',
						textAlign: 'center',
						fontFamily: 'Balsamiq Sans',
					}}>
					{this.state.addressExist ? 'Update Address' : 'Add Address'}
				</h2>
				<Form noValidate className='form' onSubmit={this.handleSubmit}>
					<Row>
						<Col md={5}>{this.renderInput('houseNumber', 'House Number')}</Col>
						<Col md={7}>{this.renderInput('streetName', 'Street')}</Col>
					</Row>
					<Row>
						<Col md={4}>{this.renderInput('state', 'State')}</Col>
						<Col md={4}>{this.renderInput('city', 'City')}</Col>
						<Col md={4}>{this.renderInput('postalCode', 'Postal Code')}</Col>
					</Row>
					<Row>
						<Col md={6}>{this.renderInput('landmark', 'Landmark')}</Col>
						<Col md={6}>{this.renderInput('country', 'Country')}</Col>
					</Row>

					{this.renderInput('mobileNumber', 'Mobile Number')}
					{this.renderAlert('address-error')}

					<Button className='btn-log' variant='primary' type='submit'>
						Submit
					</Button>
					{this.renderLoader()}
				</Form>
			</div>
		);
	}
}

export default AddressForm;
