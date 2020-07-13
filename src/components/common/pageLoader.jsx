import React, { Component } from 'react';
import BarLoader from 'react-spinners/BarLoader';

class PageLoader extends Component {
	state = {};
	render() {
		return (
			<div className='pageLoader'>
				<BarLoader
					css={{ display: 'block' }}
					width={200}
					height={5}
					color='rgb(253,186,73)'
					loading={true}
				/>
			</div>
		);
	}
}

export default PageLoader;
