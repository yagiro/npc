import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../../lib/classNameHelper';
import VerticalMiniStepperItem from './VerticalMiniStepperItem';

const classPrefix = 'vertical-mini-stepper';
export const classes = {
	stepContainer: createClassName(classPrefix, 'step-container'),
};

const Container = styled.div`
	& > div:last-child .${ classes.stepContainer } {
		display: none;
	} 
	width: max-content;
`;

const VerticalMiniStepper = ({ steps, activeStepId, onChange }) => {

	const stepsRender = useCallback((steps, activeStepId) => {
		return steps.map(({ id, label })=> {

			const isActive = activeStepId === id;
			const handleClick = () => onChange(id);

			return (
				<VerticalMiniStepperItem
					key={ id }
					onClick={ handleClick }
					selected={ isActive }
					label={ label }
				/>
			);
		});
	}, [ onChange ]);

	return (
		<Container>
			{ stepsRender(steps, activeStepId) }
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
