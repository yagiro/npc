import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { fonts, colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionSummaryAdditional from './SolutionSummaryAdditional';

const classPrefix = 'solution-summary-include';
export const classes = {
	icon: createClassName(classPrefix, 'icon'),
};

const Container = styled.div`
	margin: 10px 15px;
	
	> div:first-child {
		font: ${ fonts.paragraph };
		line-height: 1em;
		color: ${ colors.textDark };
		cursor: pointer;
	}
	
	.${ classes.icon } {
		margin-right: 10px;
	}
`;

const SolutionSummaryInclude = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	
	return (
		<Container onClick={ () => setIsOpen(!isOpen) }>
			<div>
				{isOpen ?
					<FontAwesomeIcon
						icon={ faMinus }
						size="sm"
						className={ classes.icon }
					/> :
					<FontAwesomeIcon
						icon={ faPlus }
						size="sm"
						className={ classes.icon }
					/>}
				Include
			</div>
			<SolutionSummaryAdditional isOpen={ isOpen }>

			</SolutionSummaryAdditional>
		</Container>
	);
};

SolutionSummaryInclude.defaultProps = {

};

SolutionSummaryInclude.propTypes = {

};

export default SolutionSummaryInclude;
