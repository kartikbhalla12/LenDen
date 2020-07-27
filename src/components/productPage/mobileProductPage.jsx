import React from 'react';
import { faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import CommonProduct from '../common/commonProduct';

class MobileProductPage extends CommonProduct {
	state = {};
	render() {
		const {
			id,
			src,
			category,
			name,
			rating,
			ldc,
			desc,
			wishlist,
			canBarter,
		} = this.props.product;
		const { onBarter } = this.props;
		return (
			<React.Fragment>
				<div className='container mobileProductPageContainer'>
					{this.renderCarousel(src)}
					{this.renderProductName(name)}

					<div className='mobileProductPageMixedContainer'>
						{this.renderLdc(ldc)}

						{this.renderStarRating(rating)}
					</div>
					{this.renderDescription(desc)}
				</div>
				<div className='mobileProductPageActions'>
					{this.renderButton(
						() => (canBarter ? onBarter(id) : ''),
						'BARTER',
						`barter ${canBarter ? '' : 'disabled'}`,
						faExchangeAlt
					)}

					{this.renderButton(
						() => {},
						'',
						'wishlist',
						faHeart,
						wishlist ? 'rgb(253, 186, 73)' : '#919191'
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default MobileProductPage;
