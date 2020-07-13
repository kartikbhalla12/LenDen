import React, { Component } from 'react';
import DesktopProductPage from './desktopProductPage';
import MobileProductPage from './mobileProductPage';
import { getProductInfo } from './../../services/productPageService';
import PageLoader from './../common/pageLoader';
class ProductPage extends Component {
	state = {
		product: {
			name: '',
			category: '',
			src: [],
			rating: 0,
			ldc: 0,
			wishlist: true,
			desc: '',
		},
		loading: true,
	};

	mapToViewModel = data => {
		const images = [];
		data.images.forEach(img => {
			images.push(img.image);
		});
		return {
			name: data.title,
			category: data.categorytype,
			src: images,
			rating: data.rating,
			ldc: data.ldc,
			desc: data.description,
		};
	};

	componentDidMount = async () => {
		this.handleProduct();
		window.addEventListener('resize', this.handleProduct);

		const { id } = this.props.match.params;
		const { data: productInfo } = await getProductInfo(id);

		this.setState({
			product: this.mapToViewModel(productInfo),
			loading: false,
		});
	};
	handleProduct = () => {
		const isMobile = window.innerWidth > 700 ? false : true;
		this.setState({ isMobile });
	};
	render() {
		return this.state.loading ? (
			<PageLoader />
		) : this.state.isMobile ? (
			<MobileProductPage product={this.state.product} />
		) : (
			<DesktopProductPage product={this.state.product} />
		);
	}
}

export default ProductPage;
