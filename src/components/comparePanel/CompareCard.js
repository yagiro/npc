import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createClassName } from '../../lib/classNameHelper';
import Paragraph from './Paragraph';
import CloseImage from '../../assets/compare/x.png';
import Image from '../general/Image';

const classPrefix = 'compare-card';
export const classes = {
	image: createClassName(classPrefix, 'image'),
	info: createClassName(classPrefix, 'info'),
	close: createClassName(classPrefix, 'close'),
};


const Container = styled.div`  
	display: flex;
	justify-content: space-between;
	background: #FFFFFF 0% 0% no-repeat padding-box;
	box-shadow: ${ (props) => props.isEmpty ? 'none' : '0px 3px 6px #00000029' };
	border: 1px solid #D2D5D9;
	border-radius: 6px;
	opacity: 1;
	padding: 15px 13px;
	width: 250px;
	height: 80px;
	
	
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

const CompareCard = (props) => {
	const { title, price, onClose, index } = props;

	// IMAGE HARDCODE!!!
	return (
		<Container isEmpty={ !title }>
			{
				title && <>
					<div className={ classes.image }>
						<Image path={ require('../../assets/compare/MaestroHyperscaleGateway.png') } />
					</div>
					<div className={ classes.info }>
						<Paragraph color="dark">{ title }</Paragraph>
						<Paragraph color="black" weight="bold">${ price }</Paragraph>
					</div>
					<div className={ classes.close }>
						<Image onClick={ () => onClose(index) } path={ CloseImage } />
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
