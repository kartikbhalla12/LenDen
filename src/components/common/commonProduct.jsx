import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWallet } from '@fortawesome/free-solid-svg-icons';

class CommonProduct extends Component {
	state = {
		color: '',
	};

	renderRating(rating) {
		return (
			<div style={{ position: 'absolute', top: '10px', right: '15px' }}>
				<StarRating
					// style={{ position: 'absolute' }}
					name='rate2'
					editing={false}
					renderStarIcon={() => (
						<FontAwesomeIcon
							icon={faStar}
							style={{ marginLeft: '5px', fontSize: '19px' }}
						/>
					)}
					starCount={5}
					value={rating}
					starColor='#ef5350'
					emptyStarColor='#fff'
				/>
			</div>
		);
	}

	renderLdc(value) {
		return (
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					padding: '5px 10px',
					backgroundColor: 'rgba(0,0,0,0.4)',
					borderTopRightRadius: '10px',
					color: '#fff',
					fontSize: '16px',
					fontFamily: 'Balsamiq Sans',
				}}>
				<FontAwesomeIcon
					className='navIcon'
					icon={faWallet}
					style={{ color: '#fff', marginRight: '5px', fontSize: '16px' }}
				/>
				{value}
			</div>
		);
	}

	renderProductImage(src) {
		return (
			<Image
				src={src}
				style={{
					width: '100%',
					maxWidth: 'inherit',
					maxHeight: '300px',
					objectFit: 'cover',
					borderTopLeftRadius: '10px',
					borderTopRightRadius: '10px',
				}}
			/>
		);
	}

	renderProductName(name) {
		return (
			<div
				style={{
					textAlign: 'left',
					maxWidth: 'inherit',
					whiteSpace: 'nowrap',
					fontSize: '20px',
					margin: '8px 0',
					fontFamily: 'Balsamiq Sans',
					overflow: 'hidden ',
					textOverflow: 'ellipsis',
				}}>
				{name}
			</div>
		);
	}

	renderButton(buttonName, buttonIcon, onClick, color, style) {
		return (
			<div
				onClick={onClick}
				style={{
					padding: '10px',
					cursor: 'pointer',
					backgroundColor: 'rgba(239,83,80,0.15)',
					flexBasis: '50%',
					textAlign: 'center',
					fontSize: '18px',
					textTransform: 'uppercase',
					fontFamily: 'Balsamiq Sans',
					...style,
				}}>
				<FontAwesomeIcon
					className='navIcon'
					icon={buttonIcon}
					style={{
						color: color,
						marginRight: '10px',
						fontSize: '18px',
					}}
				/>
				{buttonName}
			</div>
		);
	}
}

export default CommonProduct;
