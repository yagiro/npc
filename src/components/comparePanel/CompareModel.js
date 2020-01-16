import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../lib/classNameHelper';
import Paragraph from '../gereric/Paragraph';
import CloseImage from '../../assets/compare/x.png';
import Image from '../gereric/Image';

const classPrefix = 'compare-card';
export const classes = {
	image: createClassName(classPrefix, 'image'),
	info: createClassName(classPrefix, 'info'),
	close: createClassName(classPrefix, 'close'),
};

const Container = styled.div`  
	display: flex;
	justify-content: space-between;
	opacity: ${ props => props.show ? '1' : '0' };
	padding: 15px 13px;
	width: 100%;
	height: 100%;
	transition: opacity .3s;
	
	> .${ classes.image } {
		width: 48px;
		margin-right: 11px;
	}
	
	> .${ classes.info } {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-right: 11px;
	}
	
	> .${ classes.close } {
		display: flex;
		flex-direction: column;
		width: 12px;
		
		& img {
			cursor: pointer;
		}
	}
`;

/*
	- encapsulate CloseButton
	- encapsulate Info
	- process.env.PUBLIC_URL > use function
	- create formatters.js file with formatCurrency and use it
 */

const CompareModel = (props) => {
	const { onClose, data } = props;
	const { title, price, image } = data || {};
	const [ show, setShow ] = useState(false);

	useEffect(() => setShow(!!data), [ data ]);

	const handleClick = () => {
		if (onClose) onClose();
	};

	if (!data) return null;

	return (
		 <Container show={ show }>
			<div className={ classes.image }>
				<Image path={ process.env.PUBLIC_URL + image } />
			</div>
			<div className={ classes.info }>
				<Paragraph color="dark">{ title }</Paragraph>
				<Paragraph color="black" weight="bold">
					${ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
				</Paragraph>
			</div>
			<div className={ classes.close }>
				<Image
					onClick={ handleClick }
					path={ CloseImage }
				/>
			</div>
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
