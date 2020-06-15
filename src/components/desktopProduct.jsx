import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faWallet,
	faHeart,
	faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

class DesktopProduct extends Component {
	state = {
		// product: {
		// 	//API call
		// 	name: '',
		// 	src: '',
		// 	rating: 0,
		// 	ldc: 0,
		// 	wishlist: '',
		// },
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
					emptyStarColor='#424242'
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

	addToWishlist = () => {
		const { product } = this.state;
		if (product.wishlist === '#fff') product.wishlist = '#ef5350';
		else product.wishlist = '#fff';
		this.setState({ product });
	};

	render() {
		const { name, src, rating, ldc, wishlist } = this.props.product;
		return (
			<div
				style={{
					width: '280px',
					height: '400px',
					margin: '10px',
				}}>
				<div style={{ position: 'relative' }}>
					{this.renderProductImage(src)}
					{this.renderRating(rating)}
					{this.renderLdc(ldc)}
				</div>
				{this.renderProductName(name)}

				<div style={{ display: 'flex' }}>
					{this.renderButton('BARTER', faExchangeAlt, () => {}, '#f44336', {
						borderBottomLeftRadius: '10px',
						margin: '0 5px 0 0',
					})}
					{this.renderButton(
						'',
						faHeart,
						this.addToWishlist,
						wishlist ? '#ef5350' : '#fff',
						{
							borderBottomRightRadius: '10px',
							margin: '0 0 0 5px',
						}
					)}
				</div>
			</div>
		);
	}
}

export default DesktopProduct;
