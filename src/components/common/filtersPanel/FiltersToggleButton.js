import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Image from '../../generic/Image';
import CloseImage from '../../../assets/compare/x.png';
import Span from '../../generic/Span';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	align-content: center;
	margin: 20px 0;
	letter-spacing: 0;
	text-transform: capitalize;
	line-height: 100%;
`;

const ToggleArea = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	cursor: pointer;
`;

const FiltersToggleButton = ({ isCollapse, onClick }) => {
	return (
		<Container>
			<ToggleArea onClick={ onClick }>
				{ !isCollapse
					? <FontAwesomeIcon icon={ faSlidersH } size="sm"/>
					: <Image path={ CloseImage } width="12px" height="12px"/>
				}
				<Span bold margin="0 0 0 15px">Filter</Span>
			</ToggleArea>
		</Container>
	);
};

export default FiltersToggleButton;
