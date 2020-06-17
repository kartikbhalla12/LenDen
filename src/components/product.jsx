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
			desc: `Open the door, let me out, let me out, let me-out, let me-aow, let
			meaow, meaow! have my breakfast spaghetti yarn attack the dog then
			pretend like nothing happened. Instantly break out into full speed
			gallop across the house for no reason murr i hate humans they are
			so annoying for floof tum, tickle bum, jellybean footies curly
			toes for`,
		},
	};
	render() {
		// return ;
		return (
			<div>
				<MobileProduct product={this.state.product} />

				{/* <DesktopProduct product={this.state.product} /> */}
			</div>
		);
	}
}

export default Product;
