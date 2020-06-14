import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faHeart,
	faExchangeAlt,
	faWallet,
} from '@fortawesome/free-solid-svg-icons';

class Books extends Component {
	state = {
		color: '#fff',
	};
	render() {
		return (
			<div
				className='container'
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					marginTop: '5vh',
					justifyContent: 'center',
				}}>
				<div
					style={{
						width: '280px',
						height: '400px',
						margin: '10px',
						// border: '1px solid #616161',
					}}>
					<div style={{ position: 'relative' }}>
						<Image
							src='http://placekitten.com/350/450'
							style={{
								width: '100%',
								maxWidth: 'inherit',
								maxHeight: '300px',
								objectFit: 'cover',
								borderTopLeftRadius: '10px',
								borderTopRightRadius: '10px',
							}}
						/>
						<div style={{ position: 'absolute', top: '10px', right: '15px' }}>
							<StarRating
								style={{ position: 'absolute' }}
								name='rate2'
								editing={false}
								renderStarIcon={() => (
									<FontAwesomeIcon
										icon={faStar}
										style={{ marginLeft: '5px', fontSize: '19px' }}
									/>
								)}
								starCount={5}
								value={2}
								starColor='#ef5350'
								emptyStarColor='#fff'
							/>
						</div>
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
							240
						</div>
					</div>

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
						Kitten
					</div>

					<div style={{ display: 'flex' }}>
						<div
							onClick={() => {}}
							style={{
								padding: '10px',
								cursor: 'pointer',
								margin: '0 5px 0 0',
								backgroundColor: 'rgba(239,83,80,0.15)',
								flexBasis: '50%',
								textAlign: 'center',
								fontSize: '18px',
								textTransform: 'uppercase',
								fontFamily: 'Balsamiq Sans',
								borderBottomLeftRadius: '10px',
							}}>
							<FontAwesomeIcon
								className='navIcon'
								icon={faExchangeAlt}
								style={{
									color: '#f44336',
									marginRight: '5px',
									fontSize: '18px',
								}}
							/>
							BARTER
						</div>
						<div
							onClick={() => {
								if (this.state.color === '#fff')
									this.setState({ color: '#ef5350' });
								else this.setState({ color: '#fff' });
							}}
							style={{
								display: 'block',
								cursor: 'pointer',
								padding: '10px',
								margin: '0 0 0 5px',
								backgroundColor: 'rgba(239,83,80,0.15)',
								flexBasis: '50%',
								textAlign: 'center',
								fontSize: '18px',
								textTransform: 'uppercase',
								fontFamily: 'Balsamiq Sans',
								borderBottomRightRadius: '10px',
							}}>
							<FontAwesomeIcon
								className='navIcon'
								icon={faHeart}
								style={{
									color: this.state.color,
									marginRight: '5px',
									fontSize: '25px',
								}}
							/>
							{/* WISHLIST */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Books;
