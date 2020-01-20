import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../../config/constants';

const Container = styled.div`  
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${ colors.checkPointPink };
	border-radius: 3px;
	width: 35px;
	height: 34px;
	color: ${ colors.checkPointPink };
	cursor: pointer;
	transition: background-color .2s;
	
	&:hover {
		background-color: ${ colors.boxShadowGrey };
	}
`;

const PdfIcon = () => {

	const handleClick = useCallback(() => {
		console.log('pdf click');
	}, []);
	
	return (
		<Container onClick={ handleClick }>
			<FontAwesomeIcon icon={ faFilePdf } />
		</Container>
	);
};

export default PdfIcon;
