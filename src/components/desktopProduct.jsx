import React from 'react';
import CommonProduct from './common/commonProduct';
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
		return (
			<div
				style={{
					width: '280px',
					height: '450px',
					margin: '10px',
				}}>
				<div style={{ position: 'relative' }}>
					{this.renderProductImage(src, {
						maxHeight: '300px',
						borderTopLeftRadius: '10px',
						borderTopRightRadius: '10px',
					})}
					<div style={{ position: 'absolute', top: '10px', right: '15px' }}>
						{this.renderStarRating(rating, {
							marginLeft: '5px',
							fontSize: '19px',
						})}
					</div>
					{this.renderLdc(
						ldc,
						{
							position: 'absolute',
							bottom: 0,
							padding: '5px 10px',
							backgroundColor: 'rgba(0,0,0,0.4)',
							borderTopRightRadius: '10px',
							color: '#fff',
							fontSize: '16px',
						},
						{
							color: '#fff',
						}
					)}
				</div>
				{this.renderProductName(name, { maxWidth: 'inherit', margin: '8px 0' })}
				{this.renderDescription(desc, {
					marginBottom: '10px',
				})}

				<div style={{ display: 'flex' }}>
					{this.renderButton(
						() => {},
						'BARTER',
						{
							borderBottomLeftRadius: '10px',
							margin: '0 5px 0 0',
							padding: '10px',
							fontSize: '18px',
						},
						faExchangeAlt,
						'#ef5350',
						{
							marginRight: '10px',
							fontSize: '18px',
						}
					)}
					{this.renderButton(
						() => {},
						'',
						{
							borderBottomRightRadius: '10px',
							margin: '0 0 0 5px',
							padding: '10px',
							fontSize: '18px',
						},
						faHeart,
						wishlist ? '#ef5350' : '#fff',
						{
							marginRight: '10px',
							fontSize: '20px',
						}
					)}
				</div>
			</div>
		);
	}
}

export default DesktopProduct;
