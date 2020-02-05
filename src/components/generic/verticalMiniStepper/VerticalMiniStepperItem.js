import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { classes } from './VerticalMiniStepper';
import { colors } from '../../../app/consts/consts';

const Container = styled.div`
	display: flex;
`;

const StepCircleContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StepCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	border: ${ ({ selected }) => selected ? colors.checkPointPink : colors.dividerGray } 1px solid;
	transition: border .3s;
	cursor: pointer;
`;

const StepPoint = styled.div`
	display: flex;
	width: 12px;
	height: 12px;
	border-radius: 6px;
	background: ${ ({ selected })=> selected ? colors.checkPointPink : colors.background };
	transition: background .3s;
`;

const StepConnector = styled.div`
	width: 1px;
	height: 28px;
	border-radius: 10px;
	background: ${ colors.dividerGray };
	margin-left: 9px;
	transition: all .3s;
`;

const LabelContainer = styled.div`
	font-size: 14px;
	margin-left: 10px;
	height: min-content;
	cursor: pointer;
	color: ${ ({ selected }) => selected ? colors.checkPointPink : colors.paragraphBlack };
	transition: background .3s;
	line-height: 1.6;
`;

const VerticalMiniStepperItem = ({ selected, onClick, label }) => {
	return (
		<Container selected={ selected }>
			<StepCircleContainer>
				<StepCircle
					selected={ selected }
					onClick={ onClick }
				>
					<StepPoint selected={ selected }/>
				</StepCircle>
				<StepConnector className={ classes.stepContainer }/>
			</StepCircleContainer>
			<LabelContainer
				onClick={ onClick }
				selected={ selected }
			>
				{ label }
			</LabelContainer>
		</Container>
	);
};

VerticalMiniStepperItem.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string.isRequired,
	selected: PropTypes.bool,
};


export default VerticalMiniStepperItem;
