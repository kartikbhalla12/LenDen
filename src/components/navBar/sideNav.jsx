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
					onClick={this.props.onUserClick}
				/>
				<NavLink
					id='navAnchor'
					to='/login'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Sign In
				</NavLink>
				<NavLink
					to='/notifications'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Notifications
					<FontAwesomeIcon
						icon={faBell}
						style={{ marginLeft: '5px', color: '#ef5350' }}
					/>
				</NavLink>
				<NavLink
					to='/wishlist'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Wishlist
					{/* <FontAwesomeIcon
						icon={faHeart}
						style={{ marginLeft: '5px', color: '#ef5350' }}
					/> */}
				</NavLink>
				<NavLink
					to='/'
					exact
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Home
				</NavLink>
				<NavLink
					to='/my-products'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					My Products
				</NavLink>
				<NavLink
					to='/books'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Books
				</NavLink>
				<NavLink
					to='/gaming'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Gaming
				</NavLink>
				<NavLink
					to='/mobiles'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Mobiles
				</NavLink>
				<NavLink
					to='/blog'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Blog
				</NavLink>
				<NavLink
					to='/contact'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					Contact Us
				</NavLink>
				<NavLink
					to='/about'
					className='menu-item'
					onClick={this.props.onNavLinkClick}>
					About Us
				</NavLink>
			</Menu>
		);
	}
}

export default SideNav;
