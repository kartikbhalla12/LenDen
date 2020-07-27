import React, { Component } from 'react';
import StarRating from 'react-star-rating-component-new';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faWallet,
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { Image, Carousel, Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

class CommonProduct extends Component {
	renderStarRating(rating) {
		return (
			<div className='productStarRating'>
				<StarRating
					name='productRating'
					editing={false}
					renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
					renderStarIconHalf={() => <FontAwesomeIcon icon={faStarHalfAlt} />}
					renderEmptyStarIcon={() => <FontAwesomeIcon icon={faStarEmpty} />}
					starCount={5}
					value={rating}
				/>
			</div>
		);
	}

	renderProductImage(src) {
		return (
			<Image className='productImage' fluid src={`data:image;base64,${src}`} />
		);
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
			{src.map((item, index) => {
				return (
					<Carousel.Item key={index}>
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
