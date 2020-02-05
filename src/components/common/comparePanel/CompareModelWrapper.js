import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { colors } from '../../../app/consts/consts';
import CompareModel from './CompareModel';

const Container = styled.div`  
	background-color: ${ colors.background };
	box-shadow: ${ (props) => props.isEmpty ? 'none' : `0px 3px 6px ${ colors.borderGrey }` };
	border: 1px solid ${ colors.borderGrey };
	border-radius: 6px;
	width: 250px;
	height: 80px;
	transition: box-shadow .2s;
`;

const CompareModelWrapper = ({ index, model, animationTimeMs, onClose, ...otherProps }) => {
	return (
		<Container
			{ ...otherProps }
		>
			<ReactCSSTransitionGroup
				transitionName="model-content"
				transitionEnterTimeout={ animationTimeMs }
				transitionLeaveTimeout={ animationTimeMs }
			>
				{ model &&
					<CompareModel
						key={ index }
						data={ model }
						onClose={ () => onClose(model) }
					/>
				}
			</ReactCSSTransitionGroup>
		</Container>
	);
};

CompareModelWrapper.defaultProps = {
	isEmpty: true,
};

CompareModelWrapper.propTypes = {
	index: PropTypes.number.isRequired,
	isEmpty: PropTypes.bool,
	children: PropTypes.node,
};

export default CompareModelWrapper;
