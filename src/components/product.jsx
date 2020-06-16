import React, { Component } from 'react';

import DesktopProduct from './desktopProduct';
import MobileProduct from './mobileProduct';

class Product extends Component {
	state = {
		product: {
			//API call
			name: 'Kitten',
			src: 'http://placekitten.com/350/450',
			rating: 4,
			ldc: 240,
			wishlist: true,
		},
	};
	render() {
		// return ;
		return (
			<div>
				<MobileProduct />
				<MobileProduct />
				<MobileProduct />
				<MobileProduct />
				{/* <DesktopProduct product={this.state.product} /> */}
			</div>
		);
	}
}

export default Product;
