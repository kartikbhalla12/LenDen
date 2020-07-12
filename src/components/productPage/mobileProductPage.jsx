import React from 'react';
import { faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import CommonProduct from './../common/commonProduct';

class MobileProductPage extends CommonProduct {
	state = {};
	render() {
		const {
			src,
			category,
			name,
			rating,
			ldc,
			desc,
			wishlist,
		} = this.props.product;
		return (
			<React.Fragment>
				<div className='container mobileProductPageContainer'>
					{this.renderCarousel(src)}
					{this.renderProductName(name)}

					<div className='mobileProductPageMixedContainer'>
						{this.renderLdc(ldc)}

						{this.renderStarRating(rating, {
							fontSize: '20px',
							marginRight: '5px',
							marginTop: '10px',
						})}
					</div>
					{this.renderDescription(desc)}
				</div>
				<div className='mobileProductPageActions'>
					{this.renderButton(() => {}, 'BARTER', 'barter', faExchangeAlt)}

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
