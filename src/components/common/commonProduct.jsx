import React, { Component } from 'react';
import StarRating from 'react-star-rating-controlled-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faWallet,
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

import // faStar
'@fortawesome/free-regular-svg-icons';
import { Image, Carousel, Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

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
					renderStarIconHalf={() => (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							style={{ color: 'rgb(253, 186, 73)', ...iconStyle }}
						/>
					)}
					starCount={5}
					value={rating}
					starColor='rgb(253, 186, 73)'
					emptyStarColor='#616161'
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
						<Image fluid src={`data:image;base64,${item}`} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);

	renderBreadCrumb = (category, name) => (
		<Breadcrumb
			listProps={{
				style: {
					backgroundColor: 'transparent',
					fontSize: '15px',
					fontWeight: '500',
					marginBottom: '1vh',
					padding: 0,
				},
			}}>
			<LinkContainer to='/'>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
			</LinkContainer>
			<LinkContainer to={`/${category}`}>
				<Breadcrumb.Item>{_.upperFirst(category)}</Breadcrumb.Item>
			</LinkContainer>
			<Breadcrumb.Item active>{_.upperFirst(name)}</Breadcrumb.Item>
		</Breadcrumb>
	);
}

export default CommonProduct;
