import React, { Component } from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import BookForm from './bookForm';

class NewProduct extends Component {
	state = {
		data: {
			category: 0,
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({});
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data.category = input.value;
		this.setState({ data });
		this.props.history.push(`/new/${data.category}`);
	};

	render() {
		const { data } = this.state;
		return (
			<div>
				<div style={{ width: '300px', margin: '0px auto' }}>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
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
				</div>
				<Switch>
					<Route path='/new/books' component={BookForm} />
				</Switch>
			</div>
		);
	}
}

export default NewProduct;
