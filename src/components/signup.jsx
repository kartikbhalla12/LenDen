import React from 'react';
import '../css/components/sign.css';
import { Image, Form, Button } from 'react-bootstrap';
import CommonForm from './common/commonForm';
import Joi from 'joi-browser';

class Signup extends CommonForm {
	state = {
		data: {
			name: '',
			email: '',
			password: '',
		},
		error: '',
		loading: false,
	};

	schema = {
		name: Joi.string().min(3).max(255).required().label('Name'),
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	};

	doSubmit = () => {
		this.setState({ loading: true });
		console.log('submitted');
		this.props.history.push('/');
		this.setState({ loading: false });
	};

	render() {
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<Image src='/images/demoLogo.png' style={{ maxWidth: '150px' }} />
					<h2>Sign Up Today!</h2>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						{this.renderInput('name', 'Name')}
						{this.renderInput('email', 'Email Address')}
						{this.renderInput('password', 'Password')}
						{this.renderAlert()}
						<Button className='btn-log' variant='dark' type='submit'>
							Sign Up
						</Button>
						{this.renderLoader()}
					</Form>
					<div className='separator'>Already have an account? </div>
					<Button
						className='signButton btn-log'
						onClick={() => this.props.history.push('/login')}
						variant='dark'
						type='submit'>
						Log In Here!
					</Button>
				</div>
			</div>
		);
	}
}

export default Signup;
