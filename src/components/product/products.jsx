import React from 'react';
import CommonForm from './../common/commonForm';
import { getProducts } from './../../services/productsService';
import * as authService from './../../services/authService';
import PageLoader from './../common/pageLoader';
import ProductSelector from './productSelector';
import { Button } from 'react-bootstrap';

class Products extends CommonForm {
	state = {
		products: [],
		loading: false,
		page: 1,
		limit: 5,
		showButton: false,
		loadingPage: true,
	};

	mapToViewModel = data => ({
		id: data.productid,
		name: data.title,
		category: data.producttype.toLowerCase(),
		desc: data.description,
		ldc: data.ldc,
		rating: data.rating,
		src: data.image,
		wishlist: data.wishlist,
		canBarter: !authService.getCurrentUser() ? true : data.barternow,
	});

	loadProducts = async () => {
		let { products, page, limit } = this.state;
		const { category } = this.props;
		if (products.length === 0) {
			const { data } = await getProducts(category, page, limit);
			data.forEach(product => {
				products.push(this.mapToViewModel(product));
			});

			if (data.length < limit)
				return this.setState({
					products,
					loadingPage: false,
					showButton: false,
				});
			return this.setState({
				products,
				loadingPage: false,
				showButton: true,
			});
		} else {
			this.setState({ page: ++page, loading: true, showButton: false });
			const { data } = await getProducts(category, page, limit);
			data.forEach(product => {
				products.push(this.mapToViewModel(product));
			});

			if (data.length < limit)
				return this.setState({
					products,
					loading: false,
				});

			return this.setState({
				products,
				loading: false,
				showButton: true,
			});
		}
	};

	componentDidMount = () => {
		this.loadProducts();
	};

	render() {
		const { products, showButton } = this.state;
		return this.state.loadingPage ? (
			<PageLoader />
		) : (
			<div className='productsContainer'>
				<div className='container productsInnerContainer'>
					{products.map(product => {
						return (
							<ProductSelector
								key={product.id}
								details={product}
								onClick={() =>
									this.props.history.push(`/${product.category}/${product.id}`)
								}
								onBarter={this.props.onBarter}
							/>
						);
					})}
				</div>
				{showButton && (
					<Button onClick={this.loadProducts}>Load More Products</Button>
				)}
				{this.renderLoader({
					margin: '3vh auto',
					width: '20%',
				})}
			</div>
		);
	}
}

export default Products;
