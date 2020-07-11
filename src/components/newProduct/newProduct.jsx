import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import BookForm from './bookForm';

class NewProduct extends Component {
	state = {
		data: {
			category: '0',
		},
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({});
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data.category = input.value;
		this.setState({ data });
		// this.props.history.push(`/new/${data.category}`);
	};

	render() {
		const { data } = this.state;
		return (
			<div id='newProductContainer' className='container'>
				<h2>POST YOUR PRODUCT</h2>
				<Form
					id='categoryForm'
					noValidate
					className='form'
					onSubmit={this.handleSubmit}>
					<h5>Choose a Category</h5>
					<Form.Control
						as='select'
						className='my-1 mr-sm-2'
						custom
						onChange={this.handleChange}
						value={data.category}>
						<option disabled value='0'>
							Choose...
						</option>
						<option value='books'>Books</option>
						<option value='gaming'>Gaming</option>
						<option value='mobile'>Mobile</option>
					</Form.Control>
				</Form>
				{data.category === 'books' && <BookForm />}
				{/* {data.category === 'gaming' && <BookForm />} */}
			</div>
		);
	}
}

export default NewProduct;
