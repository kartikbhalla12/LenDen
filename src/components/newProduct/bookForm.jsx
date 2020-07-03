import React from 'react';
import CommonForm from './../common/commonForm';
import { Image, Form, Button, Row, Col } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import http from '../../services/httpService';
import './../../css/components/newProduct.css';

import { api } from '../../config.json';

// const api = 'http://www.localhost:8080/lenden';
const apiEndPoint = `${api}/products/book/wq744Jk3YI1zS7Lr3c2wHwl4xGUZUF`;

class BookForm extends CommonForm {
	state = {
		data: {
			title: 'Lorem, ipsum',
			mrp: 124,
			cover: 0,
			ques1: 1,
			ques2: 0,
			ques3: 0,
			ques4: 1,
			ques5: 0,
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, vel?',
		},
		pictures: [],
	};

	onDrop = (picture) => {
		// const pictures = this.state.pictures;

		// picture.forEach((pic) => {
		// 	console.log(pic);
		// });
		// const fd = new FormData();
		// fd.append('image', picture[0], picture[0].name);
		// pictures.push(fd);
		// console.log(pictures);
		this.setState({
			pictures: this.state.pictures.concat(picture),
		});
	};

	handleSubmit = async (e) => {
		const { data, pictures } = this.state;
		e.preventDefault();
		// console.log({ ...data, pictures });
		// await http.post(apiEndPoint, pictures[0]);

		// await http.post(apiEndPoint, { ...data, pictures });

		const fd = new FormData();
		fd.set('data', data);
		pictures.forEach((pic) => fd.append('image', pic));
		const res = await http.post(apiEndPoint, fd);
		console.log(res);
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
					<Form.Group as={Row} controlId='formPlaintextEmail'>
						<Form.Label column sm='1'>
							Title
						</Form.Label>
						<Col sm='5'>
							<Form.Control type='text' placeholder='Enter Title' />
						</Col>
						<Form.Label column sm='1'>
							MRP
						</Form.Label>
						<Col sm='5'>
							<Form.Control type='number' placeholder='Enter MRP' />
						</Col>
					</Form.Group>

					<Form.Group controlId='formBasicEmail'>
						<Form.Label>
							Binding Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Nisi, quam.
						</Form.Label>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
							custom
							// onChange={this.handleChange}
							// value={data.category}
						>
							<option disabled value='0'>
								Choose...
							</option>
							<option value='0'>Hard Cover</option>
							<option value='1'>Paper Back</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>
							Binding Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Nisi, quam.
						</Form.Label>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
							custom
							// onChange={this.handleChange}
							// value={data.category}
						>
							<option disabled value='0'>
								Choose...
							</option>
							<option value='0'>Hard Cover</option>
							<option value='1'>Paper Back</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>
							Binding Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Nisi, quam.
						</Form.Label>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
							custom
							// onChange={this.handleChange}
							// value={data.category}
						>
							<option disabled value='0'>
								Choose...
							</option>
							<option value='0'>Hard Cover</option>
							<option value='1'>Paper Back</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>
							Binding Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Nisi, quam.
						</Form.Label>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
							custom
							// onChange={this.handleChange}
							// value={data.category}
						>
							<option disabled value='0'>
								Choose...
							</option>
							<option value='0'>Hard Cover</option>
							<option value='1'>Paper Back</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>
							Binding Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Nisi, quam.
						</Form.Label>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
							custom
							// onChange={this.handleChange}
							// value={data.category}
						>
							<option disabled value='0'>
								Choose...
							</option>
							<option value='0'>Hard Cover</option>
							<option value='1'>Paper Back</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>
							Binding Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Nisi, quam.
						</Form.Label>
						<Form.Control
							as='select'
							className='my-1 mr-sm-2'
							id='inlineFormCustomSelectPref'
							custom
							// onChange={this.handleChange}
							// value={data.category}
						>
							<option disabled value='0'>
								Choose...
							</option>
							<option value='0'>Hard Cover</option>
							<option value='1'>Paper Back</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Description</Form.Label>
						<Form.Control as='textarea' rows='3' />
					</Form.Group>

					<ImageUploader
						withIcon={true}
						buttonText='Choose images'
						label='Max file size: 5mb, accepted: jpg, png'
						onChange={this.onDrop}
						imgExtension={['.jpg', '.png', '.jpeg']}
						maxFileSize={5242880}
						fileContainerStyle={{ textAlign: 'left' }}
						withPreview={true}
						buttonStyles={{ backgroundColor: 'rgb(253, 186, 73)' }}
					/>
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
