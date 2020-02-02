import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../../lib/classNameHelper';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import CompareModelCloseButton from './CompareModelCloseButton';
import CompareModelInfo from './CompareModelInfo';

const classPrefix = 'compare-card';
export const classes = {
	image: createClassName(classPrefix, 'image'),
	info: createClassName(classPrefix, 'info'),
};

const Container = styled.div`  
	display: flex;
	justify-content: space-between;
	opacity: ${ props => props.show ? 1 : 0 };
	padding: 15px 13px;
	width: 100%;
	height: 100%;
	transition: opacity .3s;
	
	> .${ classes.image } {
		width: 48px;
		margin-right: 11px;
	}
`;

const CompareModel = (props) => {
	const { onClose, data } = props;
	const { title, price, image } = data || {};
	const [ show, setShow ] = useState(false);

	useEffect(() => {
		setTimeout(() => setShow(!!data), 0);
	}, [ data ]);

	const handleClick = useCallback (() => {
		if (onClose) onClose();
	}, [ onClose ]);

	if (!data) return null;

	return (
		<Container show={ show }>
			<div className={ classes.image }>
				<Image path={ buildAssetAbsolutePath(image) }/>
			</div>
			<CompareModelInfo title={ title } price={ price }/>
			<CompareModelCloseButton onClick={ handleClick }/>
		</Container>
	);
};

CompareModel.propTypes = {
	data: PropTypes.shape({
		image: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
	}),
	onClose: PropTypes.func,
};

export default CompareModel;

