import React from 'react';

const Categories = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				minHeight: '10vh',
				justifyContent: 'center',
				overflow: 'auto',
				whiteSpace: 'nowrap',
				// alignItems: 'center',
			}}>
			<div
				style={{
					border: '1px solid black',
					height: '10vh',
					width: '25vw',
					textAlign: 'center',
					padding: '10px',
				}}>
				<img
					src='/images/categories/book.png'
					alt=''
					style={{ width: '90%' }}
				/>
				<p>Books</p>
			</div>
			<div
				style={{
					border: '1px solid black',
					height: '10vh',
					width: '25vw',
					textAlign: 'center',
				}}>
				two
			</div>
			<div
				style={{
					border: '1px solid black',
					height: '10vh',
					width: '25vw',
					textAlign: 'center',
				}}>
				three
			</div>
		</div>
	);
};

export default Categories;
