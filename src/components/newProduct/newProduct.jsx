import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
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
			<div
				className='container'
				style={{
					marginTop: '5vh',
				}}>
				<h2
					style={{
						textAlign: 'center',
						fontFamily: 'Balsamiq Sans',
						fontWeight: '700',
					}}>
					POST YOUR PRODUCT
				</h2>
				<div
					style={{
						width: '80vw',
						margin: '5vh auto 0 auto',
						maxWidth: '300px',
					}}>
					<Form noValidate className='form' onSubmit={this.handleSubmit}>
						<h5
							style={{
								textAlign: 'center',
								fontFamily: 'Balsamiq Sans',
								fontWeight: '400',
							}}>
							Choose a Category
						</h5>
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
