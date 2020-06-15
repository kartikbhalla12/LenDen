import React from 'react';

import CommonProduct from './common/commonProduct';
import { faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

class Product extends CommonProduct {
	state = { color: '#fff' };
	render() {
		return (
			<div
				style={{
					width: '280px',
					height: '400px',
					margin: '10px',
				}}>
				<div style={{ position: 'relative' }}>
					{this.renderProductImage('http://placekitten.com/350/450')}
					{this.renderRating(4)}
					{this.renderLdc(240)}
				</div>
				{this.renderProductName('Kitten')}

				<div style={{ display: 'flex' }}>
					{this.renderButton(
						'BARTER',
						faExchangeAlt,
						() => {
							console.log('rehjr');
						},
						'#f44336',
						{
							borderBottomLeftRadius: '10px',
							margin: '0 5px 0 0',
						}
					)}
					{this.renderButton(
						'',
						faHeart,
						() => {
							if (this.state.color === '#fff')
								this.setState({ color: '#ef5350' });
							else this.setState({ color: '#fff' });
						},
						this.state.color,
						{
							borderBottomRightRadius: '10px',
							margin: '0 0 0 5px',
						}
					)}
				</div>
			</div>
		);
	}
}

export default Product;
