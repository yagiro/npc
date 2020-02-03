import React, { useState } from 'react';
import VerticalMiniStepper from './VerticalMiniStepper';
import { mockData } from '../../../config/mockData';

const MockStepperContainer = () => {

	const [ activeStep, setActiveStep ] = useState();

	return (
		<VerticalMiniStepper
			onChange={ setActiveStep }
			activeStepId={ activeStep }
			steps={ mockData.stepsForStepper }
		/>
	);
};

export default MockStepperContainer;
