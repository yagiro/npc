import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'vertical-mini-stepper';
export const classes = {
	stepContainer: createClassName(classPrefix, 'step-container'),
};

const Container = styled.div`
	& > div:last-child .${ classes.stepContainer } {
		display: none;
	} 
`;

const StepContainer = styled.div`
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
	border: ${ ({ isActive }) => isActive ? colors.checkPointPink : colors.dividerGray } 1px solid;
	transition: border .3s;
	cursor: pointer;
`;

const StepPoint = styled.div`
	display: flex;
	width: 12px;
	height: 12px;
	border-radius: 6px;
	background: ${ ({ isActive })=> isActive ? colors.checkPointPink : colors.background };
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
	color: ${ ({ isActive }) => isActive ? colors.checkPointPink : colors.paragraphBlack };
	transition: background .3s;
	line-height: 1.6;
`;

const VerticalMiniStepper = ({ steps, activeStepId, onChange }) => {

	const stepsRender = (steps) => {
		return steps.map(({ id, label })=> {

			const isActive = activeStepId === id;
			const handleClick = () => onChange(id);

			return (
				<StepContainer
					key={ id }
					isActive={ isActive }
				>
					<StepCircleContainer>
						<StepCircle
							isActive={ isActive }
							onClick={ handleClick }
						>
							<StepPoint isActive={ isActive }/>
						</StepCircle>

						<StepConnector className={ classes.stepContainer }/>
					</StepCircleContainer>
					<LabelContainer
						onClick={ handleClick }
						isActive={ isActive }
					>
						{ label }
					</LabelContainer>
				</StepContainer>
			);
		});
	};

	return (
		<Container>
			{ stepsRender(steps) }
		</Container>
	);
};

VerticalMiniStepper.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.any.isRequired,
		label: PropTypes.string.isRequired,
	})).isRequired,
	onChange: PropTypes.func,
	activeStepId: PropTypes.any
};

export default VerticalMiniStepper;
