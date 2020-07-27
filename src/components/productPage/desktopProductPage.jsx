import React from 'react';
import CommonProduct from '../common/commonProduct';
import { faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

class DesktopProductPage extends CommonProduct {
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
			<div className='container desktopProductPageContainer'>
				<div className='desktopProductPageLeftContainer'>
					<div className='desktopProductPageImageContainer'>
						{this.renderCarousel(src)}
						<div className='desktopProductPageActions'>
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
								wishlist ? 'rgb(253, 186, 73)' : '#fff'
							)}
						</div>
					</div>
				</div>
				<div className='desktopProductPageRightContainer'>
					<div style={{ maxWidth: 750 }}>
						{this.renderBreadCrumb(category, name)}
						{this.renderProductName(name)}
						{this.renderStarRating(rating)}
						{this.renderLdc(ldc)}
						{this.renderDescription(desc)}
					</div>
				</div>
			</div>
		);
	}
}

export default DesktopProductPage;
