import React from 'react';
import { Image } from 'react-bootstrap';

const NotFound = props => {
	return (
		<div className='notFoundContainer'>
			<div className='notFoundInnerContainer'>
				<Image src='images/logo.png' />
				<p>
					Oops, there's nothing here, <br />
					<span onClick={() => props.history.goBack()}>Go back? </span>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
