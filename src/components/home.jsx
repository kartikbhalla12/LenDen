import React, { Component } from 'react';

import MainGif from './common/mainGif';
import Categories from './categories';

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<MainGif />
				<Categories />
			</React.Fragment>
		);
	}
}

export default Home;
