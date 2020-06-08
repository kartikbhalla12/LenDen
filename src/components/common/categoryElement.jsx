import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../../css/components/common/category.css';
import { Redirect, withRouter } from 'react-router-dom';

class CategoryElement extends Component {
	state = {};

	handleClick = () => {
		const { categoryTitle, history } = this.props;
		const path = `/${categoryTitle.toLowerCase()}`;
		history.push(path);
	};

	render() {
		const { categoryTitle, categoryMessage, src } = this.props;
		return (
			<div className='category' onClick={this.handleClick}>
				<div className='imageBox'>
					<Image
						style={{
							// maxWidth: '60px',
							// maxHeight: '60px',
							display: 'block',
							margin: 'auto',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
						src={src}
					/>
				</div>
				<div
					style={{
						margin: 'auto',
						textAlign: 'center',
						alignSelf: 'center',
					}}>
					<h3 style={{ fontFamily: 'Balsamiq Sans' }}>{categoryTitle}</h3>
					<p>{categoryMessage}</p>
				</div>
			</div>
		);
	}
}

export default withRouter(CategoryElement);
