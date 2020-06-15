import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faWallet,
	faExchangeAlt,
	faHeart,
} from '@fortawesome/free-solid-svg-icons';

class MobileProduct extends Component {
	state = {
		color: '',
	};

	render() {
		return (
			<div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						// backgroundColor: 'rgba(23,23,23,0.05)',
					}}>
					<div style={{ flexBasis: '30%' }}>
						<Image
							src='http://placekitten.com/350/450'
							style={{
								width: '100%',
								// height: 'inherit',
								// maxHeight: 'inherit',
								// maxWidth: 'inherit',
								// maxHeight: '100px',
								// objectFit: 'cover',
								borderTopLeftRadius: '5px',
								borderBottomLeftRadius: '5px',
							}}
						/>
					</div>
					<div style={{ flexBasis: '75%', marginLeft: '10px' }}>
						<div
							style={{
								textAlign: 'left',
								fontSize: '20px',
								fontFamily: 'Balsamiq Sans',
							}}>
							Kitten
						</div>
						<div style={{ marginBottom: '-10px' }}>
							<StarRating
								// style={{ position: 'absolute' }}
								name='rate2'
								editing={false}
								renderStarIcon={() => (
									<FontAwesomeIcon
										icon={faStar}
										style={{
											marginRight: '5px',
											fontSize: '18px',
											// marginBottom: 0,
											// marginTop: '-15px',
										}}
									/>
								)}
								starCount={5}
								value={2}
								starColor='#ef5350'
								emptyStarColor='#424242'
							/>
						</div>

						<div
							style={{
								// backgroundColor: 'rgba(0,0,0,0.4)',
								// borderTopRightRadius: '10px',
								color: '#000',
								fontSize: '20px',
								fontFamily: 'Balsamiq Sans',
								margin: '0 0 5px 0',
							}}>
							<FontAwesomeIcon
								className='navIcon'
								icon={faWallet}
								style={{ color: '#000', marginRight: '5px', fontSize: '16px' }}
							/>
							240
						</div>
						<div style={{ display: 'flex' }}>
							<div
								// onClick={onClick}
								style={{
									padding: '10px',
									cursor: 'pointer',
									backgroundColor: 'rgba(239,83,80,0.15)',
									flexBasis: '50%',
									textAlign: 'center',
									fontSize: '15px',
									textTransform: 'uppercase',
									fontFamily: 'Balsamiq Sans',
									marginRight: '5px',
									// ...style,
								}}>
								<FontAwesomeIcon
									className='navIcon'
									icon={faExchangeAlt}
									style={{
										color: '#ef5350',
										marginRight: '10px',
										fontSize: '15px',
									}}
								/>
								BARTER
							</div>
							<div
								// onClick={onClick}
								style={{
									padding: '10px',
									cursor: 'pointer',
									backgroundColor: 'rgba(239,83,80,0.15)',
									flexBasis: '50%',
									textAlign: 'center',
									fontSize: '16px',
									textTransform: 'uppercase',
									fontFamily: 'Balsamiq Sans',
									marginLeft: '5px',
									// ...style,
								}}>
								<FontAwesomeIcon
									className='navIcon'
									icon={faHeart}
									style={{
										color: '#ef5350',

										fontSize: '20px',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MobileProduct;
