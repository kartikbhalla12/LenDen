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
						Oops, there's nothing here, <br />
						<span onClick={() => this.props.history.goBack()}>Go back? </span>
					</p>
				</div>
			</div>
		);
	}
}

export default NotFound;
