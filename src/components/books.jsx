import React, { Component } from 'react';
import Product from './product';

class Books extends Component {
	state = {};
	render() {
		return (
			<div
				className='container'
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					marginTop: '5vh',
					justifyContent: 'center',
				}}>
				<Product />
			</div>
		);
	}
}

export default Books;
