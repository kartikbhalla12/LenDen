import React, { Component } from 'react';
import '../css/components/sign.css';
import { Image, Form, Button } from 'react-bootstrap';

class Login extends Component {
	state = {};
	render() {
		return (
			<div className='mainContainer'>
				<div className='formBox'>
					<Image src='/images/demoLogo.png' style={{ maxWidth: '150px' }} />
					<h2>Please Sign In</h2>
					<Form className='form'>
						<Form.Group controlId='formBasicEmail'>
							<Form.Control type='email' placeholder='Email Address' />
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Sign In
						</Button>
					</Form>
					<div className='separator'>New to LenDen ?</div>
					<Button className='signButton' onClick={() => this.props.history.push('/signup') } variant='primary' type='submit'>
						Create your LenDen account
					</Button>
				</div>
			</div>
		);
	}
}

export default Login;
