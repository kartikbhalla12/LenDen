import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';

class CommonProduct extends Component {
	state = {};

	renderStarRating(rating, style, iconStyle) {
		return (
			<div style={style}>
				<StarRating
					// style={{ position: 'absolute' }}
					name='rate2'
					editing={false}
					renderStarIcon={() => (
						<FontAwesomeIcon icon={faStar} style={iconStyle} />
					)}
					starCount={5}
					value={rating}
					starColor='rgb(253, 186, 73)'
					emptyStarColor='#424242'
				/>
			</div>
		);
	}

	renderProductImage(src, style) {
		return (
			<Image
				fluid
				src={src}
				style={{
					width: '100%',
					objectFit: 'cover',
					maxWidth: 'inherit',
					...style,
				}}
			/>
		);
	}

	renderProductName(name, style) {
		return (
			<div
				style={{
					textAlign: 'left',
					fontSize: '20px',
					fontFamily: 'Balsamiq Sans',
					whiteSpace: 'nowrap',
					overflow: 'hidden ',
					textOverflow: 'ellipsis',
					...style,
				}}>
				{name}
			</div>
		);
	}

	renderLdc(value, style, iconStyle) {
		return (
			<div
				style={{
					fontFamily: 'Balsamiq Sans',
					...style,
				}}>
				<FontAwesomeIcon
					className='navIcon'
					icon={faWallet}
					style={{
						marginRight: '5px',
						fontSize: '16px',
						...iconStyle,
					}}
				/>
				{value}
			</div>
		);
	}

	renderDescription(desc, style) {
		return (
			<div
				style={{
					marginTop: '-10px',
					color: 'gray',
					fontSize: 14,
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					WebkitLineClamp: '2',
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					...style,
				}}>
				{desc}
			</div>
		);
	}

	renderButton(onClick, name, style, icon, iconColor, iconStyle, id = '') {
		return (
			<div
				onClick={onClick}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#424242',
					cursor: 'pointer',
					backgroundColor: 'rgba(253, 186, 73, 0.55)',
					flexBasis: '50%',
					textAlign: 'center',
					textTransform: 'uppercase',
					fontFamily: 'Balsamiq Sans',
					...style,
				}}>
				<FontAwesomeIcon
					className='navIcon'
					id={id}
					icon={icon}
					style={{
						color: iconColor,
						...iconStyle,
					}}
				/>
				{name}
			</div>
		);
	}
}

export default CommonProduct;
