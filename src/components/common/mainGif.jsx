import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeviceType } from '../../app/entities/common';
import { Image } from 'react-bootstrap';

const MainGif = () => {
	const dispatch = useDispatch();

	const { isMobile } = useSelector(state => state.entities.common);
	dispatch(updateDeviceType());

	useEffect(() => {
		window.addEventListener('resize', () => dispatch(updateDeviceType()));

		return () => {
			window.removeEventListener('resize', () => dispatch(updateDeviceType()));
		};
	}, []);

	return (
		<Image //GIF Placeholder
			src={
				isMobile
					? 'https://placekitten.com/1200/450'
					: 'https://placekitten.com/2000/450'
			}
			style={{
				objectFit: 'cover',
				// margin: '0 auto 0.4vh auto',
				width: 'inherit',
				maxWidth: '100%',
				display: 'block',
				// maxHeight: '40vh',
			}}
		/>
	);
};

export default MainGif;
