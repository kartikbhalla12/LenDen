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
			<div>
				<div
					className='container'
					style={{
						marginTop: '10px',
						padding: '0 10px',
					}}>
					<Carousel
						wrap={false}
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
											height: '40vh',
											objectFit: 'cover',
											maxWidth: 'inherit',
											// borderRadius: '5px',
										}}
									/>
								</Carousel.Item>
							);
						})}
					</Carousel>
					<div
						style={{
							marginTop: '10px',
							fontFamily: 'Balsamiq Sans',
							color: '#424242',
							fontWeight: 400,
							fontSize: '20px',
						}}>
						{name}
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								flexBasis: '40%',

								fontFamily: 'Balsamiq Sans',
								fontSize: '27px',
							}}>
							<FontAwesomeIcon
								className='navIcon'
								icon={faWallet}
								style={{
									marginRight: '10px',
									// fontSize: '16px',
								}}
							/>
							{ldc}
						</div>
						<div style={{ flexBasis: '60%', textAlign: 'right' }}>
							<StarRating
								name='rate2'
								editing={false}
								renderStarIcon={() => (
									<FontAwesomeIcon
										icon={faStar}
										style={{
											fontSize: '20px',
											marginRight: '5px',
											marginTop: '10px',
										}}
									/>
								)}
								starCount={5}
								value={rating}
								starColor='#ef5350'
								emptyStarColor='#424242'
							/>
						</div>
					</div>

					<div
						style={{
							color: '#616161',
							fontStyle: 'italic',
							marginTop: '',
						}}>
						{desc}
					</div>
				</div>
				<div
					// className='fixed-bottom'
					style={{
						backgroundColor: '#f8f8f8',
						display: 'flex',
						position: 'sticky',
						width: '100%',
						bottom: '0',
						left: '0',
						// paddingTop: '10px',
					}}>
					<div
						id='barterIcon'
						style={{
							flexBasis: '50%',
							textAlign: 'center',
							padding: '1rem',
							backgroundColor: 'rgba(239,83,80,0.15)',
							cursor: 'pointer',
							// marginRight: '5px',
							// borderRadius: '5px',
							fontFamily: 'Balsamiq Sans',
							// fontSize: '20px',
							color: '#424242',
							borderRight: '1px solid #ef5350',
						}}>
						<FontAwesomeIcon
							icon={faExchangeAlt}
							style={{
								color: '#ef5350',
								// fontSize: '20px',
								marginRight: '5px',
							}}
						/>
						BARTER
					</div>
					<div
						style={{
							flexBasis: '50%',
							textAlign: 'center',
							padding: '1rem',
							backgroundColor: 'rgba(239,83,80,0.15)',
							cursor: 'pointer',
							// marginLeft: '5px',
							// borderRadius: '5px',
							fontFamily: 'Balsamiq Sans',
							fontSize: '18px',
							color: '#424242',
							borderLeft: '1px solid #ef5350',
						}}>
						<FontAwesomeIcon
							className='navIcon'
							icon={faHeart}
							style={{
								color: '#fff',
								fontSize: '25px',
							}}
						/>
						{/* WISHLIST */}
					</div>
				</div>
			</div>
		);
	}
}

export default MobileProductPage;
