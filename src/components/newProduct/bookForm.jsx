import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CommonForm from './../common/commonForm';
import Joi from 'joi-browser';
import { connect } from 'react-redux';
import {
	updateError,
	prepareUpload,
	postBook,
} from './../../app/entities/newProduct';

const customError = new Error('Every question is required');

class BookForm extends CommonForm {
	state = {
		data: {
			title: '',
			mrp: '',
			cover: 0,
			ques1: 0,
			ques2: 0,
			ques3: 0,
			ques4: 0,
			ques5: 0,
			description: '',
		},
		images: [],
	};

	questions = [
		{
			name: 'cover',
			question: 'What is its binding type?',
			options: ['Paperback', 'Hardcover'],
		},
		{
			name: 'ques1',
			question: 'Are there any ink marks inside the book?',
			options: ['No marks', 'Personal info markings', 'Ink or pencil markings'],
		},
		{
			name: 'ques2',
			question: 'Are there any visible spots or browning?',
			options: ['No spots and browning', 'Visible browning and spots'],
		},
		{
			name: 'ques3',
			question: 'Are the pages of the book intact?',
			options: ['Intact', 'Light wrinkles', 'Heavy breaks'],
		},
		{
			name: 'ques4',
			question: 'How does the outer condition of the book looks like?',
			options: [
				'No tears',
				'Slight wear and tears',
				'Visible cracks and worn out edges',
			],
		},
		{
			name: 'ques5',
			question: 'Did you get this book repaired earlier?',
			options: ['No', 'Yes'],
		},
	];

	schema = {
		title: Joi.string().required().min(5),
		mrp: Joi.number()
			.min(0)
			.required()
			.label('MRP')
			.error(new Error('Price is required')),
		cover: Joi.number()
			.min(1)
			.required()
			.label('Cover Question')
			.error(customError),
		ques1: Joi.number().min(1).required().error(customError),
		ques2: Joi.number().min(1).required().error(customError),
		ques3: Joi.number().min(1).required().error(customError),
		ques4: Joi.number().min(1).required().error(customError),
		ques5: Joi.number().min(1).required().error(customError),
		description: Joi.string().min(5).required().label('Description'), //TODO
	};

	doSubmit = () => {
		const { data, images } = this.state;
		this.props.postBook(data, images);
	};

	render() {
		return (
			<div className='productForm'>
				<h3>Tell us about your book</h3>
				<Form noValidate className='form' onSubmit={this.handleSubmit}>
					<Form.Group as={Row}>
						<Form.Label column sm='1'>
							Title
						</Form.Label>
						<Col sm='5'>
							{this.renderProductInput('title', 'text', 'Enter Title')}
						</Col>
						<Form.Label column sm='1'>
							MRP
						</Form.Label>
						<Col sm='5'>
							{this.renderProductInput('mrp', 'number', 'Enter Price')}
						</Col>
					</Form.Group>

					{this.questions.map(ques =>
						this.renderProductSelect(ques.name, ques.question, ...ques.options)
					)}

					{this.renderProductTextArea(
						'description',
						'Description',
						'Tell us more about your book...',
						'Minimum 5 characters required ' //TODO
					)}
					{this.renderImageUploader()}
					{this.renderLoader({
						margin: '3vh auto',
						width: '30%',
					})}
					{this.renderAlert()}
					{this.renderSuccessAlert()}
					{this.renderUploadingAlert()}
					<Button
						variant='primary'
						disabled={this.props.preparing}
						type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	const {
		error,
		success,
		loading,
		preparing,
		images,
	} = state.entities.newProduct;
	return {
		error,
		success,
		loading,
		preparing,
		images,
	};
};

const mapDispatchToProps = dispatch => ({
	updateError: error => dispatch(updateError(error)),
	prepareUpload: value => dispatch(prepareUpload(value)),
	postBook: (data, images) => dispatch(postBook(data, images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
