import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Form, Alert } from 'react-bootstrap';
import BarLoader from 'react-spinners/BarLoader';
import ImageUploader from 'react-images-upload';
import imageCompression from 'browser-image-compression';

class CommonForm extends Component {
	state = {
		data: {},
		error: '',
		success: '',
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data });
	};
	onDrop = pictures => {
		this.setState({
			pictures: pictures,
		});
	};

	compressPictures = pictures => {
		let compressedPictures = [];
		const options = {
			maxSizeMB: 0.2,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};
		pictures.forEach(picture =>
			compressedPictures.push(imageCompression(picture, options))
		);

		return Promise.all([...compressedPictures]);
	};

	validate = () => {
		const { error } = Joi.validate(this.state.data, this.schema);
		if (error && error.details) return error.details[0].message;
		if (error) return error.message;
		return '';
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			success: '',
			error: '',
		});
		const error = this.validate();
		this.setState({ error });
		if (error) return;

		this.doSubmit();
	};

	renderInput(name, placeholder) {
		const { data } = this.state;
		return (
			<Form.Group controlId={name}>
				<Form.Control
					className='input'
					name={name}
					type={name}
					placeholder={placeholder}
					value={data[name]}
					onChange={this.handleChange}
				/>
			</Form.Group>
		);
	}
	renderAlert = style => {
		const { error } = this.state;
		return (
			error && (
				<Alert style={style} className='error-alert' variant='danger'>
					{error}
				</Alert>
			)
		);
	};

	renderSuccessAlert = style => {
		const { success } = this.state;
		return (
			success && (
				<Alert style={style} className='success-alert' variant='primary'>
					{success}
				</Alert>
			)
		);
	};

	renderLoader = style => {
		return (
			<BarLoader
				css={{ display: 'block', ...style }}
				size={50}
				color='rgb(253,186,73)'
				loading={this.state.loading}
			/>
		);
	};

	resetForm = () => {
		const data = {
			name: '',
			email: '',
			password: '',
		};
		this.setState({ data });
	};

	renderProductInput = (name, type, placeholder) => {
		const { data } = this.state;
		return (
			<Form.Control
				className='input'
				name={name}
				type={type}
				placeholder={placeholder}
				value={data[name]}
				onChange={this.handleChange}
			/>
		);
	};

	renderProductSelect = (name, label, ...rest) => {
		const { data } = this.state;
		return (
			<Form.Group>
				<Form.Label>{label}</Form.Label>
				<Form.Control
					name={name}
					as='select'
					className='my-1 mr-sm-2'
					custom
					onChange={this.handleChange}
					value={data[name]}>
					<option disabled value='0'>
						Choose...
					</option>
					{rest.map(option => (
						<option key={rest.indexOf(option)} value={rest.indexOf(option) + 1}>
							{option}
						</option>
					))}
				</Form.Control>
			</Form.Group>
		);
	};

	renderProductTextArea = (name, label, placeholder, text) => {
		const { data } = this.state;
		return (
			<Form.Group>
				<Form.Label>{label}</Form.Label>
				<Form.Control
					as='textarea'
					rows='3'
					name={name}
					onChange={this.handleChange}
					value={data[name]}
					placeholder={placeholder}
				/>
				<Form.Text className='text-muted'>{text}</Form.Text>
			</Form.Group>
		);
	};

	renderImageUploader = () => {
		return (
			<ImageUploader
				withIcon={true}
				buttonText='Choose images'
				label='Max file size: 10mb, accepted: jpg, png'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.png', '.jpeg']}
				maxFileSize={10485760}
				fileContainerStyle={{ textAlign: 'left', boxShadow: 'none' }}
				withPreview={true}
				buttonStyles={{ backgroundColor: 'rgb(253, 186, 73)' }}
			/>
		);
	};
}

export default CommonForm;
