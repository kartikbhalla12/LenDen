import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from './../../app/entities/newProduct';
import NotFound from './../common/notFound'; //TODO
import BookForm from './bookForm';

const NewProduct = () => {
	const dispatch = useDispatch();
	const category = useSelector(state => state.entities.newProduct.category);
	const categories = [
		{
			value: 'books',
			name: 'Books',
			Component: BookForm,
		},
		{
			value: 'gaming',
			name: 'Gaming',
			Component: NotFound,
		},
		{
			value: 'mobile',
			name: 'Mobile',
			Component: NotFound,
		},
	];

	return (
		<div id='newProductContainer' className='container'>
			<h2>POST YOUR PRODUCT</h2>
			<Form id='categoryForm' noValidate className='form'>
				<h5>Choose a Category</h5>
				<Form.Control
					as='select'
					className='my-1 mr-sm-2'
					custom
					onChange={({ currentTarget: input }) =>
						dispatch(updateCategory(input.value))
					}
					value={category}>
					<option disabled value='0'>
						Choose...
					</option>
					{categories.map((c, i) => (
						<option key={i} value={c.value}>
							{c.name}
						</option>
					))}
				</Form.Control>
			</Form>
			{categories.map((c, i) => {
				const { Component } = c;
				return category === c.value && <Component key={i} />;
			})}
		</div>
	);
};

export default NewProduct;
