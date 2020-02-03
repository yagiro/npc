import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../../generic/Title';
import Span from '../../generic/Span';
import { colors, fonts } from '../../../config/constants';
import ChosenFilters from './ChosenFilters';
import Filters from './Filters';
import { Collapse } from 'react-collapse';
import FiltersToggleButton from './FiltersToggleButton';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	font-size: ${ fonts.paragraphNormal };
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

function FiltersPanel({ filters, chosenFilters, onChange, title, subTitleBold, subTitle }) {

	const [ isCollapse, setIsCollapse ] = useState(false);

	// show and hide Filters Section
	const handleToggleView = useCallback(() => {
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
				<ChosenFilters
					chosenFilters={ chosenFilters }
					onChange={ onChange }
					filters={ filters }
				/>
			</TopSection>
			<BottomSection isCollapse={ isCollapse }>
				<FiltersToggleButton onClick={ handleToggleView } isCollapse={ isCollapse }/>
				<Collapse isOpened={ isCollapse }>
					<Filters
						onChange={ onChange }
						chosenFilters={ chosenFilters }
						filters={ filters }
					/>
				</Collapse>
			</BottomSection>
		</Container>
	);

}

FiltersPanel.propTypes = {
	filters: PropTypes.array.isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	title: PropTypes.string,
	subTitleBold: PropTypes.string,
	subTitle: PropTypes.string,
};

export default FiltersPanel;

