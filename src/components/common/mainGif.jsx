import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../../css/components/common/mainGif.css';

class MainGif extends Component {
	state = { src: '' };

	componentDidMount = () => {
		this.handleGif();
		window.addEventListener('resize', this.handleGif);
	};
	handleGif = () => {
		const src =
			window.innerWidth > 600
				? 'http://placekitten.com/1900/450'
				: 'http://placekitten.com/1200/450';
		this.setState({ src });
	};

	render() {
		return (
			<Image //GIF Placeholder
				src={this.state.src}
				style={{
					margin: '0 auto 0.4vh auto',
					width: 'inherit',
					maxWidth: '90vw',
					display: 'block',
					maxHeight: '40vh',
				}}
			/>
		);
	}
}

export default MainGif;
