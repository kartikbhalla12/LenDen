import React from 'react';
// import '../css/components/sign.css';
import { Image, Form, Button } from 'react-bootstrap';
import CommonForm from './common/commonForm';
import Joi from 'joi-browser';
import * as userService from '../services/userService';
import * as authService from '../services/authService';
import { Redirect } from 'react-router-dom';

class Signup extends CommonForm {
	state = {
		data: {
			name: '',
			email: '',
			password: '',
		},
		error: '',
		success: '',
		loading: false,
	};

	schema = {
		name: Joi.string().min(3).max(255).required().label('Name'),
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().min(6).max(255).required().label('Password'),
	};

	doSubmit = async () => {
		const { data } = this.state;
		this.setState({ loading: true });

		try {
			await userService.register(data);
			this.setState({ loading: false });
			this.resetForm();

			const success = 'Successfully registered!';
			this.setState({ success });
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const error = 'User already registered!';
				this.setState({ error });
			}
			this.setState({ loading: false });
		}
	};

	render() {
		if (authService.getCurrentUser()) return <Redirect to='/' />;
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<Image src='images/logo.png' />
					<h2>Sign Up Today!</h2>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						{this.renderInput('name', 'Name')}
						{this.renderInput('email', 'Email Address')}
						{this.renderInput('password', 'Password')}
						{this.renderAlert('error-alert')}
						{this.renderSuccessAlert('error-success')}
						<Button variant='none' type='submit'>
							Sign Up
						</Button>
						{this.renderLoader({
							margin: '3vh auto 0 auto',
						})}
					</Form>
					<div className='separator'>Already have an account? </div>
					<Button
						className='signButton'
						onClick={() => this.props.history.push('/login')}
						variant='none'
						type='submit'>
						Log In Here!
					</Button>
				</div>
			</div>
		);
	}
}

export default Signup;
