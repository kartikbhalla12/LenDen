import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

const PageLoader = () => {
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
};

export default PageLoader;
