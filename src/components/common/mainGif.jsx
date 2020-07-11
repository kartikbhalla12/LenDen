import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class MainGif extends Component {
	state = { src: '' };

	componentDidMount = () => {
		this.handleGif();
		window.addEventListener('resize', this.handleGif);
	};
	handleGif = () => {
		const src =
			window.innerWidth > 600
				? 'https://placekitten.com/2000/350'
				: 'https://placekitten.com/1200/450';
		this.setState({ src });
	};

	render() {
		return (
			<Image //GIF Placeholder
				src={this.state.src}
				style={{
					margin: '0 auto 0.4vh auto',
					width: 'inherit',
					maxWidth: '100%',
					display: 'block',
					maxHeight: '40vh',
				}}
			/>
		);
	}
}

export default MainGif;
