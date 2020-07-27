import React from 'react';
import CommonForm from './../common/commonForm';
import { connect } from 'react-redux';
import { getProducts, changeButtonStatus } from '../../app/entities/products';
import ProductSelector from './productSelector';
import PageLoader from './../common/pageLoader';
import { Button } from 'react-bootstrap';

class Products extends CommonForm {
	componentDidMount = () => {
		if (this.props.page !== 0) return this.props.changeButtonStatus(true); //LOAD MORE if(list % limit !== 0) same page fetch, else next page fetch

		this.props.getProducts();
	};

	render() {
		const { loadingPage, list, showButton } = this.props.products;
		if (loadingPage) return <PageLoader />;
		return (
			<div className='productsContainer'>
				<div className='container productsInnerContainer'>
					{list.map(product => (
						<ProductSelector
							key={product.id}
							details={product}
							onClick={() =>
								this.props.history.push(`/${product.category}/${product.id}`)
							}

							//TODO
							// onBarter={this.props.onBarter}
						/>
					))}
				</div>
				{showButton && (
					<Button onClick={this.props.getProducts}>Load More Products</Button>
				)}

				{this.renderLoader({
					margin: '3vh auto',
					width: '40%',
					maxWidth: '250px',
				})}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	getProducts: () => dispatch(getProducts()),
	changeButtonStatus: bool => dispatch(changeButtonStatus(bool)),
});

const mapStateToProps = state => ({
	products: state.entities.products,
	loading: state.entities.products.loading,
	page: state.entities.products.page,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
