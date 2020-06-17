import React, { Component } from 'react';

import DesktopProduct from './desktopProduct';
import MobileProduct from './mobileProduct';

class Product extends Component {
	state = {
		isMobile: false,
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

	componentDidMount = () => {
		this.handleProduct();
		window.addEventListener('resize', this.handleProduct);
	};
	handleProduct = () => {
		const isMobile = window.innerWidth > 700 ? false : true;
		this.setState({ isMobile });
	};
	render() {
		if (this.state.isMobile)
			return <MobileProduct product={this.state.product} />;
		else return <DesktopProduct product={this.state.product} />;
	}
}

export default Product;
