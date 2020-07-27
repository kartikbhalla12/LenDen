import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action as toggleMenu } from 'redux-burger-menu';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as Menu } from 'react-burger-menu';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { logOutUser } from '../../app/auth/login';
// import Swipe from 'react-easy-swipe';

const SideNav = () => {
	const dispatch = useDispatch();
	const burgerMenu = useSelector(state => state.entities.burgerMenu.isOpen);
	const user = useSelector(state => state.auth.user);

	const navLinks = [
		// {
		// 	to: '/notifications',
		// 	name: 'Notifications',
		// 	icon: { id: 'sideNavBell', icon: faBell },
		// },
		// { to: '/wishlist', name: 'Wishlist' },
		{ to: '/my-products', name: 'My Products' },
		{
			to: '/',
			name: 'Home',
			exact: true,
			id: 'homeAnchor',
		},
		{ to: '/books', name: 'Books' },
		{ to: '/gaming', name: 'Gaming' },
		{ to: '/mobile', name: 'Mobile' },
		{ to: '/blog', name: 'Blog' },
		{ to: '/contact', name: 'About Us' },
		{ to: '/about', name: 'Contact Us' },
	];

	return (
		<Menu
			customBurgerIcon={false}
			isOpen={burgerMenu}
			onStateChange={state => {
				if (burgerMenu !== state.isOpen) dispatch(toggleMenu(state.isOpen));
			}}>
			<Image
				id='userImageMain'
				src={
					user.userId
						? 'https://placekitten.com/g/300/300'
						: '/images/genericUser.png'
				}
				roundedCircle
				// onClick={onUserClick}
			/>
			{!user.userId && (
				<NavLink
					id='navAnchor'
					to='/login'
					className='menu-item'
					onClick={() => dispatch(toggleMenu(false))}>
					Sign In
				</NavLink>
			)}
			{user.userId && (
				<NavLink
					id='navAnchor'
					to='/me'
					className='menu-item'
					onClick={() => dispatch(toggleMenu(false))}>
					My Account
				</NavLink>
			)}

			{navLinks.map((navLink, index) => (
				<NavLink
					key={index}
					to={navLink.to}
					className='menu-item'
					onClick={() => dispatch(toggleMenu(false))}
					exact={navLink.exact ? true : false}
					id={navLink.id}>
					{navLink.name}
					{navLink.icon && (
						<FontAwesomeIcon id={navLink.icon.id} icon={navLink.icon.icon} />
					)}
				</NavLink>
			))}

			{user.userId && (
				<div id='signOutNav' onClick={() => dispatch(logOutUser())}>
					SIGN OUT
				</div>
			)}
		</Menu>
	);
};

export default SideNav;
