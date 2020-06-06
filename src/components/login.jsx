import React, { Component } from 'react';
import '../css/components/sign.css';
import { Image, Form, Button, Alert } from 'react-bootstrap';
import Joi from 'joi-browser';

class Login extends Component {
	state = {
		data: {
			email: '',
			password: '',
		},
		error: '',
	};

	schema = {
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const error = this.validate();
		this.setState({ error });
		if (error) return;

		console.log('submitted');
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

	render() {
		const { data, error } = this.state;
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<Image src='/images/demoLogo.png' style={{ maxWidth: '150px' }} />
					<h2>Please Sign In</h2>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						<Form.Group controlId='formBasicEmail'>
							<Form.Control
								className='input'
								name='email'
								value={data.email}
								onChange={this.handleChange}
								type='email'
								placeholder='Email Address'
							/>
						</Form.Group>
						<Form.Group controlId='formBasicPassword'>
							<Form.Control
								className='input'
								name='password'
								value={data.password}
								type='password'
								placeholder='Password'
								onChange={this.handleChange}
							/>
						</Form.Group>
						{error && (
							<Alert id='error-alert' variant='danger'>
								{error}
							</Alert>
						)}
						<Button className='btn-log' variant='primary' type='submit'>
							Sign In
						</Button>
					</Form>
					<div className='separator'>New to LenDen ?</div>
					<Button
						className='signButton btn-log'
						onClick={() => this.props.history.push('/signup')}
						variant='primary'
						type='submit'>
						Create your LenDen account
					</Button>
				</div>
			</div>
		);
	}
}

export default Login;
