import React, { Component } from 'react';
import Product from './product/product';
import { getBooks } from '../services/bookService';

class Books extends Component {
	state = {
		books: [],
	};

	componentDidMount = async () => {
		// const books = await getBooks();
		let books = [
			{
				name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
				category: 'books',
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
			{
				name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
				category: 'books',
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
			{
				name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
				category: 'books',
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
			{
				name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
				category: 'books',
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
		];
		this.setState({ books });
	};
	render() {
		const { books } = this.state;
		console.log(books);
		return (
			<div
				className='container'
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					// marginTop: '1vh',
					justifyContent: 'center',
				}}>
				{books.map(book => (
					<Product details={book} />
				))}
			</div>
		);
	}
}

export default Books;
