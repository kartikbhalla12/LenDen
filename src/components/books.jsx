import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import StarRating from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faHeart,
	faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

class Books extends Component {
	state = {};
	render() {
		return (
			<div
				className='container'
				style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5vh' }}>
				<div
					style={{
						width: '350px',
						height: '460px',
						// border: '1px solid black',
						backgroundColor: 'rgba(255,255,255,0.6)',
					}}>
					<div style={{ position: 'relative' }}>
						<Image
							src='http://placekitten.com/350/350'
							style={{
								width: '100%',
								maxWidth: '350px',
								height: '350px',
								objectFit: 'cover',
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
										style={{ marginLeft: '5px', fontSize: '20px' }}
									/>
								)}
								starCount={5}
								value={2}
								starColor='#ef5350'
								emptyStarColor='#fff'
							/>
						</div>
						{/* <div
							style={{
								position: 'absolute',
								bottom: 0,
								padding: '5px 10px',
								backgroundColor: 'rgba(255,255,255,0.5)',
								borderTopRightRadius: '10px',
							}}>
							<span>Vigyan Vihar, Delhi</span>
						</div> */}
					</div>

					<div
						style={{
							textAlign: 'center',
							fontSize: '22px',
							margin: '10px',
							fontFamily: 'Balsamiq Sans',
						}}>
						Kitten
					</div>

					{/* <div className='row' style={{ margin: '5px', height: '50px' }}>
						<div
							style={{
								backgroundColor: '#fff',
								margin: '5px',
								textAlign: 'center',
								fontSize: '20px',
								textTransform: 'uppercase',
								fontFamily: 'Balsamiq Sans',
								verticalAlign: 'middle',
							}}
							className='col'>
							Barter
						</div>
						<div
							style={{
								backgroundColor: '#fff',
								margin: '5px',
								textAlign: 'center',
								fontSize: '20px',
								textTransform: 'uppercase',
								fontFamily: 'Balsamiq Sans',
							}}
							className='col'>
							<span>Wishlist</span>
						</div>
					</div> */}

					<div style={{ display: 'flex' }}>
						<div
							style={{
								padding: '10px',
								cursor: 'pointer',
								margin: '0 5px 0 10px',
								backgroundColor: 'rgba(239,83,80,0.15)',
								flexBasis: '50%',
								textAlign: 'center',
								fontSize: '18px',
								textTransform: 'uppercase',
								fontFamily: 'Balsamiq Sans',
							}}>
							<FontAwesomeIcon
								className='navIcon'
								icon={faExchangeAlt}
								style={{ color: '#f44336', marginRight: '10px' }}
							/>
							BARTER
						</div>
						<div
							style={{
								cursor: 'pointer',
								padding: '10px',
								margin: '0 10px 0 5px',
								backgroundColor: 'rgba(239,83,80,0.15)',
								flexBasis: '50%',
								textAlign: 'center',
								fontSize: '18px',
								textTransform: 'uppercase',
								fontFamily: 'Balsamiq Sans',
							}}>
							<FontAwesomeIcon
								className='navIcon'
								icon={faHeart}
								style={{ color: '#fff', marginRight: '10px' }}
							/>
							WISHILIST
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Books;
