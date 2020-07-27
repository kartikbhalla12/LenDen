import React from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import CommonForm from '../common/commonForm';
import Joi from 'joi-browser';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
	signUpUser,
	updateError,
	updateSuccess,
	updatePassType,
} from '../../app/auth/signup';
import { getCurrentUser } from './../../services/authService';

class Signup extends CommonForm {
	state = {
		data: {
			name: '',
			email: '',
			password: '',
		},
	};

	componentWillUnmount = () => {
		this.props.updateError('');
		this.props.updateSuccess('');
	};

	schema = {
		name: Joi.string().min(3).max(255).required().label('Name'),
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().min(6).max(255).required().label('Password'),
	};

	doSubmit = () => {
		const { data } = this.state;
		const { signUpUser } = this.props;
		this.setState({ loading: true });
		signUpUser(data);
	};

	render() {
		if (getCurrentUser()) return <Redirect to='/' />;
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<div className='homeIconContainer'>{this.renderHomeButton()}</div>
					<Image draggable='false' src='images/logo.png' />
					<h2>Sign Up Today!</h2>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						{this.renderInput('name', 'Name')}
						{this.renderInput('email', 'Email Address')}
						{this.renderInput('password', 'Password')}
						{this.renderAlert()}
						{this.renderSuccessAlert()}
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
const mapStateToProps = state => {
	const { error, success, loading, passType } = state.auth.signup;
	return {
		error,
		success,
		loading,
		passType,
	};
};

const mapDispatchToProps = dispatch => ({
	signUpUser: data => dispatch(signUpUser(data)),
	updateError: error => dispatch(updateError(error)),
	updateSuccess: message => dispatch(updateSuccess(message)),
	updatePassType: type => dispatch(updatePassType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
