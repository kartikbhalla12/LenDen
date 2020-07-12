import React from 'react';
import { faExchangeAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import CommonProduct from '../common/commonProduct';

class MobileProduct extends CommonProduct {
	state = {};

	render() {
		const { name, desc, src, rating, ldc, wishlist } = this.props.product;
		const { onClick } = this.props;
		return (
			<div>
				<div className='mobileProductContainer'>
					<div className='mobileProductImageContainer' onClick={onClick}>
						{this.renderProductImage(src)}
					</div>
					<div className='mobileProductDetailContainer'>
						<div className='mobileProductNameContainer' onClick={onClick}>
							{this.renderProductName(name)}
						</div>
						<div
							className='mobileProductDescriptionContainer'
							onClick={onClick}>
							{this.renderDescription(desc)}
						</div>

						<div className='mobileProductMixedContainer'>
							{this.renderLdc(ldc)}

							{this.renderStarRating(rating, {
								marginRight: '3px',
								fontSize: '15px',
							})}
						</div>

						<div className='mobileProductActions'>
							{this.renderButton(
								() => {
									console.log('btn');
								},
								'BARTER',
								'barter',
								faExchangeAlt
							)}

							{this.renderButton(
								() => {
									console.log('btn');
								},
								'',
								'wishlist',
								faHeart,
								wishlist ? '#ef5350' : '#fff'
							)}
						</div>
					</div>
				</div>

				<hr style={{ margin: 0 }} />
			</div>
		);
	}
}

export default MobileProduct;
