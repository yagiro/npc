import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';

const StepContainer = styled.div`
  display: flex;
`;

const StepPointContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepPoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: ${ colors.menuGray } 1px solid;
`;

const StepConnector = styled.div`
  width: 1px;
  height: 40px;
  border-radius: 10px;
  background: ${ colors.menuGray };
  margin-left: 9px;
`;

const StepChosen = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border: ${ colors.menuGray } 1px solid;
  background: ${ colors.menuGray };
`;

const VerticalMiniStepper = ( { steps, activeStepId, onChange } ) => {
	
	const stepsRender = (steps) => {
		return steps.map(({ id, label }, i)=> {
			return (
				<StepContainer
					key={ id }
					onClick={ onChange }
					isActive={ activeStepId === id }>
					<StepPointContainer>
						<StepPoint>
							<StepChosen> </StepChosen>
						</StepPoint>

						{/*don't need connector to last element*/}
						{ i !== steps.length - 1 && <StepConnector> </StepConnector> }
					</StepPointContainer>
					{ label }
				</StepContainer>
			);
		});
	};
    
	return (
		<div>
			{
				stepsRender(steps)
			}
		</div>
	);
};

VerticalMiniStepper.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.any.isRequired,
		label: PropTypes.string.isRequired,
	})),
	onChange: PropTypes.func,
	activeStepId: PropTypes.any
};

export default VerticalMiniStepper;
