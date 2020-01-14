import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createClassName } from '../../lib/classNameHelper';
import Paragraph from '../gereric/Paragraph';
import CloseImage from '../../assets/compare/x.png';
import Image from '../gereric/Image';
import { colors } from '../../config/constants';

const classPrefix = 'compare-card';
export const classes = {
	image: createClassName(classPrefix, 'image'),
	info: createClassName(classPrefix, 'info'),
	close: createClassName(classPrefix, 'close'),
};


const Container = styled.div`  
	display: flex;
	justify-content: space-between;
	background: ${ colors.background } 0% 0% no-repeat padding-box;
	box-shadow: ${ (props) => props.isEmpty ? 'none' : `0px 3px 6px ${ colors.boxShadowGrey }` };
	border: 1px solid ${ colors.borderGrey };
	border-radius: 6px;
	opacity: 1;
	padding: 15px 13px;
	width: 250px;
	height: 80px;
	transition: box-shadow .2s;
	
	> * {
		transition: opacity .2s;
	}
	
	> .${ classes.image } {
		width: 48px;
		margin-right: 11px;
		opacity: ${ (props) => props.isEmpty ? '0' : '1' };
	}
	
	> .${ classes.info } {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-right: 11px;
		opacity: ${ (props) => props.isEmpty ? '0' : '1' };
	}
	
	> .${ classes.close } {
		display: flex;
		flex-direction: column;
		width: 12px;
		opacity: ${ (props) => props.isEmpty ? '0' : '1' };
		
		& img {
			cursor: pointer;
		}
	}
`;

const CompareCard = (props) => {
	const { title, price, onClose, index } = props;
	const [ closing, setClosing ] = useState(false);

	const handleClick = () => {
		setClosing(true);
		setTimeout(() => {
			onClose(index);
			setClosing(false);
		}, 300);
	};

	// TODO IMAGE HARDCODE!!!
	return (
		<Container isEmpty={ !title || closing }>
			{
				title && <>
					<div className={ classes.image }>
						<Image path={ require('../../assets/compare/MaestroHyperscaleGateway.png') } />
					</div>
					<div className={ classes.info }>
						<Paragraph color="dark">{ title }</Paragraph>
						<Paragraph color="black" weight="bold">
							${ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
						</Paragraph>
					</div>
					<div className={ classes.close }>
						<Image onClick={ () => handleClick() } path={ CloseImage } />
					</div>
				</>
			}
		</Container>
	);
};

CompareCard.propTypes = {
	index: PropTypes.number,
	image: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
	onClose: PropTypes.func,
};

export default CompareCard;
