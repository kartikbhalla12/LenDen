import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeviceType } from '../../app/entities/common';
import MobileProduct from './mobileProduct';
import DesktopProduct from './desktopProduct';

const ProductSelector = props => {
	const dispatch = useDispatch();
	const { isMobile } = useSelector(state => state.entities.common);
	dispatch(updateDeviceType());

	useEffect(() => {
		window.addEventListener('resize', () => dispatch(updateDeviceType()));
		return () => {
			window.removeEventListener('resize', () => dispatch(updateDeviceType()));
		};
	}, []);
	const { details } = props;
	return isMobile ? (
		<MobileProduct product={details} onClick={props.onClick} />
	) : (
		<DesktopProduct product={details} onClick={props.onClick} />
	);
};

export default ProductSelector;
