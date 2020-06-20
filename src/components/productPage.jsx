import React, { Component } from 'react';
import { Image, Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';
import '../css/components/common/productPage.css';
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
import { Carousel } from 'react-bootstrap';

class ProductPage extends Component {
	state = {
		product: {
			name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
			category: 'books',
			src: [
				'http://placekitten.com/350/450',
				'http://placekitten.com/350/350',
				'http://placekitten.com/350/850',
			],
			rating: 4,
			ldc: 240,
			wishlist: true,
			desc: `Open the door, let me out, let me out, let me-out, let me-aow, let
		meaow, meaow! have my breakfast spaghetti yarn attack the dog then
		pretend like nothing happened. Instantly break out into full speed
		gallop across the house for no reason murr i hate humans they are
		so annoying for floof tum, tickle bum, jellybean footies curly
		toes for`,
		},
	};
	componentDidMount = () => {
		const { id } = this.props.match.params;
		//api call using id
		//populate state
	};
	render() {
		const { src, category, name, rating, ldc, desc } = this.state.product;
		return (
			<div
				className='container'
				style={{
					display: 'flex',
					marginTop: '10px',
					justifyContent: 'center',
				}}>
				<div style={{ flexBasis: '40%', position: 'relative' }}>
					<div
						style={{
							position: 'absolute',
							right: 0,
							width: '60%',
							minWidth: '350px',
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
									<Carousel.Item>
										<Image
											fluid
											src={item}
											style={{
												display: 'block',
												width: '100%',
												height: '500px',
												objectFit: 'cover',
												maxWidth: 'inherit',
												borderRadius: '5px',
											}}
										/>
									</Carousel.Item>
								);
							})}
						</Carousel>

						<div style={{ display: 'flex', marginTop: '10px' }}>
							<div
								style={{
									flexBasis: '50%',
									textAlign: 'center',
									padding: '15px',
									backgroundColor: 'rgba(239,83,80,0.15)',
									cursor: 'pointer',
									marginRight: '5px',
									borderRadius: '5px',
									fontFamily: 'Balsamiq Sans',
									fontSize: '20px',
									color: '#424242',
								}}>
								<FontAwesomeIcon
									className='navIcon'
									icon={faExchangeAlt}
									style={{
										color: '#ef5350',
										fontSize: '20px',
										marginRight: '5px',
									}}
								/>
								BARTER
							</div>
							<div
								style={{
									flexBasis: '50%',
									textAlign: 'center',
									padding: '15px',
									backgroundColor: 'rgba(239,83,80,0.15)',
									cursor: 'pointer',
									marginLeft: '5px',
									borderRadius: '5px',
									fontFamily: 'Balsamiq Sans',
									fontSize: '18px',
									color: '#424242',
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
				</div>
				<div style={{ flexBasis: '60%', marginLeft: '20px' }}>
					<div style={{ maxWidth: 750 }}>
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

							<Breadcrumb.Item active>{_.upperFirst(category)}</Breadcrumb.Item>
						</Breadcrumb>
						<div
							style={{
								fontFamily: 'Balsamiq Sans',
								color: '#424242',
								fontWeight: 400,
								fontSize: '25px',
							}}>
							{name}
						</div>
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
						<div
							style={{
								fontFamily: 'Balsamiq Sans',
								fontSize: '30px',
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
						<div
							style={{
								color: '#616161',
								fontStyle: 'italic',
								marginTop: '10px',
							}}>
							{desc}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductPage;
