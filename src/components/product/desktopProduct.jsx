import React from 'react';
import CommonProduct from '../common/commonProduct';
import { faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

class DesktopProduct extends CommonProduct {
	state = {};

	// addToWishlist = () => {
	// 	const { product } = this.state;
	// 	if (product.wishlist === '#fff') product.wishlist = '#ef5350';
	// 	else product.wishlist = '#fff';
	// 	this.setState({ product });
	// };

	render() {
		const { name, desc, src, rating, ldc, wishlist } = this.props.product;
		const { onClick } = this.props;
		return (
			<div className='desktopProductContainer'>
				<div className='desktopProductImageContainer' onClick={onClick}>
					{this.renderProductImage(src)}
					<div className='desktopStarRatingContainer'>
						{this.renderStarRating(rating)}
					</div>
					{this.renderLdc(ldc)}
				</div>
				<div className='desktopProductDetailContainer' onClick={onClick}>
					{this.renderProductName(name)}
					{this.renderDescription(desc)}
				</div>

				<div className='desktopProductActions'>
					{this.renderButton(() => {}, 'BARTER', 'barter', faExchangeAlt, '')}
					{this.renderButton(
						() => {},
						'',
						'wishlist',
						faHeart,
						wishlist ? '#fdba49' : '#fff'
					)}
				</div>
			</div>
		);
	}
}

export default DesktopProduct;
