import React from 'react';
import '../css/components/sign.css';
import { Image, Form, Button } from 'react-bootstrap';
import Joi from 'joi-browser';

import CommonForm from './common/commonForm';

class Login extends CommonForm {
	state = {
		data: {
			email: '',
			password: '',
		},
		error: '',
		loading: false,
	};

	schema = {
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	};

	doSubmit = () => {
		this.setState({ loading: true });
		console.log('submitted');
		this.props.history.push('/');
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
