import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../css/components/common/productPage.css';
import { Image, Breadcrumb } from 'react-bootstrap';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faWallet,
	faHeart,
	faExchangeAlt,
	faAngleDoubleRight,
	faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';

class MobileProductPage extends Component {
	state = {};
	render() {
		const { src, category, name, rating, ldc, desc } = this.props.product;
		return (
			<div
				className='container'
				style={{
					marginTop: '10px',
					padding: '0 10px',
				}}>
				<Carousel
					interval={null}
					nextIcon={
						<FontAwesomeIcon
							className='navIcon'
							icon={faAngleDoubleRight}
							style={{
								color: '#ef5350',
								fontSize: '30px',
							}}
						/>
					}
					prevIcon={
						<FontAwesomeIcon
							className='navIcon'
							icon={faAngleDoubleLeft}
							style={{
								color: '#ef5350',
								fontSize: '30px',
							}}
						/>
					}>
					{src.map((item) => {
						return (
							<Carousel.Item key={item}>
								<Image
									fluid
									src={item}
									style={{
										display: 'block',
										width: '100%',
										height: '350px',
										objectFit: 'cover',
										maxWidth: 'inherit',
										// borderRadius: '5px',
									}}
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

export default MobileProductPage;
