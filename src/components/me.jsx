import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';
import Categories from './home/categories';
import '../css/components/me.css';

class Me extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div style={{ marginTop: '5vh' }} className='container'>
					<Image
						src='http://placekitten.com/g/300/300'
						roundedCircle
						style={{ display: 'block', margin: '0 auto' }}
					/>
					<div style={{ margin: '5vh 0', textAlign: 'center' }}>
						<h3>Hey, Kartik Bhalla!</h3>
						<Button
							style={{ marginTop: '1vh' }}
							className='btn-log'
							variant='primary'
							type='submit'>
							SIGN OUT
						</Button>
					</div>
				</div>

				<Categories />
			</React.Fragment>
		);
	}
}

export default Me;
