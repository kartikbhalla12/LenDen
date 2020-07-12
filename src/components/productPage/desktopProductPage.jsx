import React from 'react';
import CommonProduct from './../common/commonProduct';
import { faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

class DesktopProductPage extends CommonProduct {
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
			<div className='container desktopProductPageContainer'>
				<div className='desktopProductPageLeftContainer'>
					<div className='desktopProductPageImageContainer'>
						{this.renderCarousel(src)}
						<div className='desktopProductPageActions'>
							{this.renderButton(() => {}, 'BARTER', 'barter', faExchangeAlt)}
							{this.renderButton(
								() => {},
								'',
								'wishlist',
								faHeart,
								wishlist ? '#fff' : 'rgb(253, 186, 73)'
							)}
						</div>
					</div>
				</div>
				<div className='desktopProductPageRightContainer'>
					<div style={{ maxWidth: 750 }}>
						{this.renderBreadCrumb(category, name)}
						{this.renderProductName(name)}
						{this.renderStarRating(rating, {
							fontSize: '20px',
							marginRight: '5px',
							marginTop: '10px',
						})}
						{this.renderLdc(ldc)}
						{this.renderDescription(desc)}
					</div>
				</div>
			</div>
		);
	}
}

export default DesktopProductPage;
