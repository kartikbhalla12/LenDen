import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Form, Alert, InputGroup } from 'react-bootstrap';
import BarLoader from 'react-spinners/BarLoader';
import ImageUploader from 'react-images-upload';
import imageCompression from 'browser-image-compression';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

class CommonForm extends Component {
	state = {
		data: {},
		error: '',
		success: '',
		uploading: '',
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data });
	};
	onDrop = async pictures => {
		this.setState({ uploading: true });

		const compressedPictures = await this.compressPictures(pictures);
		console.log(compressedPictures);

		this.setState({
			pictures: compressedPictures,
			uploading: false,
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
		if (name === 'password') return this.renderPassInput(placeholder);

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

	renderPassInput(placeholder) {
		const { data, passType } = this.state;
		const name = 'password';
		return (
			<InputGroup className='mb-3'>
				<Form.Control
					className='input'
					name={name}
					type={this.state.passType}
					placeholder={placeholder}
					value={data[name]}
					onChange={this.handleChange}
				/>

				<InputGroup.Append>
					<InputGroup.Text
						className='inputGroupText'
						onClick={() => {
							const { passType } = this.state;
							if (passType === 'password')
								return setTimeout(() => this.setState({ passType: 'text' }));

							if (passType === 'text')
								return setTimeout(() =>
									this.setState({ passType: 'password' })
								);
						}}
						onMouseDown={e => e.preventDefault()}>
						{passType === 'password' && <FontAwesomeIcon icon={faEye} />}
						{passType === 'text' && <FontAwesomeIcon icon={faEyeSlash} />}
					</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
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

	renderUploadingAlert = () => {
		const { uploading } = this.state;
		return (
			uploading && (
				<div style={{ textAlign: 'center' }}>Preparing to upload...</div>
			)
		);
	};

	renderHomeButton = () => (
		<FontAwesomeIcon
			onClick={() => this.props.history.goBack()}
			icon={faAngleDoubleLeft}
		/>
	);
}

export default CommonForm;
