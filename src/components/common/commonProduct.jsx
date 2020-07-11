import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';

class CommonProduct extends Component {
	state = {};

	renderStarRating(rating, style, iconStyle) {
		return (
			<div className='productStarRating' style={style}>
				<StarRating
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
				className='productImage'
				fluid
				src={src}
				style={{
					...style,
				}}
			/>
		);
	}

	renderProductName(name, style) {
		return (
			<div
				className='productName'
				style={{
					...style, //TODO remove
				}}>
				{name}
			</div>
		);
	}

	renderLdc(value, style, iconStyle) {
		return (
			<div
				className='productLdc'
				style={{
					...style, //TODO remove
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
				className='productDescription'
				style={{
					...style, //TODO remove
				}}>
				{desc}
			</div>
		);
	}

	renderButton(
		onClick,
		name,
		className,
		style,
		icon,
		iconColor,
		iconStyle,
		id = ''
	) {
		return (
			<div
				className={className}
				onClick={onClick}
				style={{
					...style, //TODO remove
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
