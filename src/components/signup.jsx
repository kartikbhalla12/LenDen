import React, { Component } from 'react';
import '../css/components/sign.css';
import { Image, Form, Button } from 'react-bootstrap';

class Signup extends Component {
	state = {};
	render() {
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<Image src='/images/demoLogo.png' style={{ maxWidth: '150px' }} />
					<h2>Sign Up Today!</h2>
					<Form className='form'>
						<Form.Group controlId='formName'>
							<Form.Control type='name' placeholder='Name' />
						</Form.Group>
						<Form.Group controlId='formBasicEmail'>
							<Form.Control type='email' placeholder='Email Address' />
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Sign Up
						</Button>
					</Form>
					<div class='separator'>Already have an account? </div>
					<Button className='signupButton' variant='primary' type='submit'>
						Log In Here!
					</Button>
				</div>
			</div>
		);
	}
}

export default Signup;
