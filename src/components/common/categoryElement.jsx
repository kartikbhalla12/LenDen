import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../../css/components/common/category.css';

class CategoryElement extends Component {
	state = {};

	render() {
		const { categoryTitle, categoryMessage, src } = this.props;
		return (
			<div className='category'>
				<div className='imageBox'>
					<Image
						style={{
							// maxWidth: '60px',
							// maxHeight: '60px',
							display: 'block',
							margin: 'auto',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
						src={src}
					/>
				</div>
				<div
					style={{
						margin: 'auto',
						textAlign: 'center',
						alignSelf: 'center',
					}}>
					<h3 style={{ fontFamily: 'Balsamiq Sans' }}>{categoryTitle}</h3>
					<p>{categoryMessage}</p>
				</div>
			</div>
		);
	}
}

export default CategoryElement;
