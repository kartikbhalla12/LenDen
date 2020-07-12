import React from 'react';
import _ from 'lodash';
import CommonUserDetails from './common/commonUserDetails';
import {
	faBell,
	faHeart,
	faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

class UserDetails extends CommonUserDetails {
	state = {
		loading: true,
	};
	render() {
		const { user, address } = this.props;

		return (
			<div
				//TODO move address here

				style={{
					backgroundColor: 'rgba(33,33,33,0.1)',
					padding: '20px',
					maxWidth: 1200,
					margin: '0 auto',
					textAlign: 'center',
				}}>
				<h2 style={{ fontFamily: 'Balsamiq Sans', fontSize: 33 }}>
					USER DETAILS
				</h2>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'center',
					}}>
					<div
						style={{
							padding: '3vh 3vw',
							flexBasis: '70%',
							flexGrow: 1,
						}}>
						{this.renderDetail('NAME', _.startCase(user.name))}
						{this.renderDetail('EMAIL', user.sub)}
						{/* {!address && this.renderLoader()} //TODO render loader while address loads */}
						{address && this.renderDetail('MOBILE', address.mobilenumber)}
						{address
							? this.renderDetail('ADDRESS', this.renderTextAddress(address))
							: this.renderDetail('ADDRESS', this.renderButton('ADD ADDRESS'))}

						{address && (
							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center',
									margin: '30px 0 10px 0',
								}}>
								<div
									style={{
										textAlign: 'center',
										fontSize: 20,
										flexBasis: '100%',
									}}>
									{this.renderButton('UPDATE ADDRESS')}
								</div>
							</div>
						)}
					</div>
					<div style={{ flexBasis: '30%', flexGrow: 1 }}>
						{this.renderUserLinks(faBell, 'Notifications')}
						{this.renderUserLinks(faExchangeAlt, 'My Products', {
							margin: '0.4rem 0',
						})}
						{this.renderUserLinks(faHeart, 'Wishlist')}
					</div>
				</div>
			</div>
		);
	}
}

export default UserDetails;
