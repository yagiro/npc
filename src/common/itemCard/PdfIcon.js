import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Container = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #EC407A;
  border-radius: 3px;
  width: 35px;
  height: 34px;
  color: #EC407A;
  cursor: pointer;
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
