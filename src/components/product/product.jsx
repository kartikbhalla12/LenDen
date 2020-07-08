import React, { Component } from 'react';

import DesktopProduct from './desktopProduct';
import MobileProduct from './mobileProduct';

class Product extends Component {
	state = {
		isMobile: false,
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
		const { details } = this.props;
		return this.state.isMobile ? (
			<MobileProduct
				product={details}
				onClick={() => {
					console.log('heh');
				}}
			/>
		) : (
			<DesktopProduct
				product={details}
				onClick={() => {
					console.log('heh');
				}}
			/>
		);
	}
}

export default Product;
