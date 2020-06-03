import { slide as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../css/components/sideNav.css';

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
					style={{
						maxWidth: 200,
						margin: '0 auto 2vh auto',
						textAlign: 'center',
					}}
					src='http://placekitten.com/g/300/300'
					roundedCircle
				/>
				<a
					id='home'
					className='menu-item'
					style={{ textAlign: 'center', marginBottom: ' 6vh' }}
					href='/'>
					Login/Signup
				</a>
				<a id='home' className='menu-item' href='/'>
					Home
				</a>
				<a id='about' className='menu-item' href='/about'>
					About
				</a>
				<a id='contact' className='menu-item' href='/contact'>
					Contact
				</a>
				<a onClick={this.showSettings} className='menu-item--small' href=''>
					Settings
				</a>
			</Menu>
		);
	}
}

export default SideNav;
