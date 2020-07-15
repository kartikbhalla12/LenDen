import React, { Component } from 'react';
import { Navbar, Nav, Image, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faHeart,
	faShoppingCart,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class MainNav extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navbar variant='dark' className='mainNav'>
					<Navbar.Brand
						onClick={this.props.onBarClick}
						style={{ cursor: 'pointer' }}>
						<FontAwesomeIcon icon={faBars} />
					</Navbar.Brand>
					<Image
						onClick={() => this.props.history.push('/')}
						id='logo'
						src='/images/navLogo.png'
					/>
					<Nav className='ml-auto' id='navSearchBox'>
						<FontAwesomeIcon id='navSearchIcon' icon={faSearch} />
						<Form.Control
							id='navSearchInput'
							type='text'
							placeholder='Search for products'
						/>
					</Nav>
					<Nav className='ml-auto'>
						<Nav.Link href='#deets'>
							<FontAwesomeIcon
								id='mainNavHeart'
								className='navIcon'
								icon={faHeart}
							/>
						</Nav.Link>
						<Nav.Link>
							<FontAwesomeIcon className='navIcon' icon={faShoppingCart} />
						</Nav.Link>
						<Nav.Link id='userImage' onClick={this.props.onUserClick}>
							<Image
								style={{
									maxWidth: 42,
								}}
								src={
									this.props.user
										? 'https://placekitten.com/g/300/300'
										: '/images/genericUser.png'
								}
								roundedCircle
							/>
						</Nav.Link>
					</Nav>
				</Navbar>
				<div id='mobileSearchBox'>
					<div className='ml-auto' id='mobileSearchBoxItem'>
						<FontAwesomeIcon id='mobileSearchIcon' icon={faSearch} />
						<Form.Control
							id='mobileSearchInput'
							type='text'
							placeholder='Search for products'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(MainNav);
