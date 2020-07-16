import React, { Component } from 'react';
import DesktopProductPage from './desktopProductPage';
import MobileProductPage from './mobileProductPage';
import { getProductInfo } from './../../services/productPageService';
import PageLoader from './../common/pageLoader';
import * as authService from '../../services/authService';
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
		loadingPage: true,
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
			wishlist: data.wishlist,
			canBarter: !authService.getCurrentUser() ? true : data.barternow,
		};
	};

	componentDidMount = async () => {
		this.handleProduct();
		window.addEventListener('resize', this.handleProduct);

		const { id } = this.props.match.params;
		try {
			const { data: productInfo } = await getProductInfo(id);
			console.log(productInfo);

			this.setState({
				product: this.mapToViewModel(productInfo),
				loadingPage: false,
			});
		} catch (ex) {
			if (ex.response.status === 404) {
				this.props.history.replace('/not-found');
			}
		}
	};
	handleProduct = () => {
		const isMobile = window.innerWidth > 700 ? false : true;
		this.setState({ isMobile });
	};

	handleBarter = () => {
		const { canBarter } = this.state.product;
		if (canBarter) console.log('heh');
	};

	render() {
		return this.state.loadingPage ? (
			<PageLoader />
		) : this.state.isMobile ? (
			<MobileProductPage
				product={this.state.product}
				onBarter={this.handleBarter}
			/>
		) : (
			<DesktopProductPage
				product={this.state.product}
				onBarter={this.handleBarter}
			/>
		);
	}
}

export default ProductPage;
