import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Home extends Component {
	state = {};
	imageStyle = {
		maxWidth: '150px',
		maxHeight: '150px',
		display: 'block',
		margin: 'auto',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};
	categoryStyle = {
		position: 'relative',
		minWidth: '200px',
		height: '200px',
		backgroundColor: 'rgba(0,0,0, .05)',
		borderRadius: '50%',
		border: '3px solid black',
		margin: '1vh 0',
	};
	render() {
		return (
			<div class='container' style={{ padding: '1vh' }}>
				<Image //GIF Placeholder
					src='http://placekitten.com/1900/450'
					style={{
						margin: '0 auto',
						maxWidth: '90vw',
						display: 'block',
						maxHeight: '40vh',
					}}
				/>
				<div
					style={{
						marginTop: '6vh',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					<div style={this.categoryStyle}>
						<Image
							style={this.imageStyle}
							src='/images/categories/gaming.png'
						/>
					</div>
					<div
						style={{
							...this.categoryStyle,
							margin: '2vh 2vw',
						}}>
						<Image style={this.imageStyle} src='/images/categories/book.png' />
					</div>
					<div style={this.categoryStyle}>
						<Image
							style={this.imageStyle}
							src='/images/categories/mobile.png'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
