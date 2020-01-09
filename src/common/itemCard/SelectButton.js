import React, { useCallback } from 'react';
import styled from 'styled-components';
import { colors } from '../../config/constants';

const Container = styled.div`  
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-around;
	background: ${colors.checkPointPink};
	border: 1px solid ${colors.checkPointPink};
	border-radius: 3px;
	color: #FFFFFF;
	margin-left: 10px;
	cursor: pointer;
`;

const SelectButton = () => {

	const handleClick = useCallback(() => {
		console.log('select click');
	}, []);


	return (
		<Container onClick={ handleClick }>
            Select
		</Container>
	);
};

export default SelectButton;
