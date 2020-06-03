import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class MainNav extends Component {
	state = {};
	render() {
		return (
			<Navbar variant='dark' style={{ backgroundColor: '#212121' }}>
				<Navbar.Brand
					onClick={this.props.handleBarClick}
					style={{ cursor: 'pointer' }}>
					<FontAwesomeIcon icon={faBars} />
				</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#features'>Features</Nav.Link>
					<Nav.Link href='#pricing'>Pricing</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

export default MainNav;
