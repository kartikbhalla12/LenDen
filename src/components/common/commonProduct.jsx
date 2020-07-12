import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faWallet,
	faAngleDoubleRight,
	faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Image, Carousel } from 'react-bootstrap';

class CommonProduct extends Component {
	state = {};

	renderStarRating(rating, iconStyle) {
		return (
			<div className='productStarRating'>
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

	renderProductImage(src) {
		return <Image className='productImage' fluid src={src} />;
	}

	renderProductName(name) {
		return <div className='productName'>{name}</div>;
	}

	renderLdc(value) {
		return (
			<div className='productLdc'>
				<FontAwesomeIcon className='navIcon' icon={faWallet} />
				{value}
			</div>
		);
	}

	renderDescription(desc) {
		return <div className='productDescription'>{desc}</div>;
	}

	renderButton(onClick, name, className, icon, iconColor) {
		return (
			<div className={className} onClick={onClick}>
				<FontAwesomeIcon
					className='navIcon'
					icon={icon}
					style={{
						color: iconColor,
					}}
				/>
				{name}
			</div>
		);
	}

	renderCarousel = src => (
		<Carousel
			className='productCarousel'
			wrap={false}
			interval={null}
			nextIcon={
				<FontAwesomeIcon className='navIcon' icon={faAngleDoubleRight} />
			}
			prevIcon={
				<FontAwesomeIcon className='navIcon' icon={faAngleDoubleLeft} />
			}>
			{src.map(item => {
				return (
					<Carousel.Item key={item}>
						<Image fluid src={item} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default CommonProduct;
