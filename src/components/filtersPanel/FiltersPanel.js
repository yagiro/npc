import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Title from '../generic/Title';
import Span from '../generic/Span';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../generic/Image';
import CloseImage from '../../assets/compare/x.png';
import { colors, fonts } from '../../config/constants';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import ChosenFilters from './ChosenFilters';
import Filters from './Filters';
import { Collapse } from 'react-collapse';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	font: ${ fonts.paragraph };
`;

const TopSection = styled.div`
	display: flex;
`;

const BottomSection = styled.div`
	border-top: ${(props) => props.isCollapse ? 0 : '1px' } solid ${ colors.lightgray };
	border-bottom: ${(props) => props.isCollapse ? 0 : '1px' } solid ${ colors.lightgray };
	width: 100%;
`;

const SubTitle = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const ToggleContainer = styled.div`
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

function FiltersPanel({ filters, chosenFilters, onChange, title, subTitleBold, subTitle }) {

	const [ isCollapse, setIsCollapse ] = useState(false);

	// show and hide Filters Section
	const onToggleView = useCallback(() => {
		setIsCollapse(!isCollapse);
	}, [ isCollapse, setIsCollapse ]);

	return (
		<Container>
			<TopSection>
				<div>
					<Title size="32px">{ title }</Title>
					<SubTitle>
						<Span bold margin="0 5px 0 0"> { subTitleBold } </Span> { subTitle }
					</SubTitle>
				</div>
				<ChosenFilters chosenFilters={ chosenFilters } onChange={ onChange }/>
			</TopSection>
			<BottomSection isCollapse={ isCollapse }>
				<ToggleContainer>
					<ToggleArea onClick={ onToggleView }>
						{ !isCollapse
							? <FontAwesomeIcon icon={ faSlidersH } size="sm"/>
							: <Image path={ CloseImage } width="12px" height="12px"/>
						}
						<Span bold margin="0 0 0 15px">Filter</Span>
					</ToggleArea>
				</ToggleContainer>
				<Collapse isOpened={ isCollapse }>

					<Filters
						onChange={ onChange }
						chosenFilters={ chosenFilters }
						filters={ filters }/>

				</Collapse>
			</BottomSection>
		</Container>
	);

}

export default FiltersPanel;
