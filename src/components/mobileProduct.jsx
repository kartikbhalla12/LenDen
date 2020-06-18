import React from 'react';
import { faExchangeAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/components/mobileProduct.css';
import CommonProduct from './common/commonProduct';

class MobileProduct extends CommonProduct {
	state = {};

	render() {
		const { name, desc, src, rating, ldc, wishlist } = this.props.product;
		const { onClick } = this.props;
		return (
			<div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						height: 150,
						margin: '1rem 0',
					}}>
					<div onClick={onClick} style={{ flexBasis: '30%' }}>
						{this.renderProductImage(src, {
							height: 150,
							borderRadius: '5px',
						})}
					</div>
					<div
						style={{
							flexBasis: '75%',
							marginLeft: '10px',
							height: '150px',
							position: 'relative',
						}}>
						<div
							onClick={onClick}
							style={{ alignItems: 'top', marginBottom: '10px' }}>
							{this.renderProductName(name, {
								maxWidth: '60vw',
							})}
						</div>
						<div onClick={onClick}>{this.renderDescription(desc)}</div>

						<div style={{ display: 'flex', alignItems: 'top' }}>
							{this.renderLdc(
								ldc,
								{
									flexBasis: '40%',
									// maxWidth: '100px',
									color: '#000',
									fontSize: '18px',
									margin: '2px 0 5px 0',
								},
								{
									fontSize: '16px',
								}
							)}

							{this.renderStarRating(
								rating,
								{
									flexBasis: '60%',
									textAlign: 'right',
								},
								{
									marginRight: '3px',
									fontSize: '15px',
								}
							)}
						</div>

						<div
							style={{
								display: 'flex',
								position: 'absolute',
								left: 0,
								bottom: 0,
								right: 0,
							}}>
							{this.renderButton(
								() => {
									console.log('btn');
								},
								'BARTER',
								{
									padding: '8px',
									fontSize: '14px',
									marginRight: '4px',
									borderRadius: '5px',
									lineHeight: '25px',
								},
								faExchangeAlt,
								'#ef5350',
								{ marginRight: '10px', fontSize: '14px' },
								'productBarterIcon'
							)}

							{this.renderButton(
								() => {
									console.log('btn');
								},
								'',
								{
									padding: '8px',
									fontSize: '16px',
									marginLeft: '4px',
									borderRadius: '5px',
									lineHeight: '25px',
								},
								faHeart,
								wishlist ? '#ef5350' : '#fff',
								{ fontSize: '20px' }
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
