import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import CategoryElement from './common/categoryElement';
import MainGif from './common/mainGif';

class Home extends Component {
	state = {};
	imageStyle = {
		maxWidth: '60px',
		maxHeight: '60px',
		display: 'block',
		margin: 'auto',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};
	categoryStyle = {
		position: 'relative',
		minWidth: '80px',
		height: '80px',
		backgroundColor: 'rgba(0,0,0, .05)',
		borderRadius: '50%',
		margin: 'auto',
	};
	render() {
		return (
			<div className='container' style={{ padding: '0.5vh' }}>
				<MainGif />
				<div
					style={{
						position: 'relative',
						// marginTop: '0.5vh',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					<CategoryElement
						categoryTitle='GAMING'
						categoryMessage='kirensd dsug hd uidshg aiud saui dusag dauisd uigsa d dsadasd dsa d'
						src='/images/categories/gaming.png'
					/>
					<CategoryElement
						categoryTitle='BOOKS'
						categoryMessage='kirensd dsug hd uidshg aiud saui dusag dauisd uigsa d dsadasd dsa d'
						src='/images/categories/book.png'
					/>
					<CategoryElement
						categoryTitle='MOBILES'
						categoryMessage='kirensd dsug hd uidshg aiud saui dusag dauisd uigsa d dsadasd dsa d'
						src='/images/categories/mobile.png'
					/>

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
