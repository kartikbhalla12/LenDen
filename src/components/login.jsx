import React from 'react';
import '../css/components/sign.css';
import { Image, Form, Button } from 'react-bootstrap';
import Joi from 'joi-browser';
import * as authService from '../services/authService';

import CommonForm from './common/commonForm';

class Login extends CommonForm {
	state = {
		data: {
			email: '',
			password: '',
		},
		error: '',
		success: '',
		loading: false,
	};

	schema = {
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	};

	doSubmit = async () => {
		const { data } = this.state;
		this.setState({ loading: true });

		try {
			const { headers } = await authService.login(data);
			localStorage.setItem('token', headers['authorization']);
			// this.props.history.replace('/');
			window.location.replace('/');
			// this.resetForm();
		} catch (ex) {
			if (ex.response && ex.response.status === 403) {
				const error = 'Invalid email or password';
				this.setState({ error });
			}
			this.setState({ loading: false });
		}

		// this.setState({ loading: true });
		// console.log('submitted');
		// this.setState({ loading: false });
	};

	render() {
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<Image src='/images/demoLogo.png' style={{ maxWidth: '150px' }} />
					<h2>Please Sign In</h2>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						{this.renderInput('email', 'Email Address')}
						{this.renderInput('password', 'Password')}
						{this.renderAlert()}
						<Button className='btn-log' variant='primary' type='submit'>
							Sign In
						</Button>
						{this.renderLoader()}
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
