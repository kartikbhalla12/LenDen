import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	state = {};
	render() {
		return (
			<div className='notFoundContainer'>
				<div className='notFoundInnerContainer'>
					<Image src='images/logo.png' />
					<p>
						There's nothing here, Go back to <Link to='/'>Home</Link> ?
					</p>
				</div>
			</div>
		);
	}
}

export default NotFound;
