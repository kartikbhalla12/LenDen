import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action as toggleMenu } from 'redux-burger-menu';
import { withRouter, NavLink } from 'react-router-dom';
import { Navbar, Nav, Image, Form, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MainNav = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	return (
		<div className='mainNavBarGroup'>
			<Navbar variant='dark' className='mainNav'>
				<Navbar.Brand
					onClick={() => dispatch(toggleMenu(true))}
					style={{ cursor: 'pointer' }}>
					<img className='icon' src='/icons/menu.svg' alt='' />
				</Navbar.Brand>
				<Image
					onClick={() => props.history.push('/')}
					id='logo'
					src='/images/navLogo.png'
				/>

				<NavLink className='nav-link category' to='/books'>
					Books
				</NavLink>

				<NavLink className='nav-link category' to='/mobiles'>
					Mobiles
				</NavLink>

				<NavDropdown className='category dropdownCategory' title='Gaming'>
					<LinkContainer to='/gaming/cd'>
						<NavDropdown.Item>Gaming CDs</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/gaming/consoles'>
						<NavDropdown.Item>Gaming Consoles</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/gaming/acce'>
						<NavDropdown.Item>Gaming Accessories</NavDropdown.Item>
					</LinkContainer>
				</NavDropdown>

				<Nav className='ml-auto'>
					<div id='navSearchBox'>
						<img
							className='icon'
							id='navSearchIcon'
							src='/icons/search.svg'
							alt=''
						/>
						<Form.Control
							id='navSearchInput'
							type='text'
							placeholder='Search for products'
						/>
					</div>
					<Nav.Link className='iconNav'>
						<img className='icon' src='/icons/bookmark.svg' alt='' />
					</Nav.Link>
					<Nav.Link className='iconNav'>
						<img className='icon' src='/icons/bell.svg' alt='' />
					</Nav.Link>
					<Nav.Link id='userImage' onClick={() => props.history.push('/me')}>
						<Image
							style={{
								maxWidth: 42,
							}}
							src={
								user.userId
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
					<img
						className='icon'
						id='mobileSearchIcon'
						src='/icons/search.svg'
						alt=''
					/>
					<Form.Control
						id='mobileSearchInput'
						type='text'
						placeholder='Search for products'
					/>
				</div>
			</div>
		</div>
	);
};

export default withRouter(MainNav);
