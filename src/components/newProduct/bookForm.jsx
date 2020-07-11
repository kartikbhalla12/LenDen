import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CommonForm from './../common/commonForm';
import Joi from 'joi-browser';
import uploadImages from '../../services/imageService';
import { postBook } from '../../services/newBookService';
import { getCurrentUser } from '../../services/authService';

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
		loading: false,
		pictures: [],
		error: '',
		success: '',
	};

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

	mapToViewModel = (data, imageData) => ({
		mrp: data.mrp,
		title: data.title,
		binding: data.cover,
		description: data.description,
		conditionquestion1: data.ques1,
		conditionquestion2: data.ques2,
		conditionquestion3: data.ques3,
		conditionquestion4: data.ques4,
		conditionquestion5: data.ques5,
		productid: imageData.productid,
		productimageentity: imageData.imagelinks.map(e => ({ imagelink: e })),
	});

	doSubmit = async () => {
		const { data, pictures } = this.state;
		if (pictures.length < 3)
			return this.setState({ error: 'atleast 3 images are required' });

		this.setState({ loading: true });
		try {
			const { userId } = getCurrentUser();
			const { data: imageData } = await uploadImages(pictures);
			const reqBody = this.mapToViewModel(data, imageData);
			const res = await postBook(userId, reqBody);
			console.log(res);
			this.setState({
				loading: false,
				success: 'Successfully posted your product!',
			});
			setTimeout(() => {
				window.location.replace('/my-products');
			}, 2000);
		} catch (ex) {
			console.log(ex);
			this.setState({ loading: false });
		}
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
					{this.renderProductSelect(
						'cover',
						'What is its binding type?',
						'Paperback',
						'Hardcover'
					)}
					{this.renderProductSelect(
						'ques1',
						'Are there any ink marks inside the book?',
						'No Marks',
						'Personal info markings',
						'Ink or pencil markings'
					)}
					{this.renderProductSelect(
						'ques2',
						'Are there any visible spots or browning?',
						'No spots and browning',
						'Visible browning and spots'
					)}

					{this.renderProductSelect(
						'ques3',
						'Are the pages of the book intact?',
						'Intact',
						'Light wrinkles',
						'Heavy breaks'
					)}
					{this.renderProductSelect(
						'ques4',
						'How does the outer condition of the book looks like?',
						'No tears',
						'Slight wear and tears',
						'Visible cracks and worn out edges'
					)}
					{this.renderProductSelect(
						'ques5',
						'Did you get this book repaired earlier?',
						'No',
						'Yes'
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
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default BookForm;
