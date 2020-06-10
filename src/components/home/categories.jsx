import React, { Component } from 'react';
import CategoryElement from '../common/categoryElement';

class Categories extends Component {
	state = {};
	render() {
		return (
			<div
				className='container'
				style={{ textAlign: 'center', marginTop: '2vh' }}>
				<h4 style={{ fontFamily: 'Balsamiq Sans' }}>Our various categories!</h4>
				<div
					style={{
						position: 'relative',
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
				</div>
			</div>
		);
	}
}

export default Categories;
