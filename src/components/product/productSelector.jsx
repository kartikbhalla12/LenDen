import React, { Component } from 'react';

import DesktopProduct from './desktopProduct';
import MobileProduct from './mobileProduct';

class ProductSelector extends Component {
	state = {
		isMobile: false,
	};

	componentDidMount = () => {
		this.handleProduct();
		window.addEventListener('resize', this.handleProduct);
	};

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.handleProduct);
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
				onClick={this.props.onClick}
				onBarter={this.props.onBarter}
			/>
		) : (
			<DesktopProduct
				product={details}
				onClick={this.props.onClick}
				onBarter={this.props.onBarter}
			/>
		);
	}
}

export default ProductSelector;
