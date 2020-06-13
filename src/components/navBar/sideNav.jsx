import { slide as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../css/components/sideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as authService from './../../services/authService';

class SideNav extends Component {
	state = {};
	showSettings(event) {
		event.preventDefault();
	}

	render() {
		const {
			user,
			menuOpen,
			onUserClick,
			onNavLinkClick,
			onStateChange,
		} = this.props;
		return (
			//customBurgerIcon={false} customCrossIcon={false}
			<Menu
				customBurgerIcon={false}
				isOpen={menuOpen}
				// styles={styles}
				onStateChange={(state) => onStateChange(state)}>
				<Image
					id='userImageMain'
					src={
						user
							? 'http://placekitten.com/g/300/300'
							: '/images/genericUser.png'
					}
					roundedCircle
					onClick={onUserClick}
				/>
				{!user && (
					<NavLink
						id='navAnchor'
						to='/login'
						className='menu-item'
						onClick={onNavLinkClick}>
						Sign In
					</NavLink>
				)}
				{user && (
					<NavLink
						id='navAnchor'
						to='/me'
						className='menu-item'
						onClick={onNavLinkClick}>
						My Account
					</NavLink>
				)}

				<NavLink
					to='/notifications'
					className='menu-item'
					onClick={onNavLinkClick}>
					Notifications
					<FontAwesomeIcon
						icon={faBell}
						style={{ marginLeft: '5px', color: '#ef5350' }}
					/>
				</NavLink>
				<NavLink to='/wishlist' className='menu-item' onClick={onNavLinkClick}>
					Wishlist
					{/* <FontAwesomeIcon
						icon={faHeart}
						style={{ marginLeft: '5px', color: '#ef5350' }}
					/> */}
				</NavLink>
				<NavLink
					to='/my-products'
					className='menu-item'
					onClick={onNavLinkClick}>
					My Products
				</NavLink>
				<NavLink
					id='homeAnchor'
					to='/'
					exact
					className='menu-item'
					onClick={onNavLinkClick}>
					Home
				</NavLink>
				<NavLink to='/books' className='menu-item' onClick={onNavLinkClick}>
					Books
				</NavLink>
				<NavLink to='/gaming' className='menu-item' onClick={onNavLinkClick}>
					Gaming
				</NavLink>
				<NavLink to='/mobiles' className='menu-item' onClick={onNavLinkClick}>
					Mobiles
				</NavLink>
				<NavLink to='/blog' className='menu-item' onClick={onNavLinkClick}>
					Blog
				</NavLink>
				<NavLink to='/contact' className='menu-item' onClick={onNavLinkClick}>
					Contact Us
				</NavLink>
				<NavLink to='/about' className='menu-item' onClick={onNavLinkClick}>
					About Us
				</NavLink>

				{user && (
					// <NavLink
					// 	id='signOutNav'
					// 	to=''
					// 	className='menu-item'
					// 	onClick={onNavLinkClick}>
					// 	Sign Out
					// </NavLink>
					<div id='signOutNav' onClick={authService.logout}>
						SIGN OUT
					</div>
				)}
			</Menu>
		);
	}
}

export default SideNav;
