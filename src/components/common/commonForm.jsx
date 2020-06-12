import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Form, Alert } from 'react-bootstrap';
import BarLoader from 'react-spinners/BarLoader';

class CommonForm extends Component {
	state = {
		data: {},
		error: '',
		success: '',
	};
	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data });
	};

	validate = () => {
		const { error } = Joi.validate(this.state.data, this.schema);
		if (error) return error.details[0].message;
		return '';
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			success: '',
			error: '',
		});
		const error = this.validate();
		this.setState({ error });
		if (error) return;

		this.doSubmit();
	};

	renderInput(name, placeholder) {
		const { data } = this.state;
		return (
			<Form.Group controlId={name}>
				<Form.Control
					className='input'
					name={name}
					type={name}
					placeholder={placeholder}
					value={data[name]}
					onChange={this.handleChange}
				/>
			</Form.Group>
		);
	}
	renderAlert = () => {
		const { error } = this.state;
		return (
			error && (
				<Alert id='error-alert' variant='danger'>
					{error}
				</Alert>
			)
		);
	};

	renderSuccessAlert = () => {
		const { success } = this.state;
		return (
			success && (
				<Alert id='error-success' variant='primary'>
					{success}
				</Alert>
			)
		);
	};

	renderLoader = () => {
		return (
			<BarLoader
				css={{
					display: 'block',
					margin: '3vh auto 0 auto',
				}}
				size={50}
				color={'#ef5350'}
				loading={this.state.loading}
			/>
		);
	};

	resetForm = () => {
		const data = {
			name: '',
			email: '',
			password: '',
		};
		this.setState({ data });
	};
}

export default CommonForm;
