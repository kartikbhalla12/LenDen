import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CommonForm from './../common/commonForm';
import Joi from 'joi-browser';
import uploadImages from '../../services/imageService';

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
	doSubmit = async () => {
		const { data, pictures } = this.state;

		// if (pictures.length < 3) {
		// 	return this.setState({ error: 'atleast 3 images are required' });
		// }
		this.setState({ loading: true });

		const { data: imageData } = await uploadImages(pictures);
		console.log(imageData);

		// console.log(imageData.imagelinks, imageData.publicProductId);
		// this.setState({ url });
		this.setState({ loading: false });
	};

	render() {
		return (
			<div
				style={{
					margin: '2vh auto 2vh auto',
					border: '1px solid rgb(253, 186, 73)',
					padding: '20px 30px',
					fontFamily: 'Balsamiq Sans',
					maxWidth: '1000px',
				}}>
				<h3 style={{ marginBottom: '2vh' }}>Tell us about your book</h3>
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
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore?',
						'hard cover',
						'soft cover'
					)}
					{this.renderProductSelect(
						'ques1',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore?',
						'hard cover',
						'soft cover'
					)}
					{this.renderProductSelect(
						'ques2',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore?',
						'hard cover',
						'soft cover'
					)}

					{this.renderProductSelect(
						'ques3',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore?',
						'hard cover',
						'soft cover'
					)}
					{this.renderProductSelect(
						'ques4',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore?',
						'hard cover',
						'soft cover'
					)}
					{this.renderProductSelect(
						'ques5',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore?',
						'hard cover',
						'soft cover'
					)}
					{this.renderProductTextArea(
						'description',
						'Description',
						'Tell us more about your book...',
						'Minimum 5 characters required ' //TODO
					)}
					{this.renderImageUploader()}
					{this.renderLoader('rgb(253, 186, 73)', {
						margin: '3vh auto',
						width: '30%',
						backgroundColor: '#f7e6c8',
					})}
					{this.renderAlert('', {
						color: '#424242',
						border: 'none',
						textAlign: 'center',
					})}
					{this.renderSuccessAlert({
						color: '#424242',
						border: 'none',
						textAlign: 'center',
						fontSize: '1rem',
					})}
					<Button
						variant='primary'
						type='submit'
						style={{
							backgroundColor: 'rgb(253, 186, 73)',
							borderColor: 'transparent',
						}}>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default BookForm;
