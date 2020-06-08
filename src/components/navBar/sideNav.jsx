import { slide as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../css/components/sideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class SideNav extends Component {
	state = {};
	showSettings(event) {
		event.preventDefault();
	}
	render() {
		return (
			//customBurgerIcon={false} customCrossIcon={false}
			<Menu
				customBurgerIcon={false}
				isOpen={this.props.menuOpen}
				// styles={styles}
				onStateChange={(state) => this.props.onStateChange(state)}>
				<Image
					id='userImageMain'
					src='http://placekitten.com/g/300/300'
					roundedCircle
				/>
				<NavLink id='navAnchor' to='/login' className='menu-item'>
					Login/Signup
				</NavLink>
				<NavLink to='/notifications' className='menu-item'>
					Notifications
					<FontAwesomeIcon
						icon={faBell}
						style={{ marginLeft: '5px', color: '#ef5350' }}
					/>
				</NavLink>
				<NavLink to='/wishlist' className='menu-item'>
					Wishlist
					{/* <FontAwesomeIcon
						icon={faHeart}
						style={{ marginLeft: '5px', color: '#ef5350' }}
					/> */}
				</NavLink>
				<NavLink to='/' exact className='menu-item'>
					Home
				</NavLink>
				<NavLink to='/my-products' className='menu-item'>
					My Products
				</NavLink>
				<NavLink to='/books' className='menu-item'>
					Books
				</NavLink>
				<NavLink to='/gaming' className='menu-item'>
					Gaming
				</NavLink>
				<NavLink to='/mobiles' className='menu-item'>
					Mobiles
				</NavLink>
				<NavLink to='/blog' className='menu-item'>
					Blog
				</NavLink>
				<NavLink to='/contact' className='menu-item'>
					Contact Us
				</NavLink>
				<NavLink to='/about' className='menu-item'>
					About Us
				</NavLink>
			</Menu>
		);
	}
}

export default SideNav;
