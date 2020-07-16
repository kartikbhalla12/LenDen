import React from 'react';
import Product from './product/product';
import { getBooks } from '../services/bookService';
import * as authService from '../services/authService';
import { Button } from 'react-bootstrap';
import CommonForm from './common/commonForm';
import PageLoader from './common/pageLoader';

class Books extends CommonForm {
	state = {
		books: [],
		loading: false,
		page: 1,
		limit: 5,
		showButton: false,
		loadingPage: true,
	};

	//TODO EXTRACT CODE

	mapToViewModel = data => ({
		id: data.productid,
		name: data.title,
		category: data.categorytype,
		desc: data.description,
		ldc: data.ldc,
		rating: data.rating,
		src: data.images[0].image,
		wishlist: data.wishlist,
		canBarter: !authService.getCurrentUser() ? true : data.barternow,
	});
	componentDidMount = async () => {
		const { page, limit } = this.state;
		const { data } = await getBooks(page, limit);
		const books = [];
		data.forEach(book => {
			books.push(this.mapToViewModel(book));
		});
		if (books.length < limit)
			return this.setState({ books, loadingPage: false, showButton: false });

		return this.setState({ books, loadingPage: false, showButton: true });
	};

	loadMore = async () => {
		let { page, limit, books } = this.state;
		this.setState({
			showButton: false,
			loading: true,
			page: ++page,
		});

		const { data } = await getBooks(page, limit);
		if (data.length === 0)
			return this.setState({
				loading: false,
			});

		data.forEach(book => {
			books.push(this.mapToViewModel(book));
		});

		if (data.length < limit)
			return this.setState({
				books,
				showButton: false,
				loading: false,
			});

		return this.setState({
			books,
			showButton: true,
			loading: false,
		});
	};

	render() {
		const { books, showButton } = this.state;
		// console.log(books);
		return this.state.loadingPage ? (
			<PageLoader />
		) : (
			<div style={{ textAlign: 'center', marginBottom: '2vh' }}>
				<div
					className='container'
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						marginTop: '1vh',
						justifyContent: 'center',
					}}>
					{books.map(book => {
						return (
							<Product
								key={book.id}
								details={book}
								onClick={() => this.props.history.push(`/books/${book.id}`)}
							/>
						);
					})}
				</div>
				{showButton && (
					<Button style={{ marginTop: '2vh' }} onClick={this.loadMore}>
						Load More
					</Button>
				)}
				{this.renderLoader({
					margin: '3vh auto',
					width: '20%',
				})}
			</div>
		);
	}
}

export default Books;
