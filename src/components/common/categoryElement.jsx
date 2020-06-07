import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../../css/components/common/category.css';

class CategoryElement extends Component {
	state = {};

	render() {
		const { categoryTitle, categoryMessage, src } = this.props;
		return (
			<div
				className='category'
				style={
					{
						// height: '120px',
						// width: '40vw',
						// maxWidth: '360px',
						// backgroundColor: 'rgba(0,0,0,0.06)',
						// padding: '.5rem',
						// display: 'flex',
						// margin: '0.4rem',
					}
				}>
				<div
					className='imageBox'
					style={
						{
							// minWidth: '80px',
							// height: '80px',
							// position: 'relative',
							// backgroundColor: 'rgba(0,0,0, .05)',
							// borderRadius: '50%',
							// margin: 'auto 0',
						}
					}>
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
