import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyProducts = () => {
	return (
		<div
			style={{
				display: 'flex',
				minHeight: '85vh',
				alignItems: 'center',
				textAlign: 'center',
			}}>
			<div style={{ margin: 'auto' }}>
				<LinkContainer to='/new'>
					<Button>Add a New Product</Button>
				</LinkContainer>
			</div>
		</div>
	);
};

export default MyProducts;
