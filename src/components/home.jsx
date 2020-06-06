import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Home extends Component {
	state = {};
	imageStyle = {
		maxWidth: '80px',
		maxHeight: '80px',
		display: 'block',
		margin: 'auto',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};
	categoryStyle = {
		position: 'relative',
		minWidth: '110px',
		height: '110px',
		backgroundColor: 'rgba(0,0,0, .05)',
		borderRadius: '50%',
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
						marginTop: '2vh',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					<div
						style={{
							width: '400px',
							backgroundColor: 'rgba(0,0,0,0.06)',
							padding: '2vh 2vw',
							display: 'flex',
							margin: '0.8rem',
							verticalAlign: 'middle',
						}}>
						<div style={this.categoryStyle}>
							<Image
								style={this.imageStyle}
								src='/images/categories/gaming.png'
							/>
						</div>
						<div
							style={{
								marginLeft: '1vw',
								textAlign: 'center',
								alignSelf: 'center',
							}}>
							<h3>GAMING</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							</p>
						</div>
					</div>
					<div
						style={{
							width: '400px',
							backgroundColor: 'rgba(0,0,0,0.06)',
							padding: '2vh 2vw',
							display: 'flex',
							margin: '0.8rem',
						}}>
						<div style={this.categoryStyle}>
							<Image
								style={this.imageStyle}
								src='/images/categories/book.png'
							/>
						</div>
						<div
							style={{
								marginLeft: '1vw',
								textAlign: 'center',
								alignSelf: 'center',
							}}>
							<h3>BOOKS</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							</p>
						</div>
					</div>
					<div
						style={{
							width: '400px',
							backgroundColor: 'rgba(0,0,0,0.06)',
							padding: '2vh 2vw',
							display: 'flex',
							margin: '0.8rem',
						}}>
						<div style={this.categoryStyle}>
							<Image
								style={this.imageStyle}
								src='/images/categories/mobile.png'
							/>
						</div>
						<div
							style={{
								marginLeft: '1vw',
								textAlign: 'center',
								alignSelf: 'center',
							}}>
							<h3>MOBILES</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							</p>
						</div>
					</div>
					{/* <div
						style={{
							...this.categoryStyle,
							margin: '1vh 2vw',
						}}>
						<Image style={this.imageStyle} src='/images/categories/book.png' />
					</div>
					<div style={this.categoryStyle}>
						<Image
							style={this.imageStyle}
							src='/images/categories/mobile.png'
						/>
					</div> */}
				</div>
			</div>
		);
	}
}

export default Home;
