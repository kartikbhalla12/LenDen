import React from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import Joi from 'joi-browser';
import CommonForm from '../common/commonForm';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { logInUser, updateError, updatePassType } from './../../app/auth/login';
import { getCurrentUser } from './../../services/authService';

class Login extends CommonForm {
	state = {
		data: {
			email: '',
			password: '',
		},
	};

	schema = {
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	};

	componentWillUnmount = () => {
		this.props.updateError('');
	};

	doSubmit = async () => {
		const { data } = this.state;
		const { logInUser, location } = this.props;
		logInUser(data, location);
	};

	render() {
		if (getCurrentUser()) return <Redirect to='/' />; //TODO
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<div className='homeIconContainer'>{this.renderHomeButton()}</div>
					<Image draggable='false' src='/images/logo.png' />
					<h2>Please Sign In</h2>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						{this.renderInput('email', 'Email Address')}
						{this.renderInput('password', 'Password')}
						{this.renderAlert()}
						<Button className='btn-log' variant='none' type='submit'>
							Sign In
						</Button>
						{this.renderLoader({
							margin: '3vh auto 0 auto',
						})}
					</Form>
					<div className='separator'>New to LenDen?</div>
					<Button
						className='signButton'
						onClick={() => this.props.history.push('/signup')}
						variant='none'
						type='submit'>
						Create your LenDen account
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { error, success, loading, passType } = state.auth.login;
	return {
		error,
		success,
		loading,
		passType,
	};
};

const mapDispatchToProps = dispatch => ({
	logInUser: (data, location) => dispatch(logInUser(data, location)),
	updateError: error => dispatch(updateError(error)),
	updatePassType: type => dispatch(updatePassType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
