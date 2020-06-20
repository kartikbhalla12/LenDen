import React, { Component } from 'react';
import DesktopProductPage from './desktopProductPage';
import MobileProductPage from './mobileProductPage';

class ProductPage extends Component {
	state = {
		product: {
			name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
			category: 'books',
			src: [
				'http://placekitten.com/350/450',
				'http://placekitten.com/350/350',
				'http://placekitten.com/350/850',
			],
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
		const { id } = this.props.match.params;
		this.handleProduct();
		window.addEventListener('resize', this.handleProduct);
		//api call using id
		//populate state
	};
	handleProduct = () => {
		const isMobile = window.innerWidth > 700 ? false : true;
		this.setState({ isMobile });
	};
	render() {
		return this.state.isMobile ? (
			<MobileProductPage product={this.state.product} />
		) : (
			<DesktopProductPage product={this.state.product} />
		);
	}
}

export default ProductPage;
