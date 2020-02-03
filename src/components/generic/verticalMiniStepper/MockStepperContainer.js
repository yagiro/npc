import React, { useState } from 'react';
import VerticalMiniStepper from './VerticalMiniStepper';
import { mockData } from '../../../config/mockData';

const MockStepperContainer = () => {

	const [ activeStep, setActiveStep ] = useState();

	return (
		<div>
			<VerticalMiniStepper
				onChange={ setActiveStep }
				activeStepId={ activeStep }
				steps={ mockData.stepsForStepper }
			/>
		</div>
	);
};

export default MockStepperContainer;
