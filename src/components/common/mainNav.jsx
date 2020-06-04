import React, { Component } from 'react';
import { Navbar, Nav, Image, Form, Input, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faHeart,
	faShoppingCart,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';
import '../../css/components/mainNav.css';

class MainNav extends Component {
	state = {};
	render() {
		return (
			<Navbar variant='dark' style={{ backgroundColor: '#212121' }}>
				<Navbar.Brand
					onClick={this.props.handleBarClick}
					style={{ cursor: 'pointer' }}>
					<FontAwesomeIcon icon={faBars} />
					<Image id='logo' src='/images/demoLogo.png' />
				</Navbar.Brand>
				<Nav className='ml-auto' style={{ backgroundColor: '#424242' }}>
					<FontAwesomeIcon id='searchIcon' icon={faSearch} />
					<Form.Control
						id='searchInput'
						type='text'
						placeholder='Search Something'
					/>
				</Nav>
				<Nav className='ml-auto'>
					<Nav.Link href='#deets'>
						<FontAwesomeIcon
							className='navIcon'
							icon={faHeart}
							style={{ color: '#f44336' }}
						/>
					</Nav.Link>
					<Nav.Link>
						<FontAwesomeIcon
							className='navIcon'
							icon={faShoppingCart}
							style={{ color: '#f5f5f5' }}
						/>
					</Nav.Link>
					<Nav.Link id='userImage'>
						<Image
							style={{
								maxWidth: 42,
							}}
							src='http://placekitten.com/g/300/300'
							roundedCircle
						/>
					</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

export default MainNav;
